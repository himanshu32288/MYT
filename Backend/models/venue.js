const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const venueSchema = new Schema({
  name: { type: String, required: true },
  pitchtype: { type: String },
  pitchfavour: { type: String },
  team_batting_first_wins: { type: Number },
  avgscore: { type: Number },
  description: { type: String },
});

module.exports = mongoose.model("Venue", venueSchema);
