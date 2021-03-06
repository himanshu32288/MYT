const express = require("express");
const playerController = require("../controllers/playercontroller");
const router = express.Router();

router.post("/newplayer", playerController.createNewPlayer);
router.post("/fantasy", playerController.createNewRecent);
router.patch("/update/:pid", playerController.updatePlayer);
router.get("/recent/search/:name", playerController.getRecentByName);
router.get("/recent/:pid", playerController.getRecentById);
router.get("/search/:name", playerController.getPlayerByName);
router.get("/:pid", playerController.getPlayerById);

module.exports = router;
