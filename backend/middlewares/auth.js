const jwt = require("jsonwebtoken");
const MemberSchema = require("../schemas/memberSchema");
require("dotenv").config();

exports.isAuthenticated = async (req, res, next) => {
  let token;
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.status(401).send("Not Authorized, No token");
  }

  try {
    token = cookies.jwt;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await MemberSchema.findOne({ _id: decoded.id }, { _id: true, email: true, role: true, referedByMemberId: true });

    if (!user) {
      res.status(401).send("Not Authorized");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send("Not Authorized");
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(401).send("Not An Admin");
  }
};
