import {Document, model, Schema} from 'mongoose';
import validator from 'validator';

// Tipo de datos
type tiempoType = {
    horas: number,
    minutos: number,
    segundos: number
}

/**
 * Document interface for users
 */
export interface deportistaInterface extends Document {
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    deporte: string,
    prueba: string,
    marca: tiempoType,
}


/**
 * Schema de Usuario
 */
const deportistaSchema = new Schema<deportistaInterface>({
  nombre: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (value.length === 0) {
        throw new Error("El nombre del Usuario no puede ser un string vacío");
      }
    }, 
  },
  apellidos: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (value.length === 0) {
        throw new Error("Los apellidos del Usuario no puede ser un string vacío");
      }
    }, 
  },
  edad: {
    type: Number,
    required: true,
    min: 0,
    validate: (value: number) => {
      if (!Number.isInteger(value)) {
        throw new Error("La edad tiene que ser un valor entero");
      }
    },
  },
  dni: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: (value: string) => {
      if ( value.length !== 9) {
        throw new Error("El DNI tiene que tener 9 caracteres");
      } else {
        for (let i = 0; i < value.length - 1; i++) {
          if (!Number.isInteger(parseInt(value[i]))) {
            throw new Error("El DNI tiene que ser un valor entero");
          }
        }
        if (value[8].charCodeAt(0) < 65 || value[8].charCodeAt(0) > 90) {
          throw new Error("La letra es erronea");
        }
      }
    },
  },
  deporte: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (value.length === 0) {
        throw new Error("El deporte no puede ser un string vacío");
      }
    },
  },
  prueba: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (value.length === 0) {
        throw new Error("La prueba no puede ser un string vacío");
      }
    },
  },
  marca: {
    type: Schema.Types.Mixed,
    required: true,
    validate: (value: any) => {
      if (value as tiempoType) {
        if (value.horas < 0 || value.minutos < 0 || value.segundos < 0) {
          throw new Error("El tiempo no puede ser negativo");
        }
      } else {
        throw new Error("El formato es {horas: number, minutos: number, segundos: number}");
      }
    },
  },
});
  
/**
   * Modelo del Deportista
   */
export const Deportista = model<deportistaInterface>("deportista", deportistaSchema);
