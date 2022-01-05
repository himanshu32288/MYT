const express = require("express");
const teamControllers = require("../controllers/teamControllers");
const router = express.Router();

router.post("/newteam", teamControllers.createTeam);
router.patch("/update", teamControllers.updateTeam);
module.exports = router;
