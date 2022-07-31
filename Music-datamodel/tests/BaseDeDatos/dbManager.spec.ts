import 'mocha';
import {expect} from "chai";
import {JsonDataBase} from '../../src/BaseDeDatos/dbManager';
import * as Data from "../../src/BaseDeDatos/dataBase";

const dataBase = new JsonDataBase(Data.generos, Data.playList, Data.autores);

describe('JsonDataBase', () => {
    it('Deberia crearse una instancia de JsonDataBase', () => {
        expect(dataBase).to.be.an.instanceof(JsonDataBase);
    });
    it('Devuelve la informacion de la base de datos', () => {
        expect(dataBase.getEstructura()).eql(Data.generos);
        expect(dataBase.getPlayList()).eql(Data.playList);
        expect(dataBase.getAutores()).eql(Data.autores);
    });
});