const { connection } = require('../conf');

const createPlaylist = async (req, res) => {
  try {
    const playlist = await connection.query('INSERT INTO playlist SET ?', [
      req.body
    ]);

    return res.status(200).send(playlist);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Error while creating playlist.');
  }
};

const getOnePlaylist = async (req, res) => {
  try {
    // get playlist id in params
    const { id } = req.params;

    const [data] = await connection.query(
      'SELECT * FROM playlist WHERE id = ?',
      [id]
    );

    return res.status(200).send(data[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Error while reading playlist.');
  }
};

module.exports = { createPlaylist, getOnePlaylist };
