import {Document, Schema, model} from 'mongoose';

/**
 * @interface ArtistaInterfaz
 */
interface ArtistaInterfaz extends Document {
  nombre: string,
  generos: string[],
  canciones: string[],
  oyentes: number,
}

/**
 * Schema de Artista
 */
const ArtistaSchema = new Schema<ArtistaInterfaz>({
  nombre: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (value.length === 0) {
        throw new Error("El nombre del artista no puede ser un string vacío");
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
  oyentes: {
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
 * Modelo del Artista
 */
export const Artista = model<ArtistaInterfaz>("Artista", ArtistaSchema);
