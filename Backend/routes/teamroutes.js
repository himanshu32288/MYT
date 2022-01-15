const express = require("express");
const teamControllers = require("../controllers/teamControllers");
const router = express.Router();

router.post("/newteam", teamControllers.createTeam);
router.patch("/update", teamControllers.updateTeam);
router.get("/search/:name", teamControllers.searchTeam);
router.get("/teamdetails/:tid", teamControllers.getTeamDetails);
module.exports = router;
