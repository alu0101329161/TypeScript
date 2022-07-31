import * as express from 'express';
import {Cancion} from '../../models/cancion';
import {Artista} from '../../models/artista';

/**
 * Módulo del enrutador en una ruta en la aplicación principal.
 */
export const postRouterCancion = express.Router();

/**
 * Peticion POST para crear una cancion
 */
postRouterCancion.post('/song', async (req, res) => {
  const cancion = new Cancion(req.body);
  try {
    const artista = await Artista.findOne({nombre: req.body.autor.toString()});

    if (artista !== null) {
      await cancion.save();
      res.status(201).send(cancion);
    } else {
      res.status(400).send("{error: El artista debe existir en la base de datos}");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
