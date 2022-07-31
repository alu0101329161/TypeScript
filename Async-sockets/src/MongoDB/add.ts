import {connect} from 'mongoose';
import {Deportista} from './models/deportista';

connect('mongodb://127.0.0.1:27017/dsi-assessment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

const deportista = new Deportista({
  nombre: 'Juan',
  apellidos: 'Pérez Loana',
  edad: 25,
  dni: '12345678A',
  deporte: 'Futbol',
  prueba: 'Tiros a puerta',
  marca: {
    horas: 0,
    minutos: 2,
    segundos: 30,
  },
});

deportista.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
