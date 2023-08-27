const mongoose = require("mongoose");
const { Schema } = mongoose;

const nonWorkingIncentiveSchema = new Schema({
  memberId: { type: Schema.Types.Number },
  incentiveEarned: { type: Schema.Types.Number, default: 0 },
  reEntries: { type: Schema.Types.Number, default: 0 },
  reJoinings: { type: Schema.Types.Number, default: 0 },
  rewards: { type: Schema.Types.String },
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const nonWorkingIncentive = mongoose.model("nonWorkingIncentive", nonWorkingIncentiveSchema);

module.exports = nonWorkingIncentive;
