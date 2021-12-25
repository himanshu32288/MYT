const Player = require('../models/player');
const Recent = require('../models/recent');
const mongoose = require('mongoose');

const createNewPlayer = async (req, res, next) => {
    const { name, dob, batstats, bowl, recent } = req.body;
    let existingPlayer;
    try {
        existingPlayer = await Player.findOne({ name: name, dob: dob });
    } catch (err) {
        console.log(err);
        return next(err);
    }
    if (existingPlayer) {
        console.log("Player exist");
        return next();
    }
    const createdPlayer = new Player({
        name,
        dob,
        batstats,
        bowl,
        recent
    });

    try {
        await createdPlayer.save();
    } catch (err) {

        return next(err);
    }
    res.status(201).json({ name: name });
}

const updatePlayer = async (req, res, next) => {
    let { batstats, bowl } = req.body;

    const playerId = req.params.pid;
    let playerData;
    try {
        playerData = await Player.findById(playerId);
    } catch (err) {

        return next(err);
    }
    if (!playerData) {
        return next("Player Data missing Create new Record instead");
    }

    playerData.batstats = batstats;
    playerData.bowl = bowl;
    try {
        await playerData.save();
    } catch (err) {
        return next(err);
    }
    res.status(200).json(playerData);
}
const createNewRecent = async (req, res, next) => {
    let { team, points, playerId } = req.body;



    let createdNewRecent = new Recent({
        team,
        points,
        playerId
    })
    let player;
    try {
        player = await Player.findById(playerId);
    } catch (err) {
        return next(err);
    }
    if (!player) {
        return next("player info not available create player first");
    }
    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdNewRecent.save({ session: sess });
        player.recent.push(createdNewRecent);
        await player.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {

        return next(err);
    }

    return res.status(201).json(createNewRecent);
}

const getPlayerById = async (req, res, next) => {
    const playerId = req.params.pid;
    let playerData;
    try {
        playerData = await Player.findById(playerId);
    } catch (err) {
        return next(err);
    }
    if (!playerData) {
        return next("Player Data missing");
    }
    res.status(200).json(playerData);
}
const getRecentById = async (req, res, next) => {
    const playerId = req.params.pid;
    let playerData;
    try {
        playerData = await Player.findById(playerId).populate('recent').select("recent");
    } catch (err) {
        return next(err);
    }
    if (!playerData) {
        return next("Player Data missing");
    }
    res.status(200).json(playerData);
}

const getPlayerByName = async (req, res, next) => {
    const name = req.params.name;
    let regex = new RegExp(name, 'i');
    let players = await Player.find({ name: { $regex: regex } });
    if (!players) {
        return next("no player found");
    }
    res.status(200).json(players);

}

exports.createNewPlayer = createNewPlayer;
exports.createNewRecent = createNewRecent;
exports.getPlayerById = getPlayerById;
exports.getRecentById = getRecentById;
exports.updatePlayer = updatePlayer;
exports.getPlayerByName = getPlayerByName;