
import * as express from 'express';

export const defaultRouter = express.Router();

/**
 * Manejador para ruta por defecto
 */
defaultRouter.all('*', (_, res) => {
  res.status(501).send();
});
