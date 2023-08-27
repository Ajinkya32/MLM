const ReferenceSchema = require("../schemas/referenceSchema");
const MemberSchema = require("../schemas/memberSchema");
const createError = require("http-errors");
const { nestedChildren } = require("../utilities/nestedChildren");

const referenceController = {
  getReferenceData: async (req, res, next) => {
    try {
      const mainData = await ReferenceSchema.find();

      const array = mainData.filter((e) => e.memberId.toString() === req.user._id.toString());

      const referenceData = nestedChildren(array, mainData);

      res.status(201).json({ referenceData, array });
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
  newReference: async (req, res, next) => {
    try {
      const { memberName, memberId, referedByMemberId } = req.query;

      const referenceCreated = await ReferenceSchema.create({ memberName, memberId, referedByMemberId });

      res.status(201).json({ referenceCreated });
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
  getReferenceDataAdmin: async (req, res, next) => {
    try {
      // const user = await MemberSchema.findOne({_id: req.user._id})

      const mainData = await ReferenceSchema.find();

      const array = mainData.filter((e) => !e.referedByMemberId);

      let referencesMemberId = [];

      for (i = 0; i < array.length; i++) {
        let newArray = [array[i]];
        const referenceData = nestedChildren(newArray, mainData);
        referencesMemberId.push(referenceData);
      }

      let data = { memberId: req.user._id, memberName: "admin", level: "0" };

      res.status(201).json({ ...data, referencesMemberId });
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
};

module.exports = referenceController;
