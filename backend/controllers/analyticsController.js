const IncentiveSchema = require("../schemas/incentiveSchema");
const MemberSchema = require("../schemas/memberSchema");
const NonWorkingSchema = require("../schemas/nonWorkingIncentiveSchema");
const LeadershipRewardsSchema = require("../schemas/leadershipRewardsSchema");
const createError = require("http-errors");

const analyticsController = {
  getAnalytics: async (req, res, next) => {
    try {
      const referencesIncentiveData = await IncentiveSchema.find({ memberId: req.user._id });

      const referenceIncentiveAnalytics = await IncentiveSchema.aggregate([
        { $match: { memberId: req.user._id } },
        { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, count: { $sum: "$incentiveEarned" } } },
        { $sort: { _id: 1 } },
      ]);

      const nonWorkingIncentiveData = await NonWorkingSchema.find({ memberId: req.user._id });

      const membersData = await MemberSchema.find(
        { referedByMemberId: req.user._id },
        { _id: true, memberName: true, email: true, contact: true, createdAt: true, level: true }
      );

      const membersAnalytics = await MemberSchema.aggregate([
        { $match: { referedByMemberId: req.user._id } },
        { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, count: { $sum: 1 } } },
        { $sort: { _id: 1 } },
      ]);

      res.status(201).json({
        referencesIncentiveData,
        membersData,
        membersAnalytics,
        referenceIncentiveAnalytics,
        nonWorkingIncentiveData,
      });
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
  getAnalyticsAdmin: async (req, res, next) => {
    try {
      const referencesIncentiveDataAdmin = await IncentiveSchema.find();

      const nonWorkingIncentiveDataAdmin = await NonWorkingSchema.find();

      const leadershipRewardsDataAdmin = await LeadershipRewardsSchema.find();

      const membersDataAdmin = await MemberSchema.find();

      const membersAnalyticsAdmin = await MemberSchema.aggregate([
        { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, count: { $sum: 1 } } },
        { $sort: { _id: 1 } },
      ]);

      res.status(201).json({
        referencesIncentiveDataAdmin,
        membersDataAdmin,
        nonWorkingIncentiveDataAdmin,
        leadershipRewardsDataAdmin,
        membersAnalyticsAdmin,
      });
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  getAnalyticsUser: async (req, res, next) => {
    try {
      const { memberId } = req.body;

      const referencesIncentiveData = await IncentiveSchema.find({ memberId: memberId });

      const memberInfo = await MemberSchema.findOne({ _id: memberId }).lean();

      const nonWorkingIncentiveData = await NonWorkingSchema.find({ memberId: memberId });

      const membersData = await MemberSchema.find(
        { referedByMemberId: memberId },
        { _id: true, memberName: true, email: true, contact: true, createdAt: true, level: true }
      );

      let nonWorkingIncentive = 0;

      for (let i = 0; i < nonWorkingIncentiveData.length; i++) {
        nonWorkingIncentive = nonWorkingIncentive + parseInt(nonWorkingIncentiveData[i].incentiveEarned);
      }

      let membersJoined = 0;

      for (let i = 0; i < membersData.length; i++) {
        membersJoined = membersJoined + 1;
      }

      res.status(201).json({
        nonWorkingIncentive,
        memberInfo,
        referencesIncentiveData,
        membersData,
        nonWorkingIncentiveData,
        membersJoined,
      });
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
};

module.exports = analyticsController;
