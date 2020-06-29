const { connection } = require('../conf');

/**
 * Create a new track
 * @param {*} req
 * @param {*} res
 */
const createTrack = async (req, res) => {
  try {
    const { playlist_id: playlistId } = req.body;

    const [
      playlist
    ] = await connection.query('SELECT id FROM playlist WHERE id = ?', [
      playlistId
    ]);

    if (!playlist[0]) {
      throw { messageError: 'playlist not found', code: 404 };
    }

    const track = await connection.query('INSERT INTO track SET ?', [req.body]);

    return res.status(200).send(track);
  } catch (e) {
    console.log(e);
    return res.status(e.code).send(e.messageError);
  }
};

/**
 * Get all tracks
 * @param {*} req
 * @param {*} res
 */
const getAllTracks = async (req, res) => {
  try {
    let tracks = [];

    if (req.query.playlistId) {
      tracks = await connection.query(
        'SELECT * FROM track WHERE playlist_id = ?',
        [req.query.playlistId]
      );

      return res.status(200).send(tracks[0]);
    }

    tracks = await connection.query('SELECT * FROM track');

    return res.status(200).send(tracks[0]);
  } catch (e) {
    console.log(e);
    return res.status(e.code).send(e.messageError);
  }
};

module.exports = { createTrack, getAllTracks };
