const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    batstats: [
        {
            format: { type: String, required: true },
            mat: { type: Number },
            inns: { type: Number },
            runs: { type: Number },
            avg: { type: Number },
            sr: { type: Number },
            hs: { type: Number },
            no: { type: Number },
            hund: { type: Number },
            fifty: { type: Number },
            four: { type: Number },
            six: { type: Number }
        }
    ],
    bowl: [
        {
            format: { type: String, required: true },
            mat: { type: Number },
            inns: { type: Number },
            runs: { type: Number },
            wkt: { type: Number },
            bbi: { type: String },
            eco: { type: Number },
            avg: { type: Number },
            fivew: { type: Number },
            tenw: { type: Number }
        }
    ]

})

playerSchema.index({ name: 1, dob: 1 }, { unique: true });
// playerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Player', playerSchema);