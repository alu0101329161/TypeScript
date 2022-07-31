import * as express from 'express';
import {Cancion} from '../../models/cancion';

/**
 * Módulo del enrutador en una ruta en la aplicación principal.
 */
export const patchRouterCancion = express.Router();

/**
 *  Petición PATCH para modificar una cancion con query string
 */
patchRouterCancion.patch('/song', async (req, res) => {
  if (!req.query.title) {
    return res.status(400).send({
      error: 'Nombre del titulo de la cancion es requerido',
    });
  }

  const allowedUpdates = ['generos', 'reproduccionesTotales'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'La actualización no es válida',
    });
  }

  try {
    const cancion =
    await Cancion.findOneAndUpdate({titulo: req.query.title.toString()}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!cancion) {
      return res.status(404).send();
    }

    return res.send(cancion);
  } catch (error) {
    return res.status(400).send(error);
  }
});

/**
 *  Petición PATCH para modificar una cancion con params
 */
patchRouterCancion.patch('/song/:id', async (req, res) => {
  const allowedUpdates = ['generos', 'reproduccionesTotales'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'La actualización no es válida',
    });
  }

  try {
    const cancion = await Cancion.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!cancion) {
      return res.status(404).send();
    }

    return res.send(cancion);
  } catch (error) {
    return res.status(400).send(error);
  }
});
