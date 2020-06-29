const express = require('express');
const router = express.Router();

const playlistController = require('../controllers/playlist');

// Create a new playlist
router.post('/', playlistController.createPlaylist);

// Get one playlist
router.get('/:id', playlistController.getOnePlaylist);

module.exports = router;
