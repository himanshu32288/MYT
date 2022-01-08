const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: { type: String, required: true },
  batstats: [
    {
      format: { type: String, required: true },
      mat: { type: Number },
      inns: { type: Number },
      no: { type: Number },
      runs: { type: Number },
      hs: { type: Number },
      avg: { type: Number },
      bf: { type: Number },
      hund: { type: Number },
      fifty: { type: Number },
      zero: { type: Number },
      sr: { type: Number },
      four: { type: String },
      six: { type: String },
    },
  ],
  bowl: [
    {
      format: { type: String, required: true },
      mat: { type: Number },
      inns: { type: Number },
      bowl: { type: Number },
      runs: { type: Number },
      wkt: { type: Number },
      eco: { type: Number },
      avg: { type: Number },
      fourw: { type: Number },
      fivew: { type: Number },
      tenw: { type: Number },
    },
  ],
});

module.exports = mongoose.model("Player", playerSchema);
