import {Coleccion} from "./coleccionGenerica";
import {GenerosMusicales} from "./generosMusicales";
import inquirer from 'inquirer';
import {PrintCancion, Cancion} from "./cancion";
import {PrintAlbum, Album} from "./album";
import {Artista} from "./artistas";
import {PlayList, PrintPlayList} from "./playlist";
import {Grupo} from "./grupo";
import {JsonDataBase} from "../BaseDeDatos/dbManager";

/**
 * Busqueda de patrone en una entrada
 */
const fuzzy = require('fuzzy');

/**
 * Plugin para la interacción con el usuario y realizar búsquedas
 */
const inquirerPrompt = require('inquirer-autocomplete-prompt');
inquirer.registerPrompt('autocomplete', inquirerPrompt);

/**
 * enum para los tipos de busqueda
 */
enum visualizarEnum {
    canciones,
    albumes,
    playList,
}

/**
 * enum para los distintos tipos de filtros.
 */
enum filterType {
    titulo,
    single,
    reproducciones,
    fechaPublicacion,
    nombreGrupoArtista,
    duracion,
    genero,
}

/**
 * enum para los distintos tipos de salida
 */
enum avanzadaPlaylist {
  playListInfoBasica,
  playListInfoAvanzada,
}

/**
 * @class Interfaz
 */
export class Interfaz {
  /**
   * @param interfaz atributo estatico que nos permite seguir el patron de diseño Singleton.
   */
  private static interfaz: Interfaz;
  
  /**
   * Atributos que nos permiten buscar los distintos 
   * tipos de informacion.
  */
  private searchArtistas: string[];
  private searchGrupos: string[];
  private searchAlbumes: string[];
  private searchCanciones: string[];
  private searchGeneros: string[];
  private searchPlayList: string[];

  /**
   * @param generos base de datos de los generos
   * @param playList base de datos de las playlists
   * @param autores base de datos de los autores
   */
  private generos: Coleccion<GenerosMusicales>;
  private playList: Coleccion<PlayList>;
  private autores: Coleccion<Artista | Grupo>;

  /**
   * @param usuarioNick nombre del usuario que está trabajando con las playlists.
   */
  private usuarioNick: string = "";

  /**
   * Constructor.
   * @param dataBase base de datos de la aplicacion
   */
  private constructor(private dataBase: JsonDataBase) {
    this.generos = this.dataBase.getEstructura();
    this.playList = this.dataBase.getPlayList();
    this.autores = this.dataBase.getAutores();
    
    this.actualizarSearchArtistasGrupos();
    this.actualizarSearchAlbumes();
    this.actualizarSearchCanciones();
    this.actualizarSearchGeneros();
    this.actualizarSearchPlalist();
  }

  /**
   * Metodo que hace posible el patrón de diseño Singleton.
   * @param datos base de datos
   * @returns objeto Interfaz
   */
  public static getInterfazInstance(datos: JsonDataBase): Interfaz {
    if (!Interfaz.interfaz) {
      Interfaz.interfaz = new Interfaz(datos);
    }
    return Interfaz.interfaz;
  }

  /**
   * Metodo que comrpueba que unos generos son de un artista/grupo.
   */
  private mirarGeneros(generos: string[], autorTeclado: string): number {
    let contador: number = 0;

    generos.forEach((valores) => {
      [...this.autores].forEach((autor) => {
        if (autor.getNombre() === autorTeclado) {
          autor.getGeneros().forEach((generoAutor) => {
            if (generoAutor === valores) {
              contador ++;
            }
          });
        }
      });
    });
    return contador;
  }

  /**
   * Metodo que actualiza el vector de playlists
   */
  private searchCancionesPlaylist(nombre: string): string[] {
    const aux: string[] = [];
    [...this.playList].forEach((playList) => {
      if (playList.getNombre() === nombre) {
        [...playList.getCanciones()].forEach((cancion) => {
          aux.push(cancion.getNombre());
        });
      }
    });

    return aux;
  }
  
  /**
   * Metodo que actualiza el vector de GenerosMusicales
   */
  private actualizarSearchGeneros(): void {
    this.searchGeneros = [];
    [...this.generos].forEach((genero) => {
      this.searchGeneros.push(genero.getNombre());
    });

    this.searchGeneros = [...new Set(this.searchGeneros)];
  }

  /**
   * Metodo que actualiza el vector de artistas y grupos
   */
  private actualizarSearchArtistasGrupos(): void {
    this.searchArtistas = [];
    this.searchGrupos = [];

    [...this.autores].forEach((autores) => {
      if (autores instanceof Artista) {
        this.searchArtistas.push(autores.getNombre());
      } else {
        this.searchGrupos.push(autores.getNombre());
      }
    });

    this.searchArtistas = [...new Set(this.searchArtistas)];
    this.searchGrupos = [...new Set(this.searchGrupos)];
  }

  /**
   * Metodo que actualiza el vector de albumes
   */
  private actualizarSearchAlbumes(): void {
    this.searchAlbumes = [];
    [...this.autores].forEach((autor) => {
      [...autor.getAlbumes()].forEach((album) => {
        this.searchAlbumes.push(album.getNombre());
      });
    });
    this.searchAlbumes = [...new Set(this.searchAlbumes)];
  }

  /**
   * Metodo que actualiza el vector de canciones
   */
  private actualizarSearchCanciones(): void {
    this.searchCanciones = [];
    [...this.autores].forEach((autor) => {
      [...autor.getCanciones()].forEach((cancion) => {
        this.searchCanciones.push(cancion.getNombre());
      });
    });
    this.searchArtistas = [...new Set(this.searchArtistas)];
  }

  /**
   * Metodo que actualiza el vector de playlists
   */
  private actualizarSearchPlalist(): void {
    this.searchPlayList = [];
    [...this.playList].forEach((playList) => {
      this.searchPlayList.push(playList.getNombre());
    });
    this.searchPlayList = [...new Set(this.searchPlayList)];
  }

  /**
   * Metodo que realiza búsqueda inteligente
   * @param search array donde se realizará la búsqueda
   * @param input string que se buscará en el array
   */
  private searchStates(search: string[], input: string = "") {
    return new Promise((resolve) => {
      setTimeout(() => {
        const results = fuzzy.filter(input, search).map((el: any) => el.original);
  
        results.splice(5, 0, new inquirer.Separator());
        results.push(new inquirer.Separator());
        resolve(results);
      }, Math.random() * 470 + 30);
    });
  }

  /**
   * Método principal de la interfaz que lanza el programa.
   */
  run(): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "comando",
      message: "¿Qué desea hacer?",
      choices: ["Añadir, modificar o eliminar", "Visualizar", "Gestión avanzada de PlayLists", "Salir"],
    }]).then((answers) => {
      switch (answers["comando"]) {
        case "Añadir, modificar o eliminar":
          this.añadirModificarEliminar();
          break;
        case "Visualizar":
          this.visualizarLista();
          break;
        case "Gestión avanzada de PlayLists":
          this.inicioPlayList();
          break;
        case "Salir":
          break;
      }
    });
  }

  /**
   * Método que permite eleguir al usuario que accion desea realizar.
   */
  private añadirModificarEliminar(): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "comando",
      message: "¿Qué desea hacer?",
      choices: ["Añadir", "Modificar", "Eliminar", "Salir"],
    }]).then((answers) => {
      switch (answers["comando"]) {
        case "Añadir":
          this.añadir();
          break;
        case "Modificar":
          this.modificar();
          break;
        case "Eliminar":
          this.eliminar();
          break;
        case "Salir":
          this.run();
          break;
      }
    });
  }

  /**
   * Metodo que permite eliminar una serie de elementos
   */
  private eliminar(): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "comando",
      message: "¿Qué desea eliminar?",
      choices: ["Canción", "Album", "Artista", "Grupo", "Género", "Salir"],
    }]).then((answers) => {
      switch (answers["comando"]) {
        case "Canción":
          this.eliminarCancion();
          break;
        case "Album":
          this.eliminarAlbum();
          break;
        case "Artista o grupo":
          this.eliminarArtistaGrupo();
          break;
        case "Género":
          this.eliminarGenero();
          break;
        case "Salir":
          this.añadirModificarEliminar();
          break;
      }
    });
  }

  /**
   * Metodo que elimina un genero
   */
  private eliminarGenero(): void {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Nombre del genero:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchGeneros, input),
    }]).then((answers) => {
      let aux: string[] = [];
      
      [...this.generos].forEach((genero) => {
        if (genero.getNombre() === answers["nombre"]) {
          aux = genero.getCanciones();
        }
      });
      this.generos.removeElemento(answers["nombre"]);

      aux.forEach((cancion) => {
        [...this.playList].forEach((playlist) => {
          playlist.getCanciones().removeElemento(cancion);
        });
      });
      
      this.dataBase.guardarEstructura();
      this.dataBase.guardarPlayList();
      this.actualizarSearchGeneros();
      this.eliminar();
    });
  }

  /**
   * Método que elimina un artista o grupo
   */
  private eliminarArtistaGrupo(): void {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Nombre del autor:",
      source: (answersSoFar: any, input: string) => this.searchStates([...this.searchArtistas, ...this.searchGrupos], input),
    }]).then((answers) => {
      const aux: string[] = [];
      [...this.autores].forEach((autor) => {
        if (autor.getNombre() === answers["nombre"]) {
          [...autor.getCanciones()].forEach((cancion) => {
            aux.push(cancion.getNombre());
          });
        }
      });

      this.autores.removeElemento(answers["nombre"]);

      [...this.generos].forEach((genero) => {
        genero.setArtistasGrupos(genero.getArtistaGrupos().filter((autor) => autor !== answers["nombre"]));
      });

      aux.forEach((cancion) => {
        [...this.playList].forEach((playlist) => {
          playlist.getCanciones().removeElemento(cancion);
        });
      });

      this.dataBase.guardarEstructura();
      this.dataBase.guardarPlayList();
      this.actualizarSearchArtistasGrupos();
      this.eliminar();
    });
  }

  /**
   * Método que elimina un album
   */
  private eliminarAlbum(): void {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Nombre del album:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchAlbumes, input),
    }]).then((answers) => {
      const aux: string [] = [];
      [...this.generos].forEach((genero) => {
        genero.setAlbumes(genero.getAlbumes().filter((album) => album !== answers["nombre"]));
      });
      [...this.autores].forEach((autor) => {
        [...autor.getAlbumes()].forEach((album) => {
          if (album.getNombre() === answers["nombre"]) {
            [...album.getCanciones()].forEach((cancion) => {
              aux.push(cancion.getNombre());
            });
          }
        });
        autor.getAlbumes().removeElemento(answers["nombre"]);
      });

      aux.forEach((cancion) => {
        [...this.playList].forEach((playlist) => {
          playlist.getCanciones().removeElemento(cancion);
        });
      });

      this.dataBase.guardarEstructura();
      this.dataBase.guardarPlayList();
      this.actualizarSearchAlbumes();
      this.eliminar();
    });
  }

  /**
   * Metodo que permite eliminar una cancion
   */
  private eliminarCancion(): void {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Nombre de la canción:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchCanciones, input),
    }]).then((answers) => {
      [...this.generos].forEach((genero) => {
        genero.setCanciones(genero.getCanciones().filter((cancion) => cancion !== answers["nombre"]));
      });

      [...this.autores].forEach((autor) => {
        autor.getCanciones().removeElemento(answers["nombre"]);
        [...autor.getAlbumes()].forEach((album) => {
          album.getCanciones().removeElemento(answers["nombre"]);
        });
      });

      [...this.playList].forEach((playList) => {
        playList.getCanciones().removeElemento(answers["nombre"]);
      });

      this.dataBase.guardarEstructura();
      this.dataBase.guardarPlayList();
      this.actualizarSearchCanciones();
      this.eliminar();
    });
  }

  /**
   * Metodo que permite modificar un elemento
   */  
  private modificar(): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "comando",
      message: "¿Qué desea modificar?",
      choices: ["Canción", "Album", "Artista", "Grupo", "Género", "Salir"],
    }]).then((answers) => {
      switch (answers["comando"]) {
        case "Canción":
          this.modificarCancion();
          break;
        case "Album":
          this.modificarAlbum();
          break;
        case "Artista":
          this.modificarArtista();
          break;
        case "Grupo":
          this.modificarGrupo();
          break;
        case "Género":
          this.modificarGenero();
          break;
        case "Salir":
          this.añadirModificarEliminar();
          break;
      }
    });
  }

  /**
   * Metodo que permite modificar un genero
   */
  private modificarGenero(): void {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Nombre del genero:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchGeneros, input),
    },
    {
      name: "nombreNuevo",
      message: "Nuevo nombre del genero:",
    }]).then((answers) => {
      [...this.generos].forEach((genero) => {
        if (genero.getNombre() === answers["nombre"]) {
          genero.setNombre(answers["nombreNuevo"]);
        }
      });

      this.dataBase.guardarEstructura();
      this.actualizarSearchGeneros();
      this.modificar();
    });
  }

  /**
   * Metodo que permite modificar grupo
   */
  private modificarGrupo(): void {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Nombre del grupo:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchGrupos, input),
    },
    {
      name: "nombreNuevo",
      message: "Nuevo nombre del grupo:",
    },
    {
      name: "fechaNuevo",
      message: "Nueva fecha de creación del grupo:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "Las reproducciones deben ser un número";
        }
        return true;
      },
    },
    {
      name: "oyentes",
      message: "Cantidad de oyentes mensuales:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "El valor debe ser un número";
        }
        return true;
      },
    }]).then((answers) => {
      [...this.generos].forEach((genero) => {
        genero.setArtistasGrupos(genero.getArtistaGrupos().splice(answers["nombre"], 1, answers["nombreNuevo"]));
      });

      [...this.autores].forEach((autor) => {
        if (autor.getNombre() === answers["nombre"] && autor instanceof Grupo) {
          autor.setNombre(answers["nombreNuevo"]);
          autor.setFechaCreacion(parseInt(answers["fechaNuevo"]));
          autor.setOyentes(parseInt(answers["oyentes"]));

          [...autor.getCanciones()].forEach((cancion) => {
            cancion.setAutor(answers["nombreNuevo"]);
          });
          [...autor.getAlbumes()].forEach((album) => {
            album.setAutor(answers["nombreNuevo"]);
            [...album.getCanciones()].forEach((cancion) => {
              cancion.setAutor(answers["nombreNuevo"]);
            });
          });
        }
      });

      [...this.playList].forEach((playList) => {
        [...playList.getCanciones()].forEach((cancion) => {
          if (cancion.getAutor() === answers["nombre"]) {
            cancion.setAutor(answers["nombreNuevo"]);
          }
        });
      });

      this.dataBase.guardarEstructura();
      this.actualizarSearchArtistasGrupos();
      this.modificar();
    });
  }

  /**
   * Metodo que permite modificar un artista
   */
  private modificarArtista(): void {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Nombre del artista:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchArtistas, input),
    },
    {
      name: "nombreNuevo",
      message: "Nuevo nombre del artista:",
    },
    {
      name: "oyentes",
      message: "Nueva cantidad de oyentes mensuales:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "El valor debe ser un número";
        }
        return true;
      },
    }]).then((answers) => {
      [...this.generos].forEach((genero) => {
        genero.setArtistasGrupos(genero.getArtistaGrupos().splice(answers["nombre"], 1, answers["nombreNuevo"]));
      });

      [...this.autores].forEach((autor) => {
        if (autor.getNombre() === answers["nombre"] && autor instanceof Artista) {
          autor.setNombre(answers["nombreNuevo"]);
          autor.setOyentes(parseInt(answers["oyentes"]));
          [...autor.getCanciones()].forEach((cancion) => {
            cancion.setAutor(answers["nombreNuevo"]);
          });
          [...autor.getAlbumes()].forEach((album) => {
            album.setAutor(answers["nombreNuevo"]);
            [...album.getCanciones()].forEach((cancion) => {
              cancion.setAutor(answers["nombreNuevo"]);
            });
          });
        }
      });

      [...this.playList].forEach((playList) => {
        [...playList.getCanciones()].forEach((cancion) => {
          if (cancion.getAutor() === answers["nombre"]) {
            cancion.setAutor(answers["nombreNuevo"]);
          }
        });
      });

      this.dataBase.guardarEstructura();
      this.actualizarSearchArtistasGrupos();
      this.modificar();
    });
  }

  /**
   * Metodo que permite modificar un album
   */
  private modificarAlbum(): void {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Nombre del album:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchAlbumes, input),
    },
    {
      name: "nombreNuevo",
      message: "Nuevo nombre del album:",
    },
    {
      name: "fechaNuevo",
      message: "Nueva fecha de creación del album:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "Las reproducciones deben ser un número";
        }
        return true;
      },
    }]).then((answers) => {
      [...this.generos].forEach((genero) => {
        genero.setAlbumes(genero.getAlbumes().splice(answers["nombre"], 1, answers["nombreNuevo"]));
      });

      [...this.autores].forEach((autor) => {
        [...autor.getAlbumes()].forEach((album) => {
          if (album.getNombre() === answers["nombre"]) {
            album.setNombre(answers["nombreNuevo"]);
            album.setFechaPublicacion(parseInt(answers["fechaNuevo"]));
          }
        });
      });

      this.dataBase.guardarEstructura();
      this.actualizarSearchAlbumes();
      this.modificar();
    });
  }

  /**
   * Metodo que permite modificar una cancion
   */
  private modificarCancion(): void {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Nombre de la canción:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchCanciones, input),
    },
    {
      name: "nombreNuevo",
      message: "Nuevo nombre de la canción:",
    },
    {
      name: "reproduccionNuevo",
      message: "Nuevas reproducciones de la canción:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "Las reproducciones deben ser un número";
        }
        return true;
      },
    }]).then((answers) => {
      [...this.generos].forEach((genero) => {
        genero.setCanciones(genero.getCanciones().splice(answers["nombre"], 1, answers["nombreNuevo"]));
      });

      [...this.autores].forEach((autor) => {
        [...autor.getCanciones()].forEach((cancion) => {
          if (cancion.getNombre() === answers["nombre"]) {
            cancion.setNombre(answers["nombreNuevo"]);
            cancion.setReproducciones(parseInt(answers["reproduccionNuevo"]));
          }
        });
        [...autor.getAlbumes()].forEach((album) => {
          [...album.getCanciones()].forEach((cancion) => {
            if (cancion.getNombre() === answers["nombre"]) {
              cancion.setNombre(answers["nombreNuevo"]);
              cancion.setReproducciones(parseInt(answers["reproduccionNuevo"]));
            }
          });
        });
      });

      [...this.playList].forEach((playlist) => {
        [...playlist.getCanciones()].forEach((cancion) => {
          if (cancion.getNombre() === answers["nombre"]) {
            cancion.setNombre(answers["nombreNuevo"]);
            cancion.setReproducciones(parseInt(answers["reproduccionNuevo"]));
          }
        });
      });

      this.dataBase.guardarEstructura();
      this.actualizarSearchCanciones();
      this.modificar();
    });
  }

  /**
   * Metodo que permite añadir un elemento
   */
  private añadir(): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "comando",
      message: "¿Qué desea añadir?",
      choices: ["Canción a un album", "Album", "Artista", "Grupo", "Género", "Salir"],
    }]).then((answers) => {
      switch (answers["comando"]) {
        case "Canción a un album":
          this.añadirCancionAlbum();
          break;
        case "Album":
          this.añadirAlbum();
          break;
        case "Artista":
          this.añadirArtista();
          break;
        case "Grupo":
          this.añadirGrupo();
          break;
        case "Género":
          this.añadirGenero();
          break;
        case "Salir":
          this.añadirModificarEliminar();
          break;
      }
    });
  }

  /**
   * Metodo que permite añadir un Genero
   */
  private añadirGenero(): void {
    console.clear();
    inquirer.prompt([{
      name: "nombre",
      message: "Nombre del género:",
    }]).then((answers) => { 
      const genero = new GenerosMusicales({nombre: answers["nombre"], artistasGrupos: [], 
        albumes: [], canciones: []});

      this.generos.addElemento(genero);

      this.actualizarSearchGeneros();
      this.dataBase.guardarEstructura();
      this.añadir();
    });
  }

  /**
   * Metodo que permite añadir un Grupo
   */
  private añadirGrupo(): void {
    console.clear();
    inquirer.prompt([{
      name: "nombre",
      message: "Nombre del grupo:",
    },
    {
      name: "artistas",
      message: "Nombre de los componentes:",
    },
    {
      name: "fecha",
      message: "Año de creacion del grupo:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "La duración debe ser un número";
        }
        return true;
      },
    },
    {
      name: "generos",
      message: "Generos de la canción:",
    },
    {
      name: "oyentes",
      message: "Cantidad de oyentes mensuales:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "El valor debe ser un número";
        }
        return true;
      },
    }]).then((answers) => {  
      const generos: string[] = answers["generos"].split(' ');
  
      if (this.mirarGeneros(generos, answers["autor"]) !== generos.length) {
        throw new Error("¡¡¡¡¡ERROR: Géneros incorrectos!!!!!");
      }
      
      const grupo = new Grupo({nombre: answers["nombre"], artistas: [], fechaCreacion: answers["fecha"],
        generos: generos, albumes: new Coleccion<Album>(), canciones: new Coleccion<Cancion>(), oyentes: answers["oyentes"]});

      [...this.generos].forEach((genero) => {
        grupo.getGeneros().forEach((generosGrupo) => {
          if (generosGrupo === genero.getNombre()) {
            genero.addArtistaGrupo(grupo.getNombre());
          }
        });
      });

      this.dataBase.guardarEstructura();
      this.actualizarSearchArtistasGrupos();
      this.añadir();
    }).catch((error) => {
      console.log(error.message);
      setTimeout(() => {
        this.añadir();
      }, 3000);
    });
  }

  /**
   * Metodo que permite añadir Artista
   */
  private añadirArtista(): void {
    console.clear();    
    inquirer.prompt([{
      name: "nombre",
      message: "Nombre del artista:",
    },
    {
      name: "grupos",
      message: "Nombre de los grupos del artista:",
    },
    {
      name: "generos",
      message: "Generos del artista:",
    },
    {
      name: "oyentes",
      message: "Cantidad de oyentes mensuales:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "El valor debe ser un número";
        }
        return true;
      },
    }]).then((answers) => {  
      const generos: string[] = answers["generos"].split(' ');

      if (this.mirarGeneros(generos, answers["autor"]) !== generos.length) {
        throw new Error("¡¡¡¡¡ERROR: Géneros incorrectos!!!!!");
      }

      const artista = new Artista({nombre: answers["nombre"], grupos: answers["grupos"].split(' '), 
        generos: generos, albumes: new Coleccion<Album>(), canciones: new Coleccion<Cancion>(), oyentes: parseInt(answers["oyentes"])});

      [...this.generos].forEach((genero) => {
        artista.getGeneros().forEach((generosArtista) => {
          if (generosArtista === genero.getNombre()) {
            genero.addArtistaGrupo(artista.getNombre());
          }
        });
      });
      
      [...artista.getGrupos()].forEach((grupo) => {
        [...this.autores].forEach((grupoGenero) => {
          if (grupo === grupoGenero.getNombre() && grupoGenero instanceof Grupo) {
            grupoGenero.addArtista(artista.getNombre());
          } 
        });
      });

      this.dataBase.guardarEstructura();
      this.actualizarSearchArtistasGrupos();
      this.añadir();
    }).catch((error) => {
      console.log(error.message);
      setTimeout(() => {
        this.añadir();
      }, 3000);
    });
  }

  /**
   * Metodo que permite añadir Album
   */
  private añadirAlbum(): void {
    console.clear();
    inquirer.prompt([{
      name: "nombre",
      message: "Nombre de album:",
    },
    {
      type: "autocomplete",
      name: "autor",
      message: "Nombre del creador:",
      source: (answersSoFar: any, input: string) => this.searchStates([...this.searchArtistas, ...this.searchGrupos], input),
    },
    {
      name: "creacion",
      message: "Año de creación del album:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "El año debe ser un número";
        }
        return true;
      },
    },
    {
      name: "generos",
      message: "Generos del album:",
    },
    {
      name: "canciones",
      message: "Cantidad de canciones del album:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "La cantidad debe ser un número";
        }
        if (parseInt(value) <= 0) {
          return "La cantidad mínima es 1";
        }
        return true;
      },
    }]).then((answers) => {
      const generos: string[] = answers["generos"].split(' ');

      if (this.mirarGeneros(generos, answers["autor"]) !== generos.length) {
        throw new Error("¡¡¡¡¡ERROR: Géneros incorrectos!!!!!");
      }

      const album = new Album({nombre: answers["nombre"], autor: answers["autor"], 
        fechaPublicacion: answers["creacion"], generos: generos, canciones: new Coleccion<Cancion>()});

      [...this.generos].forEach((genero) => {
        album.getGeneros().forEach((generoAlbum) => {
          if (generoAlbum === genero.getNombre()) {
            genero.addAlbum(album.getNombre());
          }
        });
      });

      [...this.autores].forEach((autor) => {
        if (autor.getNombre() === album.getAutor()) {
          autor.addAlbum(album);
        }
      });
      
      this.dataBase.guardarEstructura();
      this.actualizarSearchAlbumes();
      this.añadirCancion(answers["nombre"], parseInt(answers["canciones"]) - 1, answers["autor"]);
    }).catch((error) => {
      console.log(error.message);
      setTimeout(() => {
        this.añadir();
      }, 3000);
    });
  }

  /**
   * Metodo que permite añadir Cancion a un album
   */
  private añadirCancionAlbum() {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "album",
      message: "Nombre del album:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchAlbumes, input),
    },
    {
      name: "canciones",
      message: "Cantidad de canciones del album:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "La cantidad debe ser un número";
        }
        if (parseInt(value) <= 0) {
          return "La cantidad mínima es 1";
        }
        return true;
      },
    }]).then((answers) => {
      let autor: string = "";

      [...this.autores].forEach((autorGenero) => {
        [...autorGenero.getAlbumes()].forEach((album) => {
          if (album.getNombre() === answers["album"]) {
            autor = autorGenero.getNombre();
          }
        });
      });

      this.añadirCancion(answers["album"], parseInt(answers["canciones"]) - 1, autor);
    });
  }

  /**
   * Metodo que permite añadir una cancion a partir de un album 
   */
  private añadirCancion(nombreAlbum: string = "", cantidad: number = 0, autorAlbum: string = ""): void {
    console.clear();
    inquirer.prompt([{
      name: "nombre",
      message: "Nombre de la canción:",
    },
    {
      type: "confirm",
      name: "confirmacion",
      message: "¿Es un single?",
    },
    {
      name: "duracion",
      message: "Duracion de la canción en segundos:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "La duración debe ser un número";
        }
        return true;
      },
    },
    {
      name: "generos",
      message: "Generos de la canción:",
    },
    {
      name: "reproducciones",
      message: "Reproducciones de la canción:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "Las reproducciones deben ser un número";
        }
        return true;
      },
    }]).then((answers) => {  
      const generos: string[] = answers["generos"].split(' ');
  
      if (this.mirarGeneros(generos, autorAlbum) !== generos.length) {
        throw new Error("¡¡¡¡¡ERROR: Géneros incorrectos!!!!!");
      }
  
      const min = parseInt(answers["duracion"]) / 60 << 0;
      const seg = parseInt(answers["duracion"]) % 60;
      
      const cancion = new Cancion({nombre: answers["nombre"], autor: autorAlbum, 
        duracion: {min: min, seg: seg}, generos: generos, single: answers["confirmacion"], reproducciones: parseInt(answers["reproducciones"])});
  
      [...this.generos].forEach((genero) => {
        cancion.getGeneros().forEach((generoCancion) => {
          if (generoCancion === genero.getNombre()) {
            genero.addCancion(cancion.getNombre());
          }
        });
      });

      [...this.autores].forEach((autor) => {
        if (autor.getNombre() === cancion.getAutor()) {
          autor.addCancion(cancion);  
          [...autor.getAlbumes()].forEach((album) => {
            if (album.getNombre() === nombreAlbum) {
              album.addCancion(cancion);
            }
          });
        }
      });
      
      this.dataBase.guardarEstructura();
      this.actualizarSearchCanciones();
      if (cantidad) {
        this.añadirCancion(nombreAlbum, cantidad - 1, autorAlbum);
      } else {
        this.añadir();
      }
    }).catch((error) => {
      console.log(error.message);
      setTimeout(() => {
        this.añadir();
      }, 3000);
    });
  }
  
  /**
   * Metodo que permite visualizar la información básica
   */
  private visualizarLista(): void {
    console.clear();
    inquirer.prompt([{  
      type: "autocomplete",
      name: "autor",
      message: "¿Qué Artistas o Grupos desea visualizar?",
      source: (answersSoFar: any, input: string) => this.searchStates([...this.searchArtistas, ...this.searchGrupos], input),
    }, 
    {
      type: "list",
      name: "opcion",
      message: "¿Qué desea ver del autor seleccionado?",
      choices: ["Albumes", "Canciones", "Playlists", "Salir"],
    }]).then((answers) => {
      switch (answers["opcion"]) {
        case "Albumes":
          this.visualizarAlbumes(answers["autor"]);
          break;
        case "Canciones":
          this.visualizarCanciones(answers["autor"]);
          break;
        case "Playlists":
          this.visualizarPlaylist(answers["autor"]);
          break;
        case "Salir":
          this.run();
          break;
      }
    });
  }

  /**
   * Metodo que permite salir de la zona de visualización
   */
  private visualizarSalir(): void {
    inquirer.prompt([{
      type: "confirm",
      name: "confirmacion",
      message: "¿Desea seguir filtrando o no?",
    }]).then((answers) => {
      if (answers["confirmacion"]) {
        this.visualizarLista();
      } else {
        this.run();
      }
    });
  }

  /**
   * Metodo que permite visualizar Canciones
   * @param autor Nombre del autor
   */
  private visualizarCanciones(opcion: string): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "opciondeFiltrado",
      message: "¿Qué filtro quiere aplicar?",
      choices: ["Título", "Single", "Reproducciones", "Salir"],
      default: "Titulo",
    }]).then((answers) => {
      switch (answers["opciondeFiltrado"]) {
        case "Título":
          this.filtradoTiTulo(opcion, visualizarEnum.canciones);
          break;
        case "Single":
          this.imprimirCanciones(this.filtrosCanciones(opcion, filterType.single));
          break;
        case "Reproducciones":
          this.filtradoReproducciones(opcion);
          break;
        case "Salir":
          this.visualizarLista();
          break;
      }
    });
  }

  /**
   * Metodo que permite visualizar la información de albumes
   * @param opcion nombre del autor
   */
  private visualizarAlbumes(opcion: string): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "opciondeFiltrado",
      message: "¿Qué filtro quiere aplicar?",
      choices: ["Titulo", "Año Lanzamiento", "Reproducciones Totales", "Salir"],
      default: "Titulo",
    }]).then((answers) => {
      switch (answers["opciondeFiltrado"]) {
        case "Titulo":
          this.filtradoTiTulo(opcion, visualizarEnum.albumes);
          break;
        case "Año Lanzamiento":
          this.fechaPublicacion(opcion);
          break; 
        case "Reproducciones Totales":
          this.filtradoReproduccionesTotales(opcion, visualizarEnum.albumes);
          break;
        case "Salir":
          this.visualizarLista();
          break;
      }
    });
  }

  /**
   * Metodo que permite visualizar una Playlist
   * @param opcion Nombre del autor
   */
  private visualizarPlaylist(opcion: string): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "opciondeFiltrado",
      message: "¿Qué filtro quiere aplicar?",
      choices: ["Titulo", "Reproducciones Totales", "Salir"],
      default: "Titulo",
    }]).then((answers) => {
      switch (answers["opciondeFiltrado"]) {
        case "Titulo":
          this.filtradoTiTulo(opcion, visualizarEnum.playList);
          break;
        case "Reproducciones Totales":
          this.filtradoReproduccionesTotales(opcion, visualizarEnum.playList);
          break;
        case "Salir":
          this.visualizarLista();
          break;
      }
    });
  }

  /**
   * Metodo que filtra segun el titulo
   * @param opcion Nombre del autor
   * @param tipo si es un album, una canción o una playlist
   */
  private filtradoTiTulo(opcion: string, tipo:number): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "filtroTitulo",
      message: "Eliga una opción:",
      choices: ["ASC", "DESC", "Salir"],
      default: "ASC",
    }]).then((answers) => {
      switch (answers["filtroTitulo"]) {
        case "ASC":
          if (tipo === visualizarEnum.canciones) {
            this.imprimirCanciones(this.filtrosCanciones(opcion, filterType.titulo));
          } else if (tipo === visualizarEnum.albumes) {
            this.imprimirAlbumes(this.filtrosAlbumes(opcion, filterType.titulo));
          } else if (tipo === visualizarEnum.playList) {
            this.imprimirPlaylist(this.filtrosPlayList(opcion, filterType.titulo));
          }
          break;
        case "DESC":
          if (tipo === visualizarEnum.canciones) {
            this.imprimirCanciones(this.filtrosCanciones(opcion, filterType.titulo).reverse());
          } else if (tipo === visualizarEnum.albumes) {
            this.imprimirAlbumes(this.filtrosAlbumes(opcion, filterType.titulo).reverse());
          } else if (tipo === visualizarEnum.playList) {
            this.imprimirPlaylist(this.filtrosPlayList(opcion, filterType.titulo).reverse());
          }
          break;
        case "Salir":
          this.visualizarLista();
          break;
      }
    });
  }

  /**
   * Metodo que permite filtrar por Reproduciones
   * @param opcion Nombre del autor
   */
  private filtradoReproducciones(opcion: string): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "filtroReproduciones",
      message: "Eliga una opción:",
      choices: ["ASC", "DESC", "Salir"],
      default: "ASC",
    }]).then((answers) => {
      let reproducciones: string[] = [];
      const nombre: string[] = [];

      if (answers["filtroReproduciones"] !== "Salir") {
        if (answers["filtroReproduciones"] === "ASC") {
          reproducciones = this.filtrosCanciones(opcion, filterType.reproducciones);
        } else {
          reproducciones = this.filtrosCanciones(opcion, filterType.reproducciones).reverse();
        }
        [...reproducciones].forEach((element) => {
          [...this.autores].forEach((autor) => {
            if (autor.getNombre() === opcion) {
              [...autor.getCanciones()].forEach((cancion) => {
                if (cancion.getReproducciones() === +element) {
                  nombre.push(cancion.getNombre());
                }
              });
            }
          });
        });
        this.imprimirCanciones([...new Set(nombre)]);
      } else {
        this.visualizarLista();
      }
    });
  }

  /**
   * Metodo que filtra por las reproducciones.
   * @param opcion Nombre del autor
   * @param tipo si es un album o una playlist
   */

  private filtradoReproduccionesTotales(opcion: string, tipo:number): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "filtroReproducionesTotales",
      message: "Eliga una opción:",
      choices: ["ASC", "DESC", "Salir"],
      default: "ASC",
    }]).then((answers) => {
      let reproducciones: string[] = [];
      const nombre: string[] = [];

      if (answers["filtroReproducionesTotales"] === "ASC" && tipo === visualizarEnum.albumes) {
        reproducciones = this.filtrosAlbumes(opcion, filterType.reproducciones);
      } else if (answers["filtroReproducionesTotales"] === "DESC" && tipo === visualizarEnum.albumes) {
        reproducciones = this.filtrosAlbumes(opcion, filterType.reproducciones).reverse();
      } else if (answers["filtroReproducionesTotales"] === "ASC" && tipo === visualizarEnum.playList) {
        reproducciones = this.filtrosPlayList(opcion, filterType.reproducciones);
      } else if (answers["filtroReproducionesTotales"] === "DESC" && tipo === visualizarEnum.playList) {
        reproducciones = this.filtrosPlayList(opcion, filterType.reproducciones).reverse();
      }

      if (answers["filtroReproducionesTotales"] !== "Salir" && tipo === visualizarEnum.albumes) {
        [...reproducciones].forEach((element) => {
          [...this.autores].forEach((autor) => {
            if (autor.getNombre() === opcion) {
              [...autor.getAlbumes()].forEach((album) => {
                if (album.calcularReproduccionesTotales() === +element) {
                  nombre.push(album.getNombre());
                }
              });
            }
          });
        });
        this.imprimirAlbumes([...new Set(nombre)]);
      } else if (answers["filtroReproducionesTotales"] !== "Salir" && tipo === visualizarEnum.playList) {
        [...reproducciones].forEach((element) => {
          [...this.playList].forEach((play) => {
            [...play.getCanciones()].forEach((cancion) => {
              if (cancion.getAutor() === opcion && play.calcularReproduccionesTotales() === +element) {
                nombre.push(play.getNombre());
              }
            });
          });
        });
        this.imprimirPlaylist([...new Set(nombre)]);
      } else {
        this.visualizarLista();
      }
    });
  }

  /**
   * Metodo que permite aplicar filtro a la canciones
   * @param opcion Nombre del autor
   * @param value tipo de filtro
   */
  private filtrosCanciones(opcion: string, value: number): string[] {
    const aux: string[] = [];
    [...this.autores].forEach((autor) => {
      if (autor.getNombre() === opcion) {
        [...autor.getCanciones()].forEach((cancion) => {
          if (value === filterType.titulo) {
            aux.push(cancion.getNombre());
          }
          if (value === filterType.single && cancion.getSingle()) {
            aux.push(cancion.getNombre());
          }
          if (value === filterType.reproducciones) {
            aux.push(String(cancion.getReproducciones()));
          }
        });
      }
    });
    if (value === filterType.reproducciones) {
      return this.ordenar([...new Set(aux)]);
    } else {
      return [...new Set(aux)].sort();
    }
  }

  /**
   * Metodo que ordena un array
   * @param numeros numeros a ordenar
   * @returns numeros ordenados
   */
  private ordenar(numeros: string[]): string[] {
    let aux: string;
    for (let i = 0; i < numeros.length; i++) {
      for (let j = i + 1; j < numeros.length; j++) {
        if (Number(numeros[i]) > Number(numeros[j])) {
          aux = numeros[i];
          numeros[i] = numeros[j];
          numeros[j] = aux;
        }
      }
    }
    
    return numeros;
  }

  /**
   * Metodo que permite aplicar filtro a la los albumes
   * @param opcion Nombre del autor
   * @param tipo tipo de filtro
   */
  private filtrosAlbumes(opcion:string, value: number): string[] {  
    const aux: string[] = [];
    [...this.autores].forEach((autor) => {
      if (autor.getNombre() === opcion) {
        [...autor.getAlbumes()].forEach((album) => {
          if (value === filterType.titulo) {
            aux.push(album.getNombre());
          }
          if (value === filterType.fechaPublicacion) {
            aux.push(String(album.getFechaPublicacion()));
          }
          if (value === filterType.reproducciones) {
            aux.push(String(album.calcularReproduccionesTotales()));
          }
        });
      }
    });
    if (value !== filterType.titulo) {
      return this.ordenar([...new Set(aux)]);
    } else {
      return [...new Set(aux)].sort();
    }
  }

  /**
   * Metodo que filtra playlists
   * @param opcion nombre del autor
   * @param value si son reproducciones o titulo
   * @returns 
   */
  private filtrosPlayList(opcion:string, value: number): string[] {  
    const aux: string[] = [];
    [...this.playList].forEach((play) => {
      [...play.getCanciones()].forEach((cancion) => {
        if (cancion.getAutor() === opcion) {
          if (value === filterType.titulo) {
            aux.push(play.getNombre());
          }
          if (value === filterType.reproducciones) {
            aux.push(String(play.calcularReproduccionesTotales()));
          }
        }
      });
    });
    if (value === filterType.reproducciones) {
      return this.ordenar([...new Set(aux)]);
    } else {
      return [...new Set(aux)].sort();
    }
  }


  /**
   * Metodo que permite aplicar filtro por fecha de publicacion
   * @param opcion Nombre del autor
   */
  private fechaPublicacion(opcion: any): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "fechaPublicacion",
      message: "Eliga una opción:",
      choices: ["ASC", "DESC", "Salir"],
      default: "ASC",
    }]).then((answers) => {
      let publicaciones: string[] = [];
      const nombre: string[] = [];

      if (answers["fechaPublicacion"] !== "Salir") {
        if (answers["fechaPublicacion"] === "ASC") {
          publicaciones = this.filtrosAlbumes(opcion, filterType.fechaPublicacion);
        } else {
          publicaciones = this.filtrosAlbumes(opcion, filterType.fechaPublicacion).reverse();
        }
        [...publicaciones].forEach((element) => {
          [...this.autores].forEach((autor) => {
            if (autor.getNombre() === opcion) {
              [...autor.getAlbumes()].forEach((album) => {
                if (album.getFechaPublicacion() === +element) {
                  nombre.push(album.getNombre());
                }
              });
            }
          });
        });
        this.imprimirAlbumes([...new Set(nombre)]);
      } else {
        this.visualizarLista();
      }
    });
  }

  /**
   * Metodo que permite imprimir canciones
   * @param aux array de canciones
   * @param value nos indica el tipo de visualizacion
   */
  private imprimirCanciones(aux: string[], value:boolean = true): void {
    let print;
    let primeraVez: boolean = false;
    if (aux.length === 0) {
      console.log("No hay canciones disponibles con los requisitos especificados");
    } else {
      aux.forEach((cancion) => {
        [...this.autores].forEach((autor) => {
          [...autor.getCanciones()].forEach((cancionGenero) => {
            if (cancion === cancionGenero.getNombre() && !primeraVez) {
              print = new PrintCancion(cancionGenero);
              print.print();
              primeraVez = true;
            }
          });
        });
        primeraVez = false;
      });
    }
    if (value) {
      this.visualizarSalir();
    } else {
      this.visualizarAvanzadoSalir(avanzadaPlaylist.playListInfoAvanzada);
    }
  }

  /**
   * Metodo que impre la informacion de los albumes
   * @param aux nombre de los albumes
   */
  private imprimirAlbumes(aux: string[]): void {
    let print;
    let primeraVez: boolean = false;
    if (aux.length === 0) {
      console.log("No hay albumes disponibles con los requisitos especificados");
    } else {
      aux.forEach((cancion) => {
        [...this.autores].forEach((autor) => {
          [...autor.getAlbumes()].forEach((albumGenero) => {
            if (cancion === albumGenero.getNombre() && !primeraVez) {
              print = new PrintAlbum(albumGenero);
              primeraVez = true;
              print.print();
            }
          });
        });
        primeraVez = false;
      });
    }
    this.visualizarSalir();
  }

  /**
   * Metodo que permite imprimir las playlist
   * @param aux array de playlist
   */
  private imprimirPlaylist(aux: string[]): void {
    let print;
    let primeraVez: boolean = false;
    if (aux.length === 0) {
      console.log("No hay playlists disponibles con los requisitos especificados");
    } else {
      aux.forEach((elemento) => {
        [...this.playList].forEach((playlist) => {
          if (elemento === playlist.getNombre() && !primeraVez) {
            print = new PrintPlayList(playlist);
            primeraVez = true;
            print.print();
          }
        });
        primeraVez = false;
      });
    }
    this.visualizarSalir();
  }

  /**
   * Metodo que inicia el modo playlists avanzadas.
   */
  private inicioPlayList(): void {
    console.clear();
    inquirer.prompt([{
      name: "nombre",
      message: "Nombre de usuario:",
      validate: (value: any) => {
        if (value === "SYSTEM") {
          return "Ese nombre está reservado, pruebe con otro!!!";
        }
        return true;
      },
    }]).then((answers) => {  
      this.usuarioNick = answers["nombre"];
      this.gestionAvanzadaPlayList();
    });
  }

  /**
   * Metodo que permite gestionar las playlist
   */
  private gestionAvanzadaPlayList(): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "opcion",
      message: "Eliga una opción:",
      choices: ["Informarción básica de una playlist", "Información avanzada de una playlist", "Gestionar playlist", "Salir"],
    }]).then((answers) => {
      switch (answers["opcion"]) {
        case "Informarción básica de una playlist":
          this.playListInfoBasica();
          break;
        case "Información avanzada de una playlist":
          this.playListInfoAvanzada();
          break;
        case "Gestionar playlist":
          this.playListGestion();
          break;
        case "Salir":
          this.usuarioNick = "";
          this.run();
          break;
      }
    });
  }

  /**
   * Metodo que permite gestionar la informacion básica de una playlist
   */
  private playListInfoBasica() {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "opcion",
      message: "Que playlist desea ver:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchPlayList, input),
    }]).then((answers) => {
      if (answers["opcion"] !== "Salir") {
        [...this.playList].forEach((playlist) => {
          if (playlist.getNombre() === answers["opcion"]) {
            console.log(`Nombre: ${playlist.getNombre()}`);
            console.log(`Generos: ${playlist.getGeneros().join(', ')}`);
            console.log(`Duración: ${playlist.getDuracion().hor}h ${playlist.getDuracion().min}min`);
          }
        });
            
        this.visualizarAvanzadoSalir(avanzadaPlaylist.playListInfoBasica);
      } else {
        this.gestionAvanzadaPlayList();
      }
    });
  }

  /**
   * Metodo que permite gestionar la informacion avanzada de una playlist
   * y seleccionar que filtro desea aplicar el ususario
   */
  private playListInfoAvanzada() {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "opcion",
      message: "Que playlist desea navegar",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchPlayList, input),
    },
    {
      type: "list",
      name: "filtro",
      message: "Que filtro desea aplicar a las canciones:",
      choices: ["Titulo", "Artista/Grupo", "Año de Lanzamiento", "duracion", "Genero", "Reproducciones", "Salir"],

    }]).then((answers) => {
      switch (answers["filtro"]) {
        case "Titulo":
          this.filtradoAvanzadoTiTulo(answers["opcion"]);
          break;
        case "Artista/Grupo":
          this.filtradoAvanzadoArtistaGrupo(answers["opcion"]);
          break;
        case "Año de Lanzamiento":
          this.filtradoAvanzadoLanzamiento(answers["opcion"]);
          break;
        case "duracion":
          this.filtradoAvanzadoDuracion(answers["opcion"]);
          break;
        case "Genero":
          this.filtradoAvanzadoGenero(answers["opcion"]);
          break;
        case "Reproducciones":
          this.filtradoAvanzadoReproducciones(answers["opcion"]);
          break;
        case "Salir":
          this.gestionAvanzadaPlayList();
          break;
      }
    });
  }

  /**
   * Metodo que permite aplicar filtro de titulo a las canciones de una playlist
   * @param opcion nombre de la playlist
   */
  private filtradoAvanzadoTiTulo(opcion: string): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "filtroTitulo",
      message: "Eliga una opción:",
      choices: ["ASC", "DESC", "Salir"],
      default: "ASC",
    }]).then((answers) => {
      switch (answers["filtroTitulo"]) {
        case "ASC":
          this.imprimirCanciones(this.filtrosAvanzadoPlayList(opcion, filterType.titulo), false);
          break;
        case "DESC":
          this.imprimirCanciones(this.filtrosAvanzadoPlayList(opcion, filterType.titulo).reverse(), false);
          break;
        case "Salir":
          this.visualizarAvanzadoSalir(avanzadaPlaylist.playListInfoAvanzada);
          break;
      }
    });
  }

  /**
   * Metodo que permite aplicar filtro de artista/grupo a las canciones de una playlist
   * @param opcion nombre de la playlist
   */
  private filtradoAvanzadoArtistaGrupo(opcion: string): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "filtroArtistaGrupo",
      message: "Eliga una opción:",
      choices: ["ASC", "DESC", "Salir"],
    }]).then((answers) => {
      let artistaGrupos: string[] = [];
      const nombreCancion: string[] = [];
      if (answers["filtroArtistaGrupo"] !== "Salir") {
        if (answers["filtroArtistaGrupo"] === "ASC") {
          artistaGrupos = this.filtrosAvanzadoPlayList(opcion, filterType.nombreGrupoArtista);
        } else {
          artistaGrupos = this.filtrosAvanzadoPlayList(opcion, filterType.nombreGrupoArtista).reverse();
        }
        [...artistaGrupos].forEach((elemento) => {
          [...this.playList].forEach((playlist) => {
            if (playlist.getNombre() === opcion) {
              [...playlist.getCanciones()].forEach((cancion) => {
                if (cancion.getAutor() === elemento) {
                  nombreCancion.push(cancion.getNombre());
                }
              });
            }
          });
        });
        this.imprimirCanciones(nombreCancion, false);
      } else {
        this.visualizarAvanzadoSalir(avanzadaPlaylist.playListInfoAvanzada);
      }
    });
  }

  /**
   * Metodo que permite aplicar filtro de fecha de publicacion a las canciones de una playlist
   * @param opcion nombre de la playlist
   */
  private filtradoAvanzadoLanzamiento(opcion: string): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "filtroLanzamiento",
      message: "Eliga una opción:",
      choices: ["ASC", "DESC", "Salir"],
    }]).then((answers) => {
      let fechaspublicacion: string[] = [];
      const nombreCancion: string[] = [];
      if (answers["filtroLanzamiento"] !== "Salir") {
        if (answers["filtroLanzamiento"] === "ASC") {
          fechaspublicacion = this.filtrosAvanzadoPlayList(opcion, filterType.fechaPublicacion);
        } else {
          fechaspublicacion = this.filtrosAvanzadoPlayList(opcion, filterType.fechaPublicacion).reverse();
        }
        const canciones: string[] = [];
        [...this.playList].forEach((playlist) => {
          if (playlist.getNombre() === opcion) {
            [...playlist.getCanciones()].forEach((cancion) => {
              canciones.push(cancion.getNombre());
            });
          }
        });
        [...fechaspublicacion].forEach((elemento) => {
          [...this.autores].forEach((autor) => {
            [...autor.getAlbumes()].forEach((album) => {
              [...album.getCanciones()].forEach((cancion) => {
                if (String(album.getFechaPublicacion()) === elemento && canciones.includes(cancion.getNombre()) && !nombreCancion.includes(cancion.getNombre())) {
                  nombreCancion.push(cancion.getNombre());
                  this.dataBase.guardarEstructura();
                }
              });
            });
          });
        });
        this.imprimirCanciones(nombreCancion, false);
      } else {
        this.visualizarAvanzadoSalir(avanzadaPlaylist.playListInfoAvanzada);
      }
    });
  }


  /**
   * Metodo que permite aplicar filtro de duracion a las canciones de una playlist
   * @param opcion nombre de la playlist
   */
  private filtradoAvanzadoDuracion(opcion: string): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "filtroDuracion",
      message: "Eliga una opción:",
      choices: ["ASC", "DESC", "Salir"],
    }]).then((answers) => {
      let tiempoTotal: string[] = [];
      const nombreCancion: string[] = [];
      if (answers["filtroDuracion"] !== "Salir") {
        if (answers["filtroDuracion"] === "ASC") {
          tiempoTotal = this.filtrosAvanzadoPlayList(opcion, filterType.duracion);
        } else {
          tiempoTotal = this.filtrosAvanzadoPlayList(opcion, filterType.duracion).reverse();
        }
        [...tiempoTotal].forEach((elemento) => {
          [...this.playList].forEach((playlist) => {
            if (playlist.getNombre() === opcion) {
              [...playlist.getCanciones()].forEach((cancion) => {
                if (cancion.devolverTiempoTotal() === elemento) {
                  nombreCancion.push(cancion.getNombre());
                }
              });
            }
          });
        });
        this.imprimirCanciones(nombreCancion, false);
      } else {
        this.visualizarAvanzadoSalir(avanzadaPlaylist.playListInfoAvanzada);
      }
    });
  }


  /**
   * Metodo que permite aplicar filtro de genero a las canciones de una playlist
   * @param opcion nombre de la playlist
   */
  private filtradoAvanzadoGenero(opcion: string): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "filtroGenero",
      message: "Eliga una opción:",
      choices: ["ASC", "DESC", "Salir"],
    }]).then((answers) => {
      let generos: string[] = [];
      const nombreCancion: string[] = [];
      if (answers["filtroGenero"] !== "Salir") {
        if (answers["filtroGenero"] === "ASC") {
          generos = this.filtrosAvanzadoPlayList(opcion, filterType.genero);
        } else {
          generos = this.filtrosAvanzadoPlayList(opcion, filterType.genero).reverse();
        }
        [...generos].forEach((elemento) => {
          [...this.playList].forEach((playlist) => {
            if (playlist.getNombre() === opcion) {
              [...playlist.getCanciones()].forEach((cancion) => {
                if (cancion.getGeneros()[0] === elemento) {
                  nombreCancion.push(cancion.getNombre());
                }
              });
            }
          });
        });
        this.imprimirCanciones(nombreCancion, false);
      } else {
        this.visualizarAvanzadoSalir(avanzadaPlaylist.playListInfoAvanzada);
      }
    });
  }


  /**
   * Metodo que permite aplicar filtro de reproducciones a las canciones de una playlist
   * @param opcion nombre de la playlist
   */
  private filtradoAvanzadoReproducciones(opcion: string): void {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "filtroReproducciones",
      message: "Eliga una opción:",
      choices: ["ASC", "DESC", "Salir"],
    }]).then((answers) => {
      let reproducciones: string[] = [];
      const nombreCancion: string[] = [];
      if (answers["filtroReproducciones"] !== "Salir") {
        if (answers["filtroReproducciones"] === "ASC") {
          reproducciones = this.filtrosAvanzadoPlayList(opcion, filterType.reproducciones);
        } else {
          reproducciones = this.filtrosAvanzadoPlayList(opcion, filterType.reproducciones).reverse();
        }
        [...reproducciones].forEach((elemento) => {
          [...this.playList].forEach((playlist) => {
            if (playlist.getNombre() === opcion) {
              [...playlist.getCanciones()].forEach((cancion) => {
                if (cancion.getReproducciones() === Number(elemento)) {
                  nombreCancion.push(cancion.getNombre());
                }
              });
            }
          });
        });
        this.imprimirCanciones(nombreCancion, false);
      } else {
        this.visualizarAvanzadoSalir(avanzadaPlaylist.playListInfoAvanzada);
      }
    });
  }
  

  /**
   * Metodo que permite aplicar filtro dependiente de la opcion seleccionada
   * @param nombre nombre de la playlist
   * @param tipofiltro nombre de la playlist
   */
  private filtrosAvanzadoPlayList(nombre:string, tipoFiltro: number): string[] {  
    const aux: string[] = [];
    [...this.playList].forEach((playlist) => {
      if (playlist.getNombre() === nombre) {
        [...playlist.getCanciones()].forEach((cancion) => {
          switch (tipoFiltro) {
            case filterType.titulo:
              aux.push(cancion.getNombre());
              break;
            case filterType.nombreGrupoArtista:
              aux.push(cancion.getAutor());
              break;
            case filterType.fechaPublicacion:
              let primeraVez: boolean = true;
              const nombreAux = cancion.getNombre();
              [...this.autores].forEach((autor) => {
                [...autor.getAlbumes()].forEach((album) => {
                  [...album.getCanciones()].forEach((cancion) => {
                    if (cancion.getNombre() === nombreAux && primeraVez) {
                      aux.push(String(album.getFechaPublicacion()));
                      primeraVez = false;
                    }
                  });
                });
              });
              primeraVez = false;
              break;
            case filterType.duracion:
              aux.push(String(cancion.devolverTiempoTotal()));
              break;
            case filterType.genero:
              aux.push(cancion.getGeneros()[0]);
              break;
            case filterType.reproducciones:
              aux.push(String(cancion.getReproducciones()));
              break;
          }
        });
      }
    });
    if (tipoFiltro === filterType.reproducciones || tipoFiltro === filterType.fechaPublicacion || tipoFiltro === filterType.duracion) {
      return this.ordenar([...new Set(aux)]);
    } else {
      return [...new Set(aux)].sort();
    }
  }


  /**
   * Metodo que permite salir de la opcion de filtrado avanzado
   * @param opcion tipo de salida en la interfaz
   */
  private visualizarAvanzadoSalir(opcion: number): void {
    inquirer.prompt([{
      type: "confirm",
      name: "confirmacion",
      message: "¿Desea continuar?",
    }]).then((answers) => {
      if (answers["confirmacion"]) {
        switch (opcion) {
          case avanzadaPlaylist.playListInfoBasica:
            this.playListInfoBasica();
            break;
          case avanzadaPlaylist.playListInfoAvanzada:
            this.playListInfoAvanzada();
        }
      } else {
        this.gestionAvanzadaPlayList();
      }
    });
  }

  /**
   * Metodo que permite la gestion de las playlists
   */
  private playListGestion() {
    console.clear();
    inquirer.prompt([{
      type: "list",
      name: "comando",
      message: "¿Qué desea hacer?",
      choices: ["Crear una playlist a partir de otra", "Crear una playlist desde 0", "Modificar una playlist", "Eliminar una playlist", "Salir"],
    }]).then((answers) => {
      switch (answers["comando"]) {
        case "Crear una playlist a partir de otra":
          this.crearPlayListExistente();
          break;
        case "Crear una playlist desde 0":
          this.crearPlayListDesde0();
          break;
        case "Modificar una playlist":
          this.gestionModificarPlayList();
          break;
        case "Eliminar una playlist":
          this.borrarPlayList();
          break;
        case "Salir":
          this.gestionAvanzadaPlayList();
          break;
      }
    });
  }
  
  /**
   * Metodo que permite crear una playlist a partir de una existente
   */
  private crearPlayListExistente() {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Seleccione la playlist de la que partir:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchPlayList, input),
    },
    {
      name: "nuevoNombre",
      message: "Nombre de la nueva playlist:",
    },
    {
      name: "cantidadCanciones",
      message: "¿Cuántas canciones quiere añadir?:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "La cantidad debe ser un número";
        }
        return true;
      },
    }]).then((answers) => {
      if (this.searchPlayList.indexOf(answers["nuevoNombre"]) !== -1) {
        throw new Error("Ya existe una playlist con ese nombre");
      }

      const play: PlayList = new PlayList({nombre: "", canciones: new Coleccion(), duracion: {hor: 0, min: 0}, generos: [], creador: ""});

      [...this.playList].forEach((playlist) => {
        if (answers["nombre"] === playlist.getNombre()) {
          play.setCanciones(playlist.getCanciones());
          play.setDuracion(playlist.getDuracion());
          play.setCreador(this.usuarioNick);
          play.setNombre(answers["nuevoNombre"]);
        }
      });
      
      this.playList.addElemento(play);
      this.actualizarSearchPlalist();

      this.añadirCancionPlayList(play.getNombre(), parseInt(answers["cantidadCanciones"]) - 1);
    }).catch((error) => {
      console.log(error.message);
      setTimeout(() => {
        this.playListGestion();
      }, 3000);
    });
  }

  /**
   * Metodo que crea una playlist desde 0.
   */
  private crearPlayListDesde0() {
    console.clear();
    inquirer.prompt([{
      name: "nuevoNombre",
      message: "Nombre de la nueva playlist:",
    },
    {
      name: "cantidadCanciones",
      message: "¿Cuántas canciones quiere añadir?:",
      validate: (value: any) => {
        const regex: RegExp = /^[0-9]*$/;
        if (!regex.test(value)) {
          return "La cantidad debe ser un número";
        }
        return true;
      },
    }]).then((answers) => {
      if (this.searchPlayList.indexOf(answers["nuevoNombre"]) !== -1) {
        throw new Error("Ya existe una playlist con ese nombre");
      }

      const play: PlayList = new PlayList({nombre: answers["nuevoNombre"], canciones: new Coleccion(), duracion: {hor: 0, min: 0}, generos: [], creador: this.usuarioNick});
      
      this.playList.addElemento(play);
      this.actualizarSearchPlalist();

      this.añadirCancionPlayList(play.getNombre(), parseInt(answers["cantidadCanciones"]) - 1);
    }).catch((error) => {
      console.log(error.message);
      setTimeout(() => {
        this.playListGestion();
      }, 3000);
    });
  }

  /**
   * Metodo que borra una playlist
   */
  private borrarPlayList() {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Nombre de la playlist:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchPlayList, input),
    }]).then((answers) => {
      [...this.playList].forEach((playlist) => {
        if (answers["nombre"] === playlist.getNombre()) {
          if (this.usuarioNick === playlist.getCreador()) {
            this.playList.removeElemento(answers["nombre"]);
          } else {
            throw new Error("No tiene permisos para eliminar esta playlist");
          }
        }
      });
      
      this.dataBase.guardarPlayList();
      this.actualizarSearchPlalist();
      this.playListGestion();
    }).catch((error) => {
      console.log(error.message);
      setTimeout(() => {
        this.playListGestion();
      }, 3000);
    });
  }


  /**
   * Meotodo que modifica las playlists
   * @param nombre nombre de la playlist
   */
  private gestionModificarPlayList() {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Nombre de la playlist:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchPlayList, input),
    },
    {
      type: "list",
      name: "comando",
      message: "¿Qué desea hacer?",
      choices: ["Cambiar nombre", "Eliminar canción", "Añadir canción", "Salir"],
    }]).then((answers) => {
      switch (answers["comando"]) {
        case "Cambiar nombre":
          this.modificarNombrePlayList(answers["nombre"]);
          break;
        case "Eliminar canción":
          this.eliminarCancionPlayList(answers["nombre"]);
          break;
        case "Añadir canción":
          this.añadirCancionPlayList(answers["nombre"]);
          break;
        case "Salir":
          this.playListGestion();
          break;
      }
    });
  }
  
  /**
   * Metodo que modifica el nombre de una playlist
   * @param nombre Nombre de la playlist
   */
  private modificarNombrePlayList(nombre: string) {
    console.clear();
    inquirer.prompt([{
      name: "nombreNuevo",
      message: "Nuevo nombre de la playlist:",
    }]).then((answers) => {
      [...this.playList].forEach((playlist) => {
        if (nombre === playlist.getNombre()) {
          if (this.usuarioNick !== playlist.getCreador()) {
            throw new Error("No tiene permisos para modificar esta playlist");
          } else {
            playlist.setNombre(answers["nombreNuevo"]);
          }
        }
      });

      this.dataBase.guardarPlayList();
      this.actualizarSearchPlalist();
      this.playListGestion();
    }).catch((error) => {
      console.log(error.message);
      setTimeout(() => {
        this.playListGestion();
      }, 3000);
    });
  }

  /**
   * Metodo que elimina una cancion de una playlist
   * @param nombre nombre de la playlist
   */
  private eliminarCancionPlayList(nombre: string) {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Nombre del canción a elimianr:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchCancionesPlaylist(nombre), input),
    }]).then((answers) => {
      [...this.playList].forEach((playlist) => {
        if (nombre === playlist.getNombre()) {
          if (this.usuarioNick !== playlist.getCreador()) {
            throw new Error("No tiene permisos para modificar esta playlist");
          } else {
            playlist.eliminarCancion(answers["nombre"]);
          }
        }
      });
      
      this.dataBase.guardarPlayList();
      this.playListGestion();
    }).catch((error) => {
      console.log(error.message);
      setTimeout(() => {
        this.playListGestion();
      }, 3000);
    });
  }

  /**
   * Metodo que añade canciones a una playlist
   * @param nombre Nombre de la playlist
   * @param contador cantidad de canciones a añadir
   */
  private añadirCancionPlayList(nombre: string, contador: number = 0) {
    console.clear();
    inquirer.prompt([{
      type: "autocomplete",
      name: "nombre",
      message: "Nombre del canción a añadir:",
      source: (answersSoFar: any, input: string) => this.searchStates(this.searchCanciones.filter((elemento) => this.searchCancionesPlaylist(nombre).indexOf(elemento) === -1), input),
    }]).then((answers) => {
      let primeraVez = false;
      [...this.playList].forEach((playlist) => {
        if (playlist.getNombre() === nombre) {
          if (this.usuarioNick !== playlist.getCreador()) {
            throw new Error("No tiene permisos para modificar esta playlist");
          } else {
            [...this.autores].forEach((autor) => {
              [...autor.getCanciones()].forEach((cancion) => {
                if (cancion.getNombre() === answers["nombre"] && !primeraVez) {
                  playlist.addCancion(cancion);
                  primeraVez = true;
                }
              });
            });
          }
        }
      });
      if (contador > 0) {
        this.añadirCancionPlayList(nombre, contador - 1);
      } else {
        this.dataBase.guardarPlayList();
        this.playListGestion();
      }
    }).catch((error) => {
      console.log(error.message);
      setTimeout(() => {
        this.playListGestion();
      }, 3000);
    });
  }
}
