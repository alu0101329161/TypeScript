import {Document, Schema, model} from 'mongoose';
import {duracionHorMinType} from '../tiposDatos/duracionTipo';

/**
 * @interface PlaylistInterfaz
 */
interface PlaylistInterfaz extends Document {
    titulo: string;
    canciones: string[];
    duracion: duracionHorMinType;
    generos: string[];
}


/**
 * Schema de Playlist
 */
const PlaylistSchema = new Schema<PlaylistInterfaz>({
  titulo: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (value.length === 0) {
        throw new Error("El titulo de la playlist no puede estar vacío");
      }
    }, 
  },
  canciones: {
    type: [String],
    required: true,
    validate: (value: string[]) => {
      if (value.length === 0) {
        throw new Error("El artista tiene que tener alguna canción");
      } else {
        value.forEach((cancion) => {
          if (cancion.length === 0) {
            throw new Error("Una canción no puede estar vacía");
          }
        });
      }
    }, 
  },
  duracion: {
    type: Schema.Types.Mixed,
    required: true,
    validate: (value: any) => {
      if (value as duracionHorMinType) {
        if (value.hor < 0 || value.min < 0 || value.min > 59 || value.min === undefined || value.hor === undefined) {
          throw new Error("Los minutos no pueden ser mayores a 59 ni menores a 0 y las horas no pueden ser menores que 0");
        }
      } else {
        throw new Error("La duracion tiene que ser del tipo {hor: number, min: number}");
      }
    },
  },
  generos: {
    type: [String],
    required: true,
    validate: (value: string[]) => {
      if (value.length === 0) {
        throw new Error("Los generos no pueden estar vacíos");
      } else {
        value.forEach((genero) => {
          if (genero !== "Rock" && genero !== "Jazz" && genero !== "Rap" && genero !== "Trap" &&
              genero !== "Pop" && genero !== "Metal" && genero !== "Drill" && genero !== "K-pop") {
            throw new Error("Los géneros son incorrectos");
          }
        });
      }
    },
  },
});

/**
 * Modelo de la playlist.
 */
export const Playlist = model<PlaylistInterfaz>("Playlist", PlaylistSchema);
