const Team = require("../models/team");

const createTeam = async (req, res, next) => {
  const { team, players } = req.body;

  let hasTeam;
  try {
    hasTeam = await Team.find({ team: team });
  } catch (err) {
    return next(err);
  }

  if (hasTeam.length) return next("Team already exist update instead");
  const createdTeam = new Team({
    team,
    players,
  });
  createdTeam.save();
  res.status(200).json(createdTeam);
};

const updateTeam = async (req, res, next) => {
  const [team, players] = req.body;
  let updateTeam;
  try {
    updateTeam = await Team.find({ team: team });
  } catch (err) {
    return next(err);
  }
  updateTeam.team = team;
  updateTeam.players = players;
  res.status(200).json({ updateTeam });
};

exports.createTeam = createTeam;
exports.updateTeam = updateTeam;
