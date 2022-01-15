const Team = require("../models/team");
const createTeam = async (req, res, next) => {
  const { name, shortname, players } = req.body;

  let hasTeam;
  try {
    hasTeam = await Team.find({ name: name });
  } catch (err) {
    return next(err);
  }

  if (hasTeam.length) return next("Team already exist update instead");
  const createdTeam = new Team({
    name,
    shortname,
    players,
  });
  createdTeam.save();
  res.status(200).json("enjoy");
};
const searchTeam = async (req, res, next) => {
  const name = req.params.name;
  let regex = new RegExp(name, "i");
  let teams;
  try {
    teams = await Team.find({ name: { $regex: regex } });
  } catch (err) {
    return next(err);
  }
  if (!teams) {
    return next("no player found");
  }
  // console.log(players);
  res.json({ teams });
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
const getTeamDetails = async (req, res, next) => {
  const team_id = req.params.tid;
  let team;
  try {
    team = await Team.findById(team_id);
  } catch (err) {
    return next(err);
  }
  const players = await team.populate("players");
  res.json({ name: team.name, shortname: team.shortname, players });
};
exports.createTeam = createTeam;
exports.updateTeam = updateTeam;
exports.getTeamDetails = getTeamDetails;
exports.searchTeam = searchTeam;
