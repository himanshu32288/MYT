const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const recentSchema = new Schema({
    team: { type: String, required: true },
    points: { type: Number, required: true },
    playerId: { type: mongoose.Types.ObjectId, required: true, ref: 'Player' }
}
)


module.exports = mongoose.model("Recent", recentSchema);