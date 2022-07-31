import 'mocha';
import {expect} from 'chai';
import {EventEmitter} from 'events';
import{CatNoPipeGrep} from "../src/P10/ejercicio2/catnopipegrep";
import{CatPipeGrep} from "../src/P10/ejercicio2/catpipegrep";
import { doesNotMatch } from 'assert';


describe('Pruebas de la clase CatNoPipeGrep', () => {
    it('Se puede instanciar un objeto', () => {
        const ejecucion = new CatNoPipeGrep("fichero.txt", "BEBE", 4);
        expect(ejecucion).instanceOf(CatNoPipeGrep);
    });
    it('Método que escucha el fichero y ejecuta un cat que pasa a través de un pipe al comando grep', () => {
        const ejecucion = new CatNoPipeGrep("fichero.txt", "BEBE", 4);
        ejecucion.run();
        ejecucion.on("finish", (msg) => {
            expect(msg).to.be.equal("Se ha terminado la ejecución");
    });
    });
});

describe('Pruebas de la clase CatPipeGrep', () => {
    it('Se puede instanciar un objeto', () => {
        const ejecucion = new CatPipeGrep("fichero.txt", "BEBE", 4);
        expect(ejecucion).instanceOf(CatPipeGrep);
    });
    it('Método que escucha el fichero y ejecuta un cat que pasa a través de un pipe al comando grep', () => {
        const ejecucion = new CatPipeGrep("fichero.txt", "BEBE", 4);
        ejecucion.run();
        ejecucion.on("finish", (msg) => {
            expect(msg).to.be.equal("Se ha terminado la ejecución");
    });
    });
});

