import {typeColor} from "../Notas/notas";
import {Nota} from "../Notas/notas";
 
/**
 * Peticion del cliente
 */
export type RequestType = {
    tipo: 'add' | 'update' | 'remove' | 'read' | 'list';
    usuario: string;
    titulo?: string;
    cuerpo?: string;
    color?: typeColor;
  }

/**
* Respuesta del servidor
*/
export type ResponseType = {
    tipo: 'add' | 'update' | 'remove' | 'read' | 'list';
    success: boolean;
    notes?: Nota[];
}
