const mongoose = require("mongoose");
const { Schema } = mongoose;

const leadershipRewardsSchema = new Schema({
  memberId: { type: Schema.Types.Number },
  rewards: { type: Schema.Types.String },
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const leadershipRewards = mongoose.model("leadershipRewards", leadershipRewardsSchema);

module.exports = leadershipRewards;
