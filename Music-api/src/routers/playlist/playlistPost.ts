import * as express from 'express';
import {Playlist} from '../../models/playlist';
import {Cancion} from '../../models/cancion';

/**
 * Módulo del enrutador en una ruta en la aplicación principal.
 */
export const postRouterPlaylist = express.Router();

/**
 * Petición POST para crear una playlist
 */
postRouterPlaylist.post('/playlist', async (req, res) => {
  const playlist = new Playlist(req.body);
  let fallo: boolean = false;
  let cancionesErroneas: string = "";

  try {
    for (let i = 0; i < req.body.canciones.length; i++) {
      const cancion = await Cancion.findOne({titulo: req.body.canciones[i].toString()});
      if (cancion === null) {
        cancionesErroneas += req.body.canciones[i] + ", ";
        fallo = true;
      }
    }

    if (fallo) {
      res.status(400).send(`{error: Las canciones ${cancionesErroneas} no se pudieron encontrar en la base de datos}`);
    } else {
      await playlist.save();
      res.status(201).send(playlist);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
