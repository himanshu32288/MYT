const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  team: { type: String, required: true },
  players: [{ type: mongoose.Types.ObjectId, required: true, ref: "Player" }],
});

module.exports = mongoose.model("Team", teamSchema);
