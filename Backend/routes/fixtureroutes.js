const express = require("express");
const fixtureController = require("../controllers/fixtureController");

router = express.Router();

router.post("/newfixture", fixtureController.createFixture);
