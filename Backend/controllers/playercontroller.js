const { Router } = require('express');
const Player = require('../models/player');
const Recent = require('../models/recent');


const createNewPlayer = async (req, res, next) => {
    const { name, dob, batstats, bowl } = req.body;
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
        bowl
    });

    try {
        await createdPlayer.save();
    } catch (err) {
        const error = "Not able to save ";
        return next(error);
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
    return res.status(200).json(playerData);
}
const createNewRecent = async (req, res, next) => {
    let { name, recentfantasypoints, kaam } = req.body;
    console.log(req.body);

    let existingPlayer;
    try {
        existingPlayer = await Recent.findOne({ name: name });
    } catch (err) {
        return next(err);
    }
    if (existingPlayer)
        return next("Player recent Performance exist update instead");

    const createdPlayer = new Recent({
        name,
        recentfantasypoints,
        avg: avgPoints
    });
    createdPlayer.save()
    res.status(201).json(createdPlayer);
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
    return res.status(200).json(playerData);
}
const getRecentById = async (req, res, next) => {
    const playerId = req.params.pid;
    let playerData;
    try {
        playerData = await Recent.findById(playerId);
    } catch (err) {
        return next(err);
    }
    if (!playerData) {
        return next("Player Data missing");
    }
    return res.status(200).json(playerData);
}

const getPlayerByName = async (req, res, next) => {
    const name = req.params.name;
    let regex = new RegExp(name, 'i');
    let players = await Player.find({ name: { $regex: regex } });
    if (!players) {
        return next("no player found");
    }
    return res.status(200).json(players);

}
exports.createNewPlayer = createNewPlayer;
exports.createNewRecent = createNewRecent;
exports.getPlayerById = getPlayerById;
exports.getRecentById = getRecentById;
exports.updatePlayer = updatePlayer;
exports.getPlayerByName = getPlayerByName;