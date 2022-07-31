import * as express from 'express';
import {Playlist} from '../../models/playlist';

/**
 * Módulo del enrutador en una ruta en la aplicación principal.
 */
export const getRouterPlaylist = express.Router();

/**
 *  Petición GET para obtener una playlist con query string
 */
getRouterPlaylist.get('/playlist', async (req, res) => {
  const filter = req.query.title?{titulo: req.query.title.toString()}:{};

  try {
    const playlist = await Playlist.find(filter);

    if (playlist.length !== 0) {
      return res.send(playlist);
    }

    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

/**
 *  Petición GET para obtener una playlist con params
 */
getRouterPlaylist.get('/playlist/:id', async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id);

    if (!playlist) {
      return res.status(404).send();
    }

    return res.send(playlist);
  } catch (error) {
    return res.status(500).send();
  }
});
