import * as express from 'express';
import {Artista} from '../../models/artista';
import {Cancion} from '../../models/cancion';
import {Playlist} from '../../models/playlist';

/**
 * Módulo del enrutador en una ruta en la aplicación principal.
 */
export const deleteRouterArtista = express.Router();

/**
 *  Petición DELETE para eliminar un artista con query string
 */
deleteRouterArtista.delete('/artist', async (req, res) => {
  if (!req.query.name) {
    return res.status(400).send({
      error: 'Se debe ingresar el nombre del artista',
    });
  }

  try {
    const artista = await Artista.findOneAndDelete({nombre: req.query.name.toString()});

    if (!artista) {
      return res.status(404).send();
    }

    return res.send(artista);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 *  Petición DELETE para eliminar un artista con params
 */
deleteRouterArtista.delete('/artist/:id', async (req, res) => {
  try {
    const artista = await Artista.findByIdAndDelete(req.params.id);

    if (!artista) {
      return res.status(404).send();
    }

    return res.send(artista);
  } catch (error) {
    return res.status(400).send();
  }
});
