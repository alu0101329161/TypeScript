import * as express from 'express';
import {Artista} from '../../models/artista';

/**
 * Módulo del enrutador en una ruta en la aplicación principal.
 */
export const getRouterArtista = express.Router();

/**
 *  Petición GET para obtener un artista con query string
 */
getRouterArtista.get('/artist', async (req, res) => {
  const filter = req.query.name?{nombre: req.query.name.toString()}:{};

  try {
    const artista = await Artista.find(filter);

    if (artista.length !== 0) {
      return res.send(artista);
    }

    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

/**
 *  Petición GET para obtener un artista con params
 */
getRouterArtista.get('/artist/:id', async (req, res) => {
  try {
    const artista = await Artista.findById(req.params.id);

    if (!artista) {
      return res.status(404).send();
    }

    return res.send(artista);
  } catch (error) {
    return res.status(500).send();
  }
});
