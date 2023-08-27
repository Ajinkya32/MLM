const mongoose = require("mongoose");
const { Schema } = mongoose;

const incentiveSchema = new Schema({
  memberId: { type: Schema.Types.Number },
  earnedFromMemberId: { type: Schema.Types.Number },
  incentiveEarned: { type: Schema.Types.Number, default: 0 },
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const incentive = mongoose.model("incentive", incentiveSchema);

module.exports = incentive;
