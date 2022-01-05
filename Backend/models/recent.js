const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recentSchema = new Schema({
  points: { type: Number, required: true },
  date: { type: Date, required: true },
  playerId: { type: mongoose.Types.ObjectId, required: true, ref: "Player" },
});

module.exports = mongoose.model("Recent", recentSchema);
