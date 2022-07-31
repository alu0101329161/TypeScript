import * as express from 'express';
import {Artista} from '../../models/artista';

/**
 * Módulo del enrutador en una ruta en la aplicación principal.
 */
export const postRouterArtista = express.Router();

/**
 * Peticion Post para crear un artista
 */
postRouterArtista.post('/artist', async (req, res) => {
  const artista = new Artista(req.body);
  try {
    await artista.save();
    res.status(201).send(artista);
  } catch (error) {
    res.status(400).send(error);
  }
});
