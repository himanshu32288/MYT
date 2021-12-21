const express = require('express');
const playerController = require('../controllers/playercontroller');
const router = express.Router();

router.post('/newplayer', playerController.createNewPlayer);
router.post('/fantasy', playerController.createNewRecent);
router.get('/:pid', playerController.getPlayerById);
router.get('/recent/:pid', playerController.getRecentById)
module.exports = router;