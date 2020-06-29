require('dotenv').config();
const express = require('express');
const app = express();
const playlist = require('./routes/playlist');
const track = require('./routes/track');
const user = require('./routes/user');

// Conf
app.use(express.json());

// Router
app.use('/playlist', playlist);
app.use('/track', track);
app.use('/user', user);

app.listen(3000, err => {
  if (err) {
    console.log('Erreur server');
  } else {
    console.log('Server is listening on 3000');
  }
});
