import * as express from 'express';
import {Cancion} from '../../models/cancion';

/**
 * Módulo del enrutador en una ruta en la aplicación principal.
 */
export const getRouterCancion = express.Router();

/**
 *  Petición GET para obtener una cancion con query string
 */
getRouterCancion.get('/song', async (req, res) => {
  const filter = req.query.title?{titulo: req.query.title.toString()}:{};

  try {
    const cancion = await Cancion.find(filter);

    if (cancion.length !== 0) {
      return res.send(cancion);
    }

    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

/**
 *  Petición GET para obtener una cancion con params
 */
getRouterCancion.get('/song/:id', async (req, res) => {
  try {
    const cancion = await Cancion.findById(req.params.id);

    if (!cancion) {
      return res.status(404).send();
    }

    return res.send(cancion);
  } catch (error) {
    return res.status(500).send();
  }
});
