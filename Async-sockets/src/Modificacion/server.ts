import {comando} from './utilities';
import express from 'express';

// Clase servidor Express
export class Servidor {
  private app = express();

  constructor(puerto: number) {
    const url = '/execmd/:cmd/:args';
    this.app.get(url, (req, res) => {
      if (!req.params['cmd']) {
        res.send({error: 'No se ha especificado un comando'});
      } 
      if (!req.params['args']) { 
        req.params['args'] = "";
      }
      comando(req.params['cmd'] as string, req.params['args'] as string).then((data) => {
        res.send({output: data});
      }).catch((error) => {
        res.send({error: error});
      });
    });
    this.app.get('*', (_, res) => {
      res.send("<h1>404</h1>");
    });

    this.app.listen(puerto, () => {
      console.log("Escuchando en el puerto " + puerto);
    });
  }
}

const servidor = new Servidor(3000);
// http://localhost:3000/execmd/ls/-l -a,package.json
