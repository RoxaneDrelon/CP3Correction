const { connection } = require('../conf');

/**
 * add a playlist in user's favorites
 * @param {*} req
 * @param {*} res
 */
const addPlaylist = async (req, res) => {
  try {
    const { userId, playlistId } = req.params;

    const [user] = await connection.query('SELECT id FROM user WHERE id = ?', [
      userId
    ]);

    if (!user[0]) {
      throw { messageError: 'user not found', code: 404 };
    }

    const [
      playlist
    ] = await connection.query('SELECT id FROM playlist WHERE id = ?', [
      playlistId
    ]);

    if (!playlist[0]) {
      throw { messageError: 'playlist not found', code: 404 };
    }

    const addPlaylist = await connection.query(
      'INSERT INTO user_playlist SET ?',
      [req.body]
    );

    return res.status(200).send(addPlaylist[0]);
  } catch (e) {
    console.log(e);
    return res.status(e.code).send(e.messageError);
  }
};

module.exports = { addPlaylist };
