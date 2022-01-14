const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: String, required: true },
  shortname: { type: String, required: true },
  players: [{ type: mongoose.Types.ObjectId, required: true, ref: "Recent" }],
});

module.exports = mongoose.model("Team", teamSchema);
