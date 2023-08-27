const mongoose = require("mongoose");
const { Schema } = mongoose;

const referenceSchema = new Schema({
  memberName: { type: Schema.Types.String },
  memberId: { type: Schema.Types.Number },
  referedByMemberId: { type: Schema.Types.Number },
  referencesMemberId: [{ type: Schema.Types.Number }],
  level: { type: Schema.Types.Number, default: 0 },
  nonWorkingLevel: { type: Schema.Types.Number, default: 0 },
  branch: { type: Schema.Types.String },
  parentBranch: { type: Schema.Types.String },
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const reference = mongoose.model("reference", referenceSchema);

module.exports = reference;
