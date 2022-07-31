import * as express from 'express';
import {Playlist} from '../../models/playlist';

/**
 * Módulo del enrutador en una ruta en la aplicación principal.
 */
export const patchRouterPlaylist = express.Router();

/**
 *  Petición PATCH para modificar una playlist con query string
 */
patchRouterPlaylist.patch('/playlist', async (req, res) => {
  if (!req.query.title) {
    return res.status(400).send({
      error: 'Titulo de la plyslist no especificado',
    });
  }

  const allowedUpdates = ['canciones', 'duracion', 'generos'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'La actualización no es válida',
    });
  }

  try {
    const playlist =
    await Playlist.findOneAndUpdate({titulo: req.query.title.toString()}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!playlist) {
      return res.status(404).send();
    }

    return res.send(playlist);
  } catch (error) {
    return res.status(400).send(error);
  }
});

/**
 *  Petición PATCH para modificar una playlist con params
 */
patchRouterPlaylist.patch('/playlist/:id', async (req, res) => {
  const allowedUpdates = ['canciones', 'duracion', 'generos'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'La actualización no es válida',
    });
  }

  try {
    const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!playlist) {
      return res.status(404).send();
    }

    return res.send(playlist);
  } catch (error) {
    return res.status(400).send(error);
  }
});
