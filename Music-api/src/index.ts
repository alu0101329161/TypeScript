import express from 'express';
import './db/mongoose';
import {deleteRouterArtista} from './routers/artista/artistaDelete';
import {deleteRouterCancion} from './routers/cancion/cancionDelete';
import {deleteRouterPlaylist} from './routers/playlist/playlistDelete';
import {getRouterArtista} from './routers/artista/artistaGet';
import {getRouterCancion} from './routers/cancion/cancionGet';
import {getRouterPlaylist} from './routers/playlist/playlistGet';
import {postRouterArtista} from './routers/artista/artistaPost';
import {postRouterCancion} from './routers/cancion/cancionPost';
import {postRouterPlaylist} from './routers/playlist/playlistPost';
import {patchRouterArtista} from './routers/artista/artistaPatch';
import {patchRouterCancion} from './routers/cancion/cancionPatch';
import {patchRouterPlaylist} from './routers/playlist/playlistPatch';
import {defaultRouter} from './routers/default';

// Express
const app = express();
app.use(express.json());

// Delete
app.use(deleteRouterArtista, deleteRouterCancion, deleteRouterPlaylist);

// Gets
app.use(getRouterArtista, getRouterCancion, getRouterPlaylist);

// Post
app.use(postRouterArtista, postRouterCancion, postRouterPlaylist);

// Patch
app.use(patchRouterArtista, patchRouterCancion, patchRouterPlaylist);

// Default
app.use(defaultRouter);

// Puerto, variable de entorno o por defecto 3000.
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`El servidor se desplegó en el puerto ${port}`);
});
