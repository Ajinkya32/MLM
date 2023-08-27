const mongoose = require("mongoose");
const { Schema } = mongoose;

const errorsSchema = new Schema({
  errorLog: { type: Schema.Types.String },
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const errors = mongoose.model("errors", errorsSchema);

module.exports = errors;
