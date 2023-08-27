const MemberSchema = require("../schemas/memberSchema");
const ReferenceSchema = require("../schemas/referenceSchema");
const IncentiveSchema = require("../schemas/incentiveSchema");
const FinalIncentiveArrayBackupSchema = require("../schemas/finalIncentiveArrayBackup");
const ErrorsSchema = require("../schemas/errorsSchema");
const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { finalIncentiveUtility } = require("../utilities/finalIncentiveUtility");
const { nonWorkingRewards } = require("../utilities/nonWorkingRewards");
const { incentiveUtil } = require("../utilities/nestedChildren");

const sessionController = {
  getSession: async (req, res, next) => {
    try {
      const cookies = req.cookies;

      if (!cookies?.jwt) {
        return res.sendStatus(401);
      }
      const accessToken = cookies.jwt;

      const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

      const user = await MemberSchema.findOne({ _id: decoded.id }, { password: false }).lean();

      if (!user) {
        return res.sendStatus(403); //Forbidden
      }

      res.status(201).json({ user });
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  register: async (req, res, next) => {
    try {
      const image = req.file;
      let filePath = "";

      if (image?.filename) {
        filePath = `/${image.destination}/${image.filename}`;
      }

      const { memberName, email, address, contactNumber, password, referedByMemberId } = req.body;

      let userCount = await MemberSchema.count();

      // userCount = userCount - 1;

      const referedByMember = await ReferenceSchema.findOne({ memberId: referedByMemberId }).lean();

      if (referedByMember) {
        if (referedByMember.referencesMemberId.length < 3) {
          if (!memberName || !email || !address || !contactNumber || !password) {
            res.status(400).send("Please Add ALL Fields");
          } else {
            const userExists = await MemberSchema.findOne({ email }).lean();

            if (userExists) {
              res.status(400).send("User Already Exists");
            } else {
              const salt = await bcrypt.genSalt(10);
              const hashedPassword = await bcrypt.hash(password, salt);

              const userCreated = await MemberSchema.create({
                _id: userCount,
                profilePic: filePath,
                memberName,
                email,
                address,
                contactNumber,
                password: hashedPassword,
                referedByMemberId,
              });

              if (userCreated) {
                const newMemberId = userCreated._id;

                await ReferenceSchema.findOneAndUpdate(
                  { memberId: referedByMemberId },
                  { $set: { referencesMemberId: [...referedByMember.referencesMemberId, newMemberId] } }
                );

                if (referedByMember.referencesMemberId.length === 0) {
                  await ReferenceSchema.create({
                    memberName,
                    memberId: userCreated._id,
                    referedByMemberId,
                    parentBranch: referedByMember.branch,
                    branch: "branchA",
                  });
                } else if (referedByMember.referencesMemberId.length === 1) {
                  await ReferenceSchema.create({
                    memberName,
                    memberId: userCreated._id,
                    referedByMemberId,
                    parentBranch: referedByMember.branch,
                    branch: "branchB",
                  });
                } else if (referedByMember.referencesMemberId.length === 2) {
                  await ReferenceSchema.create({
                    memberName,
                    memberId: userCreated._id,
                    referedByMemberId,
                    parentBranch: referedByMember.branch,
                    branch: "branchC",
                  });
                }

                const array = await ReferenceSchema.find();

                const finalIncentives = await finalIncentiveUtility(array, userCreated._id);

                // console.log(finalIncentives);

                if (finalIncentives.length) {
                  console.log("Got Incentive Array");
                  await FinalIncentiveArrayBackupSchema.create({ earnedFromMemberId: userCreated._id, finalIncentives });
                }

                for (const incentive of finalIncentives) {
                  const { memberId, money } = incentive;
                  try {
                    await Promise.all([
                      IncentiveSchema.create({
                        memberId,
                        earnedFromMemberId: userCreated._id,
                        incentiveEarned: money,
                      }),
                      MemberSchema.updateOne({ _id: memberId }, { $inc: { incentiveEarned: money } }),
                    ]);
                  } catch (err) {
                    let errorLog = `Error processing incentive for memberId: ${memberId} , earnedFromMemberId: ${userCreated._id} => ${err}`;
                    await ErrorsSchema.create(errorLog);
                    console.error(errorLog);
                  }
                }

                let status = await nonWorkingRewards();

                if (status.completed !== true) {
                  console.log("Received nonWorkingRewards", status);
                }

                // const accessToken = jwt.sign({ id: userCreated._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
                // res.cookie("jwt", accessToken, { maxAge: process.env.SESSION_EXPIRE * 60 * 60 * 1000 });
                // const user = userCreated;
                // res.status(201).json({ user });

                res.status(200).send("Ok");
              } else {
                res.status(400).send("Invalid User Data");
              }
            }
          }
        } else {
          res.status(401).send("Reference Limit reached for the referral code");
        }
      } else {
        res.status(400).send("Invalid Referal Code");
      }
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.query;

      if (!email || !password) {
        res.status(400).send("Please Add ALL Fields");
      }

      const user = await MemberSchema.findOne({ email: email });

      if (user && (await bcrypt.compare(password, user.password))) {
        //Create JWT
        const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.cookie("jwt", accessToken, { maxAge: process.env.SESSION_EXPIRE * 60 * 60 * 1000 });
        res.status(200).json({ user });
      } else {
        res.status(400).send("Invalid Credentials");
      }
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  logout: async (req, res, next) => {
    try {
      const cookies = req.cookies;
      if (!cookies?.jwt) {
        return res.sendStatus(204); //No Content
      }

      res.clearCookie("jwt");
      res.sendStatus(204);
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
};

module.exports = sessionController;
