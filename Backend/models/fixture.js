const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fixtureSchema = new Schema({
  date: { type: Date, required: true },
  team1: { type: mongoose.Types.ObjectId, required: true, ref: "Team" },
  team2: { type: mongoose.Types.ObjectId, required, ref: "Team" },
  venue: { type: mongoose.Types.ObjectId, required: true },
});

module.exports = mongoose.model("Fixture", fixtureSchema);
