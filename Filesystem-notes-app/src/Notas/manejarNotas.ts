import {Nota, typeColor} from "./notas";
import {PrintNota} from "./imprimirNota";
import * as fs from "fs";
const chalk = require("chalk");

/**
 * Clase que permite manejar las notas
 */
export class ManejarNotas {
  /**
   * Permite crear una nueva Nota en la base de Datos
   * @param usuario 
   * @param titulo 
   * @param cuerpo 
   * @param color 
   * @returns 
   */
  añadirNota(usuario: string, titulo: string, cuerpo: string, color: typeColor) {
    /**
     * Comprobamos que el usuario exista
     */
    if (!fs.existsSync(`BaseDatosNotas/${usuario}`)) {
      console.log(`${usuario} Directorio creado correctamente`);

      fs.mkdirSync(`BaseDatosNotas/${usuario}`, {

        recursive: true,

      });
    }
    const nota = new Nota(titulo, cuerpo, color);
    /**
     * Se añade la nota a la base de Datos
     */
    if (!fs.existsSync(`BaseDatosNotas/${usuario}/${titulo}.json`)) {
      fs.writeFileSync(`BaseDatosNotas/${usuario}/${titulo}.json`, new PrintNota(nota).print());

      console.log(chalk.green("Nueva nota añadida correctamente!"));

      return true;
    } else {
      console.log(chalk.red("Ya existe una nota con ese título"));

      return false;
    }
  }

  /**
   * Eliminar una nota de un usuario mediante
   * el titulo y el nombre
   * @param usuario 
   * @param titulo 
   * @returns 
   */
  eliminarNota(usuario: string, titulo: string) {
    if (fs.existsSync(`BaseDatosNotas/${usuario}/${titulo}.json`)) {
      fs.rmSync(`BaseDatosNotas/${usuario}/${titulo}.json`);

      console.log(chalk.green("Nota eliminada correctamente!"));
      return true;
    } else {
      console.log(chalk.red("Nota no encontrada pruebe otra"));

      return false;
    }
  }

  /**
   * Modificar la nota de un usuario en base a un titulo
   * @param usuario 
   * @param titulo 
   * @param cuerpo 
   * @param color 
   * @returns 
   */
  modificarNota(usuario: string, titulo: string, cuerpo: string, color: typeColor) {
    if (fs.existsSync(`BaseDatosNotas/${usuario}/${titulo}.json`)) {
      const nota = new Nota(titulo, cuerpo, color);
      fs.writeFileSync(`BaseDatosNotas/${usuario}/${titulo}.json`, new PrintNota(nota).print());

      console.log(chalk.green("Nota modificada correctamente!"));
      return true;
    } else {
      console.log(chalk.red("Nota no encontrada pruebe otra"));

      return false;
    }
  }

  /**
   * Listar las notas de un usuario
   * @param usuario 
   * @returns 
   */
  listarNotas(usuario: string) {
    if (fs.existsSync(`BaseDatosNotas/${usuario}`) && 
    fs.readdirSync(`BaseDatosNotas/${usuario}`).length > 0) {
      fs.readdirSync(`BaseDatosNotas/${usuario}`).forEach((notas) => {
        const vaciarContenido = fs.readFileSync(`BaseDatosNotas/${usuario}/${notas}`);
        const stringNota = JSON.parse(vaciarContenido.toString());
        const nota = new Nota(stringNota.titulo, stringNota.cuerpo, stringNota.color);

        console.log(chalk.keyword(nota.getColor())(nota.getTitulo()));
      });
      return true;
    } else {
      console.log(chalk.red("No se ha encontrado al usuario en la base de Datos"));

      return false;
    }
  }

  /**
   * Leer contenido de una nota
   * @param usuario 
   * @param titulo 
   * @returns 
   */
  leerNota(usuario: string, titulo: string) {
    if (fs.existsSync(`BaseDatosNotas/${usuario}/${titulo}.json`)) {
      const vaciarContenido = fs.readFileSync(`BaseDatosNotas/${usuario}/${titulo}.json`);
      const stringNota = JSON.parse(vaciarContenido.toString());
      const nota = new Nota(stringNota.titulo, stringNota.cuerpo, stringNota.color);

      console.log(chalk.keyword(nota.getColor())(nota.getTitulo()));
      console.log(chalk.keyword(nota.getColor())(nota.getCuerpo()));

      return true;
    } else {
      console.log(chalk.red("Nota no encontrada, pruebe con otro titulo"));

      return false;
    }
  }
}


