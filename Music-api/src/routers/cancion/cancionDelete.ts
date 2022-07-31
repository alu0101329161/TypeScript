import * as express from 'express';
import {Cancion} from '../../models/cancion';
import {Playlist} from '../../models/playlist';

/**
 * Módulo del enrutador en una ruta en la aplicación principal.
 */
export const deleteRouterCancion = express.Router();

/**
 *  Petición DELETE para eliminar una cancion con query string
 */
deleteRouterCancion.delete('/song', async (req, res) => {
  if (!req.query.title) {
    return res.status(400).send({
      error: 'Se debe ingresar el nombre de la cancion',
    });
  }

  try {
    const cancion = await Cancion.findOneAndDelete({titulo: req.query.title.toString()});

    if (!cancion) {
      return res.status(404).send();
    }

    return res.send(cancion);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 *  Petición DELETE para eliminar una cancion con params
 */
deleteRouterCancion.delete('/song/:id', async (req, res) => {
  try {
    const cancion = await Cancion.findByIdAndDelete(req.params.id);

    if (!cancion) {
      return res.status(404).send();
    }

    return res.send(cancion);
  } catch (error) {
    return res.status(400).send();
  }
});
