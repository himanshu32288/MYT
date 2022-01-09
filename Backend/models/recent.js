const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recentSchema = new Schema({
  name: { type: String, required: true },
  recent: [
    {
      team1: { type: String },
      team2: { type: String },
      points: { type: Number, required: true },
      date: { type: Date },
    },
  ],
});

module.exports = mongoose.model("Recent", recentSchema);
