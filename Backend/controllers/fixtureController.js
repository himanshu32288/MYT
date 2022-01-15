const Fixture = require("../models/fixture");

const createFixture = async (req, ress, next) => {
  const { date, team1, team2, venue } = req.body;
  const createdFixture = new Fixture({ date, team1, team2, venue });
  try {
    await createFixture.save();
  } catch (err) {
    return next(err);
  }
  res.status(200).json({ message: "Creation succed" });
};
const getFixture = async (req, res, next) => {};

exports.createFixture = createFixture;
