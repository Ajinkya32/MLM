const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoSchema = new Schema({
  title: { type: Schema.Types.String },
  video: { type: Schema.Types.String },
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const video = mongoose.model("video", videoSchema);

module.exports = video;
