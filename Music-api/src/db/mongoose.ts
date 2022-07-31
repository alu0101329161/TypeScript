import {connect} from 'mongoose';

/**
 * URL de la base de datos, variable de entorno MONGODB_URL o URL por defecto
 */
const dbURL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/music-app';

/**
 * Conexión a la URL.
 */
connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Conexión con el servidor de MongoDB establecida');
}).catch(() => {
  console.log('No se ha podido establecer la conexión con el servidor de MongoDB');
});
