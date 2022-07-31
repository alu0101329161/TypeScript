import {Document, Schema, model} from 'mongoose';
import {duracionMinSegType} from '../tiposDatos/duracionTipo';

/**
 * @Interface CancionInterfaz
 */
interface CancionInterfaz extends Document {
    titulo: string,
    autor: string,
    generos: string[],
    duracion: duracionMinSegType, 
    single: boolean,
    reproduccionesTotales: number,
}

/**
 * Schema de Canciones
 */
const CancionSchema = new Schema<CancionInterfaz>({
  titulo: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (value.length === 0) {
        throw new Error("El titulo de la canción no puede ser un string vacío");
      }
    }, 
  },
  autor: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (value.length === 0) {
        throw new Error("El nombre del autor no puede ser un string vacío");
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
  duracion: {
    type: Schema.Types.Mixed,
    required: true,
    validate: (value: any) => {
      if (value as duracionMinSegType) {
        if (value.min < 0 || value.seg < 0 || value.seg > 59 || value.min === undefined || value.seg === undefined) {
          throw new Error("Los segundos no pueden ser mayores a 59 ni menores a 0 y los minutos no pueden ser menores que 0");
        }
      } else {
        throw new Error("La duracion tiene que ser del tipo {min: number, seg: number}");
      }
    },
  },
  single: {
    type: Boolean,
    required: true,
  },
  reproduccionesTotales: {
    type: Number,
    required: true,
    min: 0,
    validate: (value: number) => {
      if (!Number.isInteger(value)) {
        throw new Error("El número de reproducciones tiene que ser un valor entero");
      }
    },
  },
});

/**
 * Modelo de la canción.
 */
export const Cancion = model<CancionInterfaz>("Cancion", CancionSchema);
