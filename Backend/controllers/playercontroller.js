const Player = require("../models/player");
const Recent = require("../models/recent");
const mongoose = require("mongoose");

const createNewPlayer = async (req, res, next) => {
  const { name, batstats, bowl, recent } = req.body;
  let existingPlayer;
  try {
    existingPlayer = await Player.findOne({ name: name });
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
    batstats,
    bowl,
    recent,
  });

  try {
    await createdPlayer.save();
  } catch (err) {
    return next(err);
  }
  res.status(201).json({ name: name });
};

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
};
const createNewRecent = async (req, res, next) => {
  let { name, team1, team2, recent } = req.body;

  let createdNewRecent = new Recent({
    name,
    team1,
    team2,
    recent,
  });
  try {
    await createdNewRecent.save();
  } catch (err) {
    return next(err);
  }

  return res.status(201).json(createNewRecent);
};

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
};
const getRecentById = async (req, res, next) => {
  const playerId = req.params.pid;
  let playerData;
  try {
    playerData = await Recent.find(playerId);
  } catch (err) {
    return next(err);
  }
  if (!playerData) {
    return next("Player Data missing");
  }
  res.status(200).json({ player: playerData.toObject({ getters: true }) });
};

const getRecentByName = async (req, res, next) => {
  const name = req.params.name;
  let regex = new RegExp(name, "i");
  let players = await Recent.find({ name: { $regex: regex } });
  if (!players) {
    return next("no player found");
  }
  res.status(200).json(players);
};

const getPlayerByName = async (req, res, next) => {
  const name = req.params.name;
  let regex = new RegExp(name, "i");
  let players = await Player.find({ name: { $regex: regex } });
  if (!players) {
    return next("no player found");
  }
  res.status(200).json(players);
};

exports.createNewPlayer = createNewPlayer;
exports.createNewRecent = createNewRecent;
exports.getPlayerById = getPlayerById;
exports.getRecentById = getRecentById;
exports.updatePlayer = updatePlayer;
exports.getPlayerByName = getPlayerByName;
