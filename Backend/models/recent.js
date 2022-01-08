const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recentSchema = new Schema({
  name: { type: String, required: true },
  recent: [
    {
      team1: { type: String, required: true },
      team2: { type: String, required: true },
      points: { type: Number, required: true },
      date: { type: Date, required: true },
    },
  ],
});

module.exports = mongoose.model("Recent", recentSchema);
