import {Deportista} from './models/deportista';
import {Crud} from './Crud';
import './db/db';

const deportista = new Deportista({
  nombre: 'Juan',
  apellidos: 'Pérez Loana',
  edad: 25,
  dni: '87777777A',
  deporte: 'Futbol',
  prueba: 'Tiros a puerta',
  marca: {
    horas: 0,
    minutos: 2,
    segundos: 30,
  },
});

const update = {deporte: 'Hola'};


Crud.add(deportista);
Crud.search('87777777A');
Crud.update('87777777A', update);
Crud.delete('87777777A');
