const LeadershipRewardsSchema = require("../schemas/leadershipRewardsSchema");
const NonWorkingSchema = require("../schemas/nonWorkingIncentiveSchema");
const createError = require("http-errors");

const rewardsController = {
  getLeadershipRewards: async (req, res, next) => {
    try {
      const LeadershipRewards = await LeadershipRewardsSchema.find({ memberId: req.user._id });

      res.status(201).json({ LeadershipRewards });
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  getNonWorkingRewards: async (req, res, next) => {
    try {
      const NonWorkingRewards = await NonWorkingSchema.find({ memberId: req.user._id });

      res.status(201).json({ NonWorkingRewards });
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
};

module.exports = rewardsController;
