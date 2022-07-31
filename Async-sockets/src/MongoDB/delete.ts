import {MongoClient} from 'mongodb';
import {deportistaInterface} from './models/deportista';

const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'dsi-assessment';

MongoClient.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((client) => {
  const db = client.db(dbName);
  return db.collection<deportistaInterface>("deportistas").deleteOne({
    dni: '12345678A',
  });
}).then((result) => {
  console.log(result.deletedCount);
}).catch((error) => {
  console.log(error);
});
