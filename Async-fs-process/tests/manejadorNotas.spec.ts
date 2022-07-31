import "mocha";
import {expect} from "chai";
import {ManejarNotas} from "../src/Notas/manejarNotas";
import * as fs from "fs";

// Vaciamos la base de datos
// fs.rmSync(`BaseDatosNotas/User1`, { recursive: true });

const manejarNotas = new ManejarNotas();
describe ("Pruebas clase ManejarNotas", () => {
    it('Crear una instancia de la clase', () => {
        expect(manejarNotas).instanceOf(ManejarNotas);
    })
    it('Añadir una nota', () => {
        expect(manejarNotas.añadirNota("User1", "Amazing", "azucar", "green")).to.eql(true)
    });
    it('Añadir una nota', () => {
        expect(manejarNotas.añadirNota("User1", "Amazing", "azucar", "green")).to.eql(false)
    });
    it('Modificar una nota', () => {
        expect(manejarNotas.modificarNota("User1", "Amazing", "azucar 2", "green")).to.eql(true)
    });
    it('Modificar una nota que no existe', () => {
        expect(manejarNotas.modificarNota("User1", "Amazing2", "azucar 4", "green")).to.eql(false)
    });
    it('Listar Notas', () => {
        expect(manejarNotas.listarNotas("User1")).to.eql(true)
    });
    it('Listar Notas de un usuario que no existe', () => {
        expect(manejarNotas.listarNotas("User2")).to.eql(false)
    });
    it('Leer una Nota', () => {
        expect(manejarNotas.leerNota("User1", "Amazing")).to.eql(true)
    });
    it('Leer una Nota no existente', () => {
        expect(manejarNotas.leerNota("User1", "Amazing2")).to.eql(false)
    });
    it('Eliminar una nota', () => {
        expect(manejarNotas.eliminarNota("User1", "Amazing")).to.eql(true)
    });
    it('Eliminar una nota no existente', () => {
        expect(manejarNotas.eliminarNota("User1", "Amazing")).to.eql(false)
    });
})