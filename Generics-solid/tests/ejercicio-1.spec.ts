/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Pokedex, PokedexPrint} from '../src/ejercicio-1/pokedexClass';
import {Pokemon, PokemonPrint} from '../src/ejercicio-1/pokemonClass';
import {Combat} from '../src/ejercicio-1/combatClass';
import {estadisticasType} from '../src/ejercicio-1/fighterClass';
import {StarWars, StarWarsPrint} from '../src/ejercicio-1/starwarsClass';
import {Marvel, MarvelPrint} from '../src/ejercicio-1/marvelClass';
import {DragonBallPrint, DrangonBall} from '../src/ejercicio-1/dragonballClass';
import {DC, DCPrint} from '../src/ejercicio-1/dcClass';

const objeto: estadisticasType = {
  vida: -10,
  ataque: -20,
  defensa: -30,
  velocidad: -200,
};
const objeto1: estadisticasType = {
  vida: 100,
  ataque: 20,
  defensa: 30,
  velocidad: 200,
};
const pikachu = new Pokemon("Pikachu", -10, -2, objeto,
    "Raatatatatatat", "Pokemon", "electrico");
const bulbasur = new Pokemon("Bulbasur", 10, 20, objeto,
    "", "Pokemon", "agua");

describe('Test class Pokemon', () => {
  describe('Se puede instanciar un Pokemon', () => {
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(pikachu).not.be.equal(null);
    });
    it('expect(bulbasur).not.be.equal(null);', () => {
      expect(bulbasur).not.be.equal(null);
    });
  });
  describe('Tiene atributos para almacenar los tipos del pokemon', () => {
    it('expect(pikachu.getNombre()).to.be.equal Pikachu;', () => {
      expect(pikachu.getTipo()).to.be.equal("electrico");
    });
    it('expect(bulbasur.getNombre()).to.be.equal agua;', () => {
      expect(bulbasur.getTipo()).to.be.equal("agua");
    });
    it('expect(bulbasur.gettipo("agua")).to.be.equal agua;', () => {
      bulbasur.setTipo("planta");
      expect(bulbasur.getTipo()).eql("planta");
    });
  });
});
const print = new PokemonPrint(pikachu);
describe('Test class PokemonPrint', () => {
  describe('Metods de la clase PokemonPrint', () => {
    it('expect(print).not.be.equal(null);', () => {
      expect(print.print()).eql(`El nombre es Pikachu, tiene un peso de 99, una altura de -2, 
    es de tipo electrico y sus estadisticas son:
    Ataque = 99,
    Defensa = 99,
    Velocidad = 99,
    Vida = 99,
    Frase = Raatatatatatat,
    Universo = Pokemon`);
    });
  });
});

const ObiWanKenobi = new StarWars("ObiWanKenobi", 10, 20, objeto,
    "Hola pequeño padawan", "StarWars", "Jedi");
const AnakinSkywalker = new StarWars("AnakinSkywalker", 10, 20, objeto,
    "", "StarWars", "Jedi");

describe('Test class StarWars', () => {
  describe('Se puede instanciar un StarWars', () => {
    it('expect(ObiWanKenobi).not.be.equal(null);', () => {
      expect(ObiWanKenobi).not.be.equal(null);
    });
    it('expect(AnakinSkywalker).not.be.equal(null);', () => {
      expect(AnakinSkywalker).not.be.equal(null);
    });
  });
  describe('Tiene atributos para almacenar los tipos del StarWars', () => {
    it('expect(ObiWanKenobi.getNombre()).to.be.equal ObiWanKenobi;', () => {
      expect(ObiWanKenobi.getTipo()).to.be.equal("Jedi");
    });
    it('expect(AnakinSkywalker.getNombre()).to.be.equal Jedi;', () => {
      expect(AnakinSkywalker.getTipo()).to.be.equal("Jedi");
    });
    it('expect(AnakinSkywalker.gettipo("agua")).to.be.equal Jedi;', () => {
      AnakinSkywalker.setTipo("Jedi");
      expect(AnakinSkywalker.getTipo()).eql("Jedi");
    });
  });
});
const print1 = new StarWarsPrint(ObiWanKenobi);
describe('Test class StarWarsPrint', () => {
  describe('Se puede instanciar un StarWarsPrint', () => {
    it('expect(print1).not.be.equal(null);', () => {
      expect(print1).not.be.equal(null);
    });
  });
  describe('Metods de la clase StarWarsPrint', () => {
    it('expect(print1).not.be.equal(null);', () => {
      expect(print1.print()).eql(`El nombre es ObiWanKenobi, tiene un peso de 10, una altura de 20, 
    es de tipo Jedi y sus estadisticas son:
    Ataque = 99,
    Defensa = 99,
    Velocidad = 99,
    Vida = 99,
    Frase = Hola pequeño padawan,
    Universo = StarWars`);
    });
  });
});

const Hulk = new Marvel("Hulk", 10, 20, objeto,
    "ahhhhhgggg", "Marvel", "Superhéroes");
const Thanos = new Marvel("Thanos", 10, 20, objeto,
    "", "Marvel", "Supervillanos");

describe('Test class Marvel', () => {
  describe('Se puede instanciar un Marvel', () => {
    it('expect(Hulk).not.be.equal(null);', () => {
      expect(Hulk).not.be.equal(null);
    });
    it('expect(Thanos).not.be.equal(null);', () => {
      expect(Thanos).not.be.equal(null);
    });
  });
  describe('Tiene atributos para almacenar los tipos del Marvel', () => {
    it('expect(Hulk.getTipo()).to.be.equal Superhéroes;', () => {
      expect(Hulk.getTipo()).to.be.equal("Superhéroes");
    });
    it('expect(Thanos.getTipo()).to.be.equal Supervillanos;', () => {
      expect(Thanos.getTipo()).to.be.equal("Supervillanos");
    });
    it('expect(Thanos.gettipo("agua")).to.be.equal agua;', () => {
      Thanos.setTipo("Superhéroes");
      expect(Thanos.getTipo()).eql("Superhéroes");
    });
  });
});
const print2 = new MarvelPrint(Hulk);
describe('Test class MarvelPrint', () => {
  describe('Se puede instanciar un MarvelPrint', () => {
    it('expect(print1).not.be.equal(null);', () => {
      expect(print2).not.be.equal(null);
    });
  });
  describe('Metods de la clase MarvelPrint', () => {
    it('expect(print1).not.be.equal(null);', () => {
      expect(print2.print()).eql(`El nombre es Hulk, tiene un peso de 10, una altura de 20, 
      es de tipo Superhéroes y sus estadisticas son:
      Ataque = 99,
      Defensa = 99,
      Velocidad = 99,
      Vida = 99,
      Frase = ahhhhhgggg,
      Universo = Marvel`);
    });
  });
});


const Goku = new DrangonBall("Goku", 10, 20, objeto,
    "kamehamehaaaaaaaa", "DragonBall", "Saiyan");
const Freezer = new DrangonBall("Freezer", 10, 20, objeto,
    "", "DragonBall", "Ogro");

describe('Test class Marvel', () => {
  describe('Se puede instanciar un Marvel', () => {
    it('expect(Goku).not.be.equal(null);', () => {
      expect(Goku).not.be.equal(null);
    });
    it('expect(Freezer).not.be.equal(null);', () => {
      expect(Freezer).not.be.equal(null);
    });
  });
  describe('Tiene atributos para almacenar los tipos del DragonBall', () => {
    it('expect(Goku.getTipo()).to.be.equal Saiyan;', () => {
      expect(Goku.getTipo()).to.be.equal("Saiyan");
    });
    it('expect(Freezer.getTipo()).to.be.equal Ogro;', () => {
      expect(Freezer.getTipo()).to.be.equal("Ogro");
    });
    it('expect(Freezer.gettipo("agua")).to.be.equal agua;', () => {
      Freezer.setTipo("Ogro");
      expect(Freezer.getTipo()).eql("Ogro");
    });
  });
});
const print3 = new DragonBallPrint(Goku);
describe('Test class MarvelPrint', () => {
  describe('Se puede instanciar un MarvelPrint', () => {
    it('expect(print1).not.be.equal(null);', () => {
      expect(print3).not.be.equal(null);
    });
  });
  describe('Metods de la clase MarvelPrint', () => {
    it('expect(print1).not.be.equal(null);', () => {
      expect(print3.print()).eql(`El nombre es Goku, tiene un peso de 10, una altura de 20, 
        es de tipo Saiyan y sus estadisticas son:
        Ataque = 99,
        Defensa = 99,
        Velocidad = 99,
        Vida = 99,
        Frase = kamehamehaaaaaaaa,
        Universo = DragonBall`);
    });
  });
});

const Presence = new DC("Presence", 10, 20, objeto,
    "kamehamehaaaaaaaa", "DC", "Gods");
const RedTornado = new DC("", 10, 20, objeto,
    "", "DC", "Elementals");

describe('Test class Marvel', () => {
  describe('Se puede instanciar un Marvel', () => {
    it('expect(Presence).not.be.equal(null);', () => {
      expect(Presence).not.be.equal(null);
    });
    it('expect(RedTornado).not.be.equal(null);', () => {
      expect(RedTornado).not.be.equal(null);
    });
  });
  describe('Tiene atributos para almacenar los tipos del DC', () => {
    it('expect(Presence.getTipo()).to.be.equal Saiyan;', () => {
      expect(Presence.getTipo()).to.be.equal("Gods");
    });
    it('expect(RedTornado.getTipo()).to.be.equal Ogro;', () => {
      expect(RedTornado.getTipo()).to.be.equal("Elementals");
    });
    it('expect(RedTornado.gettipo("agua")).to.be.equal agua;', () => {
      RedTornado.setTipo("Death");
      expect(RedTornado.getTipo()).eql("Death");
    });
  });
});
const print4 = new DCPrint(Presence);
describe('Test class MDCPrint', () => {
  describe('Se puede instanciar un DCPrint', () => {
    it('expect(print1).not.be.equal(null);', () => {
      expect(print4).not.be.equal(null);
    });
  });
  describe('Metods de la clase DCPrint', () => {
    it('expect(print1).not.be.equal(null);', () => {
      expect(print4.print()).eql(`El nombre es Presence, tiene un peso de 10, una altura de 20, 
          es de tipo Gods y sus estadisticas son:
          Ataque = 99,
          Defensa = 99,
          Velocidad = 99,
          Vida = 99,
          Frase = kamehamehaaaaaaaa,
          Universo = DC`);
    });
  });
});


describe('Test class Figher', () => {
  describe('Tiene getters y setters', () => {
    it('expect(Presence.getAtaque()).to.be.equal Saiyan;', () => {
      expect(Presence.getAtaque()).to.be.equal(99);
    });
    it('expect(Presence.getDefensa()).to.be.equal Saiyan;', () => {
      expect(Presence.getDefensa()).to.be.equal(99);
    });
    it('expect(Presence.getVelocidad()).to.be.equal Saiyan;', () => {
      expect(Presence.getVelocidad()).to.be.equal(99);
    });
    it('expect(Presence.getVida()).to.be.equal Saiyan;', () => {
      expect(Presence.getVida()).to.be.equal(99);
    });
    it('expect(Presence.getNombre()).to.be.equal Saiyan;', () => {
      expect(Presence.getNombre()).to.be.equal("Presence");
    });
    it('expect(Presence.getPeso()).to.be.equal Saiyan;', () => {
      expect(Presence.getPeso()).to.be.equal(10);
    });
    it('expect(Presence.getAltura()).to.be.equal Saiyan;', () => {
      expect(Presence.getAltura()).to.be.equal(20);
    });
    it('expect(Presence.getUniverso()).to.be.equal Saiyan;', () => {
      expect(Presence.getUniverso()).to.be.equal("DC");
    });
    it('expect(Presence.getFrase()).to.be.equal Saiyan;', () => {
      expect(Presence.getFrase()).to.be.equal("kamehamehaaaaaaaa");
    });
    it('expect(Presence.setAtaque(2)).to.be.equal Saiyan;', () => {
      Presence.setAtaque(2);
      expect(Presence.getAtaque()).to.be.equal(2);
    });
    it('expect(Presence.setDefensa(2)).to.be.equal Saiyan;', () => {
      Presence.setDefensa(2);
      expect(Presence.getDefensa()).to.be.equal(2);
    });
    it('expect(Presence.setVelocidad(2)).to.be.equal Saiyan;', () => {
      Presence.setVelocidad(2);
      expect(Presence.getVelocidad()).to.be.equal(2);
    });
    it('expect(Presence.setVida(100)).to.be.equal Saiyan;', () => {
      Presence.setVida(100);
      expect(Presence.getVida()).to.be.equal(100);
    });
    it('expect(Presence.setNombre("Pepe)).to.be.equal Saiyan;', () => {
      Presence.setNombre("Pepe");
      expect(Presence.getNombre()).to.be.equal("Pepe");
    });
    it('expect(Presence.setPeso(2)).to.be.equal Saiyan;', () => {
      Presence.setPeso(2);
      expect(Presence.getPeso()).to.be.equal(2);
    });
    it('expect(Presence.setAltura(2)).to.be.equal Saiyan;', () => {
      Presence.setAltura(2);
      expect(Presence.getAltura()).to.be.equal(2);
    });
    it('expect(Presence.setUniverso("StarWars)).to.be.equal Saiyan;', () => {
      Presence.setUniverso("StarWars");
      expect(Presence.getUniverso()).to.be.equal("StarWars");
    });
    it('expect(Presence.setFrase("Ayudaaaa")).to.be.equal Saiyan;', () => {
      Presence.setFrase("Ayudaaaaaa");
      expect(Presence.getFrase()).to.be.equal("Ayudaaaaaa");
    });
  });
});

const pokedex = new Pokedex([pikachu, Goku, Presence, ObiWanKenobi, Thanos]);
describe('Test class Pokedex', () => {
  describe('Se puede instanciar un Pokemon', () => {
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(pokedex).not.be.equal(null);
    });
  });
  describe('Tiene las siguientes funciones', () => {
    it('expect(añadirLuchador(Hulk)).not.be.equal(null);', () => {
      expect(pokedex.añadirLuchador(Hulk)).not.be.equal(null);
    });
    it('expect(añadirLuchador(Hulk)).not.be.equal(null);', () => {
      expect(pokedex.eliminarLuchador(Hulk)).not.be.equal(null);
    });
    it('expect(añadirLuchador(Hulk)).not.be.equal(null);', () => {
      const result = pokedex.eliminarLuchador(Hulk);
      expect(result).eql("EL luchador que intenta eliminar no existe");
    });
  });
});
const pokedexprint = new PokedexPrint(pokedex);
describe('Test class PokedexPrint', () => {
  describe('Se puede instanciar un Pokemon', () => {
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(pokedexprint).not.be.equal(null);
    });
  });
  describe('Tiene las siguientes funciones', () => {
    it('expect(añadirLuchador(Hulk)).not.be.equal(null);', () => {
      expect(pokedexprint.print()).not.be.equal(null);
    });
  });
});


describe('Test class Combat', () => {
  const pikachu1 = new Pokemon("Pikachu", -10, -2, objeto,
      "Raatatatatatat", "Pokemon", "electrico");
  const bulbasur1 = new Pokemon("Bulbasur", 10, 20, objeto,
      "", "Pokemon", "agua");
  const Goku1 = new DrangonBall("Goku", 10, 20, objeto,
      "kamehamehaaaaaaaa", "DragonBall", "Saiyan");
  const Freezer1 = new DrangonBall("Freezer", 10, 20, objeto,
      "", "DragonBall", "Ogro");
  const Presence1 = new DC("Presence", 10, 20, objeto,
      "kamehamehaaaaaaaa", "DC", "Gods");
  const RedTornado1 = new DC("", 10, 20, objeto,
      "", "DC", "Elementals");
  const combate = new Combat(Goku1, Presence1);
  const combate1 = new Combat(Presence1, Freezer1);
  const combate2 = new Combat(pikachu1, bulbasur1);
  const combate3 = new Combat(RedTornado1, Goku1);
  describe('Se puede instanciar un Combate', () => {
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(combate).not.be.equal(null);
    });
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(combate1).not.be.equal(null);
    });
  });
  describe('Se pueden simular combates', () => {
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(combate.start()).eql("EL ganador es Goku !!!!!!!!!!");
    });
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(combate1.start()).eql("EL ganador es Presence !!!!!!!!!!");
    });
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(combate2.start()).eql("EL ganador es Pikachu !!!!!!!!!!");
    });
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(combate3.start()).eql("EL ganador es Defecto !!!!!!!!!!");
    });
  });
});


