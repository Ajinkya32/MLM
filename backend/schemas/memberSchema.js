const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema({
  _id: { type: Schema.Types.Number },
  profilePic: { type: Schema.Types.String },
  memberName: { type: Schema.Types.String },
  email: { type: Schema.Types.String },
  address: { type: Schema.Types.String },
  contactNumber: { type: Schema.Types.Number },
  role: { type: Schema.Types.String, default: "member", enum: ["admin", "member"] },
  referedByMemberId: { type: Schema.Types.Number },
  incentiveEarned: { type: Schema.Types.Number, default: 0 },
  nonWorkingIncentive: { type: Schema.Types.Number, default: 0 },
  level: { type: Schema.Types.Number, default: 0 },
  nonWorkingLevel: { type: Schema.Types.Number, default: 0 },
  pendingAmount: { type: Schema.Types.Number, default: 0 },
  accountNumber: { type: Schema.Types.Number },
  ifscCode: { type: Schema.Types.String },
  acHolderName: { type: Schema.Types.String },
  acHolderRelationship: { type: Schema.Types.String },
  password: { type: Schema.Types.String },
  createdAt: { type: Schema.Types.Date, default: Date.now },
  level1: [{ type: Schema.Types.Number }],
  level2: [{ type: Schema.Types.Number }],
  level3: [{ type: Schema.Types.Number }],
  level4: [{ type: Schema.Types.Number }],
  level5: [{ type: Schema.Types.Number }],
  level6: [{ type: Schema.Types.Number }],
  level7: [{ type: Schema.Types.Number }],
  level8: [{ type: Schema.Types.Number }],
  level9: [{ type: Schema.Types.Number }],
  level10: [{ type: Schema.Types.Number }],
  level11: [{ type: Schema.Types.Number }],
  level12: [{ type: Schema.Types.Number }],
  level13: [{ type: Schema.Types.Number }],
  level14: [{ type: Schema.Types.Number }],
  level15: [{ type: Schema.Types.Number }],
});

const member = mongoose.model("member", memberSchema);

module.exports = member;
