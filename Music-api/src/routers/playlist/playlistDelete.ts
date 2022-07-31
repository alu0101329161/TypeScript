import * as express from 'express';
import {Playlist} from '../../models/playlist';

/**
 * Módulo del enrutador en una ruta en la aplicación principal.
 */
export const deleteRouterPlaylist = express.Router();

/**
 *  Petición DELETE para eliminar una playlist con query string
 */
deleteRouterPlaylist.delete('/playlist', async (req, res) => {
  if (!req.query.title) {
    return res.status(400).send({
      error: 'Se debe ingresar el nombre de la playlist',
    });
  }

  try {
    const playlist = await Playlist.findOneAndDelete({titulo: req.query.title.toString()});

    if (!playlist) {
      return res.status(404).send();
    }

    return res.send(playlist);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 *  Petición DELETE para eliminar una playlist con params
 */
deleteRouterPlaylist.delete('/playlist/:id', async (req, res) => {
  try {
    const playlist = await Playlist.findByIdAndDelete(req.params.id);

    if (!playlist) {
      return res.status(404).send();
    }

    return res.send(playlist);
  } catch (error) {
    return res.status(400).send();
  }
});
