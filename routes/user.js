const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

// Create a new playlist
router.post('/:userId/playlist/:playlistId', userController.addPlaylist);

module.exports = router;
