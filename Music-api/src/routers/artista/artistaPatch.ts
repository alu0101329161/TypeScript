import * as express from 'express';
import {Artista} from '../../models/artista';

/**
 * Módulo del enrutador en una ruta en la aplicación principal.
 */
export const patchRouterArtista = express.Router();

/**
 *  Petición PATCH para modificar un artista con query string
 */
patchRouterArtista.patch('/artist', async (req, res) => {
  if (!req.query.name) {
    return res.status(400).send({
      error: 'Nombre de artista no especificado',
    });
  }

  const allowedUpdates = ['generos', 'canciones', 'oyentes'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'La actualización no es válida',
    });
  }

  try {
    const artista =
    await Artista.findOneAndUpdate({nombre: req.query.name.toString()}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!artista) {
      return res.status(404).send();
    }

    return res.send(artista);
  } catch (error) {
    return res.status(400).send(error);
  }
});

/**
 *  Petición PATCH para modificar un artista con params
 */
patchRouterArtista.patch('/artist/:id', async (req, res) => {
  const allowedUpdates = ['nombre', 'generos', 'canciones', 'oyentes'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'La actualización no es válida',
    });
  }

  try {
    const artista = await Artista.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!artista) {
      return res.status(404).send();
    }

    return res.send(artista);
  } catch (error) {
    return res.status(400).send(error);
  }
});
