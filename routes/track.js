const express = require('express');
const router = express.Router();

const trackController = require('../controllers/track');

// Create a new playlist
router.post('/', trackController.createTrack);

// Get all tracks of a playlist
router.get('/', trackController.getAllTracks);

module.exports = router;
