import {Album} from "../Estructura/album";
import {Artista} from "../Estructura/artistas";
import {Cancion} from "../Estructura/cancion";
import {Coleccion} from "../Estructura/coleccionGenerica";
import {GenerosMusicales} from "../Estructura/generosMusicales";
import {Grupo} from "../Estructura/grupo";
import {PlayList} from "../Estructura/playlist";

// Autores:
/* AC/DC = Bayside y John Lennon
Pink Floyd = Stephen Malkmus y Gunna
The Beatles = George Harrison y Paul McCartney
Queen = Breach y John Lennon
Iron Maiden = Mesita y Duki */

// 5 de tipo Rock
const cancion1 = new Cancion({nombre: "Ular SciencE", autor: "Bayside", 
  duracion: {min: 2, seg: 4}, generos: ["Pop", "Rock"], single: true, reproducciones: 200});
const cancion2 = new Cancion({nombre: "Starting Over", autor: "John Lennon",
  duracion: {min: 3, seg: 40}, generos: ["Rock"], single: false, reproducciones: 10000});
const cancion3 = new Cancion({nombre: "J Smoov", autor: "Stephen Malkmus",
  duracion: {min: 2, seg: 50}, generos: ["Rock"], single: true, reproducciones: 5000});
const cancion4 = new Cancion({nombre: "P Power", autor: "Gunna", 
  duracion: {min: 2, seg: 4}, generos: ["Rock"], single: false, reproducciones: 200});
const cancion5 = new Cancion({nombre: "Jack", autor: "AC/DC",
  duracion: {min: 4, seg: 0}, generos: ["Rock", "Trap"], single: false, reproducciones: 50000});

// 5 de tipo Pop
const cancion6 = new Cancion({nombre: "Jack Rabbit", autor: "Breach", 
  duracion: {min: 2, seg: 45}, generos: ["Pop", "Drill"], single: true, reproducciones: 20500});
const cancion7 = new Cancion({nombre: "K", autor: "Iron Maiden",
  duracion: {min: 1, seg: 34}, generos: ["Pop"], single: false, reproducciones: 100});
const cancion8 = new Cancion({nombre: "M.vlopp", autor: "The Beatles",
  duracion: {min: 7, seg: 15}, generos: ["Pop"], single: true, reproducciones: 210});
const cancion9 = new Cancion({nombre: "Kali Ma", autor: "Mesita", 
  duracion: {min: 5, seg: 0}, generos: ["Pop"], single: true, reproducciones: 234000});  
const cancion10 = new Cancion({nombre: "Ndael", autor: "The Beatles",
  duracion: {min: 12, seg: 23}, generos: ["Pop", "Trap"], single: true, reproducciones: 56700});
  
// 5 de tipo Trap
const cancion11 = new Cancion({nombre: "Karate Chop", autor: "Duki", 
  duracion: {min: 1, seg: 32}, generos: ["Trap", "Metal"], single: false, reproducciones: 5460});
const cancion12 = new Cancion({nombre: "Kate", autor: "Queen",
  duracion: {min: 2, seg: 22}, generos: ["Trap"], single: false, reproducciones: 5320});
const cancion13 = new Cancion({nombre: "Pacific Rim", autor: "George Harrison",
  duracion: {min: 7, seg: 15}, generos: ["Trap"], single: true, reproducciones: 210});
const cancion14 = new Cancion({nombre: "Pack Up", autor: "Paul McCartney", 
  duracion: {min: 6, seg: 35}, generos: ["Trap"], single: true, reproducciones: 123});
const cancion15 = new Cancion({nombre: "Pacer", autor: "Pink Floyd",
  duracion: {min: 5, seg: 67}, generos: ["Pop", "Trap"], single: true, reproducciones: 1245});

// 5 de tipo Metal
const cancion16 = new Cancion({nombre: "LOVE", autor: "Pink Floyd", 
  duracion: {min: 1, seg: 52}, generos: ["Metal"], single: true, reproducciones: 2458});
const cancion17 = new Cancion({nombre: "L.A.", autor: "Gunna",
  duracion: {min: 3, seg: 5}, generos: ["Metal"], single: true, reproducciones: 23478});
const cancion18 = new Cancion({nombre: "La Rosa", autor: "AC/DC",
  duracion: {min: 1, seg: 15}, generos: ["Metal"], single: false, reproducciones: 2111});
const cancion19 = new Cancion({nombre: "La La", autor: "Bayside", 
  duracion: {min: 3, seg: 47}, generos: ["Metal"], single: true, reproducciones: 77650});
const cancion20 = new Cancion({nombre: "La Di Da Di", autor: "John Lennon",
  duracion: {min: 1, seg: 22}, generos: ["Metal"], single: false, reproducciones: 3456});

// 5 de tipo Drill
const cancion21 = new Cancion({nombre: "Lady Black", autor: "Queen", 
  duracion: {min: 2, seg: 29}, generos: ["Drill"], single: false, reproducciones: 220012});
const cancion22 = new Cancion({nombre: "La Turra Rica", autor: "Pink Floyd",
  duracion: {min: 3, seg: 33}, generos: ["Drill"], single: true, reproducciones: 555555});
const cancion23 = new Cancion({nombre: "R.I.C.O.", autor: "Paul McCartney",
  duracion: {min: 12, seg: 0}, generos: ["Drill"], single: true, reproducciones: 990});
const cancion24 = new Cancion({nombre: "R.A.T.S", autor: "Breach", 
  duracion: {min: 10, seg: 0}, generos: ["Drill"], single: true, reproducciones: 111000});
const cancion25 = new Cancion({nombre: "R.A.F.", autor: "Duki",
  duracion: {min: 8, seg: 11}, generos: ["Drill"], single: false, reproducciones: 2348});

// 5 de tipo K-pop
const cancion26 = new Cancion({nombre: "M", autor: "Iron Maiden", 
  duracion: {min: 3, seg: 49}, generos: ["K-pop", "Jazz"], single: false, reproducciones: 44412});
const cancion27 = new Cancion({nombre: "Mamasita Sabrosa", autor: "The Beatles",
  duracion: {min: 2, seg: 9}, generos: ["K-pop"], single: true, reproducciones: 54235});
const cancion28 = new Cancion({nombre: "So Strong", autor: "Mesita",
  duracion: {min: 11, seg: 55}, generos: ["K-pop"], single: false, reproducciones: 6565});
const cancion29 = new Cancion({nombre: "Glad To Be Gay", autor: "George Harrison", 
  duracion: {min: 10, seg: 0}, generos: ["K-pop"], single: true, reproducciones: 778900});
const cancion30 = new Cancion({nombre: "$(dollar sign)", autor: "John Lennon",
  duracion: {min: 3, seg: 0}, generos: ["K-pop"], single: false, reproducciones: 3232});

// 5 de tipo Jazz
const cancion31 = new Cancion({nombre: "M79", autor: "AC/DC", 
  duracion: {min: 1, seg: 30}, generos: ["Jazz"], single: false, reproducciones: 12});
const cancion32 = new Cancion({nombre: "Ma and Pa", autor: "Mesita",
  duracion: {min: 3, seg: 1}, generos: ["Jazz"], single: false, reproducciones: 23598});
const cancion33 = new Cancion({nombre: "S.A.D", autor: "Duki",
  duracion: {min: 1, seg: 32}, generos: ["Jazz"], single: false, reproducciones: 10});
const cancion34 = new Cancion({nombre: "Bad Tattoo", autor: "Gunna", 
  duracion: {min: 2, seg: 22}, generos: ["Jazz"], single: true, reproducciones: 777700});
const cancion35 = new Cancion({nombre: "S&M", autor: "Bayside",
  duracion: {min: 3, seg: 15}, generos: ["Jazz"], single: false, reproducciones: 1213234});

// 5 de tipo Country
const cancion36 = new Cancion({nombre: "Mamon Loco", autor: "Queen", 
  duracion: {min: 1, seg: 30}, generos: ["Country"], single: false, reproducciones: 18762});
const cancion37 = new Cancion({nombre: "No Mames Wey", autor: "John Lennon",
  duracion: {min: 2, seg: 15}, generos: ["Country"], single: false, reproducciones: 354978});
const cancion38 = new Cancion({nombre: "The Monkees", autor: "Mesita",
  duracion: {min: 2, seg: 11}, generos: ["Country"], single: false, reproducciones: 98756});
const cancion39 = new Cancion({nombre: "is the Damn Season", autor: "Breach", 
  duracion: {min: 1, seg: 20}, generos: ["Country"], single: true, reproducciones: 918273});
const cancion40 = new Cancion({nombre: "Til Kingdom Come", autor: "Stephen Malkmus",
  duracion: {min: 1, seg: 0}, generos: ["Country"], single: true, reproducciones: 2340});

// 5 de tipo Rap
const cancion41 = new Cancion({nombre: "Na na na Batman", autor: "Pink Floyd", 
  duracion: {min: 2, seg: 10}, generos: ["Rap"], single: true, reproducciones: 76244});
const cancion42 = new Cancion({nombre: "Nashii", autor: "Iron Maiden",
  duracion: {min: 3, seg: 45}, generos: ["Rap", "Country"], single: false, reproducciones: 93821});
const cancion43 = new Cancion({nombre: "U Got the Look", autor: "Bayside",
  duracion: {min: 1, seg: 2}, generos: ["Rap"], single: false, reproducciones: 75420});
const cancion44 = new Cancion({nombre: "U Get Me High", autor: "Duki", 
  duracion: {min: 5, seg: 23}, generos: ["Rap"], single: false, reproducciones: 20201});
const cancion45 = new Cancion({nombre: "U 2 Luv", autor: "Paul McCartney",
  duracion: {min: 6, seg: 30}, generos: ["Rap"], single: true, reproducciones: 11723});

// 5 de tipo Flamenco
const cancion46 = new Cancion({nombre: "S.O.S", autor: "The Beatles", 
  duracion: {min: 3, seg: 29}, generos: ["Flamenco"], single: true, reproducciones: 45334});
const cancion47 = new Cancion({nombre: "Sad Angel", autor: "AC/DC",
  duracion: {min: 1, seg: 38}, generos: ["Flamenco"], single: false, reproducciones: 93821});
const cancion48 = new Cancion({nombre: "Vacancy", autor: "Breach",
  duracion: {min: 9, seg: 2}, generos: ["Flamenco"], single: true, reproducciones: 2341});
const cancion49 = new Cancion({nombre: "V.E.N.O.M", autor: "Stephen Malkmus", 
  duracion: {min: 1, seg: 23}, generos: ["Flamenco"], single: true, reproducciones: 14567});
const cancion50 = new Cancion({nombre: "V-2 Schneider", autor: "Gunna",
  duracion: {min: 2, seg: 30}, generos: ["Flamenco"], single: false, reproducciones: 120000});

const album1 = new Album({nombre: "Hola bby", autor: "Bayside", fechaPublicacion: 2000, generos: ["Pop", "Rock", "Metal", "Jazz", "Rap"], 
  canciones: new Coleccion<Cancion>(cancion43, cancion35, cancion1, cancion19)});
const album2 = new Album({nombre: "Ahora soy peor", autor: "AC/DC", fechaPublicacion: 2060, generos: ["Rock", "Trap", "Flamenco", "Jazz", "Metal"], 
  canciones: new Coleccion<Cancion>(cancion47, cancion31, cancion18, cancion5)});
const album3 = new Album({nombre: "Mala vida", autor: "John Lennon", fechaPublicacion: 2001, generos: ["Country", "K-pop", "Metal", "Rock"], 
  canciones: new Coleccion<Cancion>(cancion37, cancion30, cancion20, cancion2)});
const album4 = new Album({nombre: "Sin City", autor: "Iron Maiden", fechaPublicacion: 1975, generos: ["Rock", "Trap", "Metal", "Jazz", "Flamenco"], 
  canciones: new Coleccion<Cancion>(cancion7, cancion26, cancion42)});
const album5 = new Album({nombre: "La calle es MALA", autor: "Mesita", fechaPublicacion: 2020, generos: ["Pop", "Jazz", "Country", "K-pop"], 
  canciones: new Coleccion<Cancion>(cancion28, cancion32, cancion38, cancion9)});
const album6 = new Album({nombre: "Tvrp House", autor: "Gunna", fechaPublicacion: 1990, generos: ["Rock", "Metal", "Jazz", "Flamenco"], 
  canciones: new Coleccion<Cancion>(cancion4, cancion50, cancion17, cancion34)});
const album7 = new Album({nombre: "Las mamis saben bien rico", autor: "Queen", fechaPublicacion: 2015, generos: ["Pop", "Drill", "Country", "Flamenco"], 
  canciones: new Coleccion<Cancion>(cancion36, cancion21, cancion12)});
const album8 = new Album({nombre: "Tvrp Housing", autor: "Duki", fechaPublicacion: 2012, generos: ["Trap", "Drill", "Metal", "Jazz", "Rap"], 
  canciones: new Coleccion<Cancion>(cancion11, cancion25, cancion33, cancion44)});
const album9 = new Album({nombre: "Amazing", autor: "Stephen Malkmus", fechaPublicacion: 2002, generos: ["Rock", "Country", "Flamenco"], 
  canciones: new Coleccion<Cancion>(cancion3, cancion40, cancion49)});
const album10 = new Album({nombre: "Alakaba", autor: "George Harrison", fechaPublicacion: 2112, generos: ["Trap", "K-pop"], 
  canciones: new Coleccion<Cancion>(cancion13, cancion29)});
const album11 = new Album({nombre: "Efimero", autor: "Paul McCartney", fechaPublicacion: 2005, generos: ["Trap", "Drill", "Rap"], 
  canciones: new Coleccion<Cancion>(cancion14, cancion23, cancion45)});
const album12 = new Album({nombre: "Arroba", autor: "Breach", fechaPublicacion: 2006, generos: ["Pop", "Drill", "Country", "Flamenco"], 
  canciones: new Coleccion<Cancion>(cancion6, cancion24, cancion39, cancion48)});
const album13 = new Album({nombre: "Deyavuu", autor: "Pink Floyd", fechaPublicacion: 2120, generos: ["Pop", "Trap", "Drill", "Metal", "Rap"], 
  canciones: new Coleccion<Cancion>(cancion41, cancion22, cancion16, cancion15)});
const album14 = new Album({nombre: "olala mama", autor: "The Beatles", fechaPublicacion: 2009, generos: ["Pop", "Trap", "K-pop", "Flamenco"], 
  canciones: new Coleccion<Cancion>(cancion8, cancion10, cancion27, cancion46)});

const artista1 = new Artista({nombre: "Bayside", grupos: ["AC/DC"], generos: ["Pop", "Rock", "Metal", "Jazz", "Rap"], 
  albumes: new Coleccion<Album>(album1), canciones: new Coleccion<Cancion>(cancion43, cancion35, cancion1, cancion19), oyentes: 500});
const artista2 = new Artista({nombre: "John Lennon", grupos: ["AC/DC", "Queen"], generos: ["Rock", "Metal", "K-pop", "Country"], 
  albumes: new Coleccion<Album>(album3), canciones: new Coleccion<Cancion>(cancion37, cancion30, cancion20, cancion2), oyentes: 12098}); // 1
const artista3 = new Artista({nombre: "Stephen Malkmus", grupos: ["Pink Floyd"], generos: ["Rock", "Country", "Flamenco"], 
  albumes: new Coleccion<Album>(album9), canciones: new Coleccion<Cancion>(cancion3, cancion40, cancion49), oyentes: 111111});
const artista4 = new Artista({nombre: "Gunna", grupos: ["Pink Floyd"], generos: ["Rock", "Metal", "Jazz", "Flamenco"], 
  albumes: new Coleccion<Album>(album6), canciones: new Coleccion<Cancion>(cancion4, cancion50, cancion17, cancion34), oyentes: 12411});
const artista5 = new Artista({nombre: "George Harrison", grupos: ["The Beatles"], generos: ["Trap", "K-pop"], 
  albumes: new Coleccion<Album>(album10), canciones: new Coleccion<Cancion>(cancion13, cancion29), oyentes: 3456});
const artista6 = new Artista({nombre: "Paul McCartney", grupos: ["The Beatles"], generos: ["Trap", "Drill", "Rap"], 
  albumes: new Coleccion<Album>(album11), canciones: new Coleccion<Cancion>(cancion14, cancion23, cancion45), oyentes: 1200});
const artista7 = new Artista({nombre: "Breach", grupos: ["Queen"], generos: ["Pop", "Drill", "Country", "Flamenco"], 
  albumes: new Coleccion<Album>(album12), canciones: new Coleccion<Cancion>(cancion6, cancion24, cancion39, cancion48), oyentes: 1234});
const artista8 = new Artista({nombre: "Mesita", grupos: ["Iron Maiden"], generos: ["Pop", "Jazz", "Country", "K-pop"], 
  albumes: new Coleccion<Album>(album5), canciones: new Coleccion<Cancion>(cancion28, cancion32, cancion38, cancion9), oyentes: 4567});
const artista9 = new Artista({nombre: "Duki", grupos: ["Iron Maiden"], generos: ["Trap", "Drill", "Metal", "Jazz", "Rap"], 
  albumes: new Coleccion<Album>(album8), canciones: new Coleccion<Cancion>(cancion11, cancion25, cancion33, cancion44), oyentes: 123}); // 2

const grupo1 = new Grupo({nombre: "AC/DC", artistas: ["Bayside", "John Lennon"], fechaCreacion: 2008, 
  generos: ["Rock", "Trap", "Metal", "Jazz", "Flamenco"], albumes: new Coleccion<Album>(album2), 
  canciones: new Coleccion<Cancion>(cancion47, cancion31, cancion18, cancion5), oyentes: 300});
const grupo2 = new Grupo({nombre: "Pink Floyd", artistas: ["Stephen Malkmus", "Gunna"], fechaCreacion: 2012, 
  generos: ["Pop", "Trap", "Drill", "Metal", "Rap"], albumes: new Coleccion<Album>(album13), 
  canciones: new Coleccion<Cancion>(cancion41, cancion22, cancion16, cancion15), oyentes: 500});
const grupo3 = new Grupo({nombre: "The Beatles", artistas: ["George Harrison", "Paul McCartney"], fechaCreacion: 2005, 
  generos: ["Pop", "Trap", "K-pop", "Flamenco"], albumes: new Coleccion<Album>(album14),
  canciones: new Coleccion<Cancion>(cancion8, cancion10, cancion27, cancion46), oyentes: 700});
const grupo4 = new Grupo({nombre: "Queen", artistas: ["John Lennon", "Breach"], fechaCreacion: 1865, 
  generos: ["Trap", "Drill", "Country"], albumes: new Coleccion<Album>(album7), canciones: new Coleccion<Cancion>(cancion36, cancion21, cancion12), oyentes: 900});
const grupo5 = new Grupo({nombre: "Iron Maiden", artistas: ["Mesita", "Duki"], fechaCreacion: 2060,
  generos: ["Pop", "Jazz", "K-pop", "Rap", "Country"], albumes: new Coleccion<Album>(album4),
  canciones: new Coleccion<Cancion>(cancion7, cancion26, cancion42), oyentes: 1100});

const genero1 = new GenerosMusicales({nombre: "Rock", artistasGrupos: ["Bayside", "John Lennon", "Stephen Malkmus", "Gunna", "AC/DC"], 
  albumes: ["Ahora soy peor", "Mala vida", "Tvrp House"], canciones: ["Ular SciencE", "Starting Over", "J Smoov", "P Power", "Jack"]});
const genero3 = new GenerosMusicales({nombre: "Trap", artistasGrupos: ["George Harrison", "Paul McCartney", "Breach", "AC/DC", "Pink Floyd", "The Beatles", "Queen"], 
  albumes: ["Tvrp Housing", "Las mamis saben bien rico", "Ahora soy peor"], canciones: ["Jack", "Ndael", "Karate Chop", "Kate", "Pacific Rim", "Pack Up", "Pacer"]});
const genero5 = new GenerosMusicales({nombre: "Drill", artistasGrupos: ["Paul McCartney", "Breach", "Duki", "Pink Floyd", "Queen"], 
  albumes: ["Las mamis saben bien rico", "Tvrp Housing"], canciones: ["Jack Rabbit", "Lady Black", "La Turra Rica", "R.I.C.O.", "R.A.T.S", "R.A.F."]});
const genero7 = new GenerosMusicales({nombre: "Jazz", artistasGrupos: ["Bayside", "Gunna", "Mesita", "Duki", "AC/DC", "Iron Maiden"], 
  albumes: ["Hola bby", "Ahora soy peor", "Sin City", "La calle es MALA", "Tvrp House", "Tvrp Housing"], canciones: ["M", "M79", "Ma and Pa", "S.A.D", "Bad Tattoo", "S&M"]});
const genero9 = new GenerosMusicales({nombre: "Rap", artistasGrupos: ["Bayside", "Paul McCartney", "Duki", "Pink Floyd", "Iron Maiden"], 
  albumes: ["Hola bby", "Sin City", "Tvrp Housing"], canciones: ["Na na na Batman", "Nashii", "U Got the Look", "U Get Me High", "U 2 Luv"]});
const genero2 = new GenerosMusicales({nombre: "Pop", artistasGrupos: ["Bayside", "Mesita", "Breach", "Iron Maiden", "The Beatles", "Pink Floyd"],
  albumes: ["Sin City"], canciones: ["Jack Rabbit", "K", "M.vlopp", "Kali Ma", "Ndael", "Pacer"]});
const genero4 = new GenerosMusicales({nombre: "Metal", artistasGrupos: ["Bayside", "John Lennon", "Gunna", "Duki", "AC/DC", "Pink Floyd"],
  albumes: ["Ahora soy peor", "Mala vida", "Tvrp House", "Tvrp Housing"], canciones: ["LOVE", "L.A.", "La Rosa", "La La", "La Di Da Di", "Karate Chop"]});
const genero6 = new GenerosMusicales({nombre: "K-pop", artistasGrupos: ["John Lennon", "George Harrison", "Mesita", "The Beatles", "Iron Maiden"],
  albumes: ["Mala vida", "Sin City", "La calle es MALA"], canciones: ["M", "Mamasita Sabrosa", "So Strong", "Glad To Be Gay", "$(dollar sign)"]});
const genero8 = new GenerosMusicales({nombre: "Country", artistasGrupos: ["John Lennon", "Stephen Malkmus", "Breach", "Mesita", "Queen", "Iron Maiden"],
  albumes: ["Mala vida", "Sin City", "La calle es MALA", "Las mamis saben bien rico"], canciones: ["Mamon Loco", "No Mames Wey", "The Monkees", "is the Damn Season", "Til Kingdom Come", "Nashii"]});
const genero10 = new GenerosMusicales({nombre: "Flamenco", artistasGrupos: ["Stephen Malkmus", "Gunna", "Breach", "The Beatles", "AC/DC"],
  albumes: ["Mala vida", "Sin City", "Las mamis saben bien rico"], canciones: ["S.O.S", "Sad Angel", "Vacancy", "V.E.N.O.M", "V-2 Schneider"]});

export const generos = new Coleccion<GenerosMusicales>(genero1, genero2, genero3, genero4, genero5, genero6, genero7, genero8, genero9, genero10);

const playlist1 = new PlayList({nombre: "La mandanga", canciones: new Coleccion<Cancion>(cancion1, cancion3, cancion14, cancion38, cancion22, cancion33, cancion41, cancion19), 
  duracion: {hor: 0, min: 0}, generos: [], creador: "SYSTEM"});
const playlist2 = new PlayList({nombre: "Amor y Odio", canciones: new Coleccion<Cancion>(cancion13, cancion23, cancion36, cancion38, cancion11, cancion12, cancion2, cancion45, cancion49), 
  duracion: {hor: 0, min: 0}, generos: [], creador: "SYSTEM"});
const playlist3 = new PlayList({nombre: "Los de Socorro", canciones: new Coleccion<Cancion>(cancion33, cancion44, cancion22, cancion11, cancion2, cancion25, cancion50, cancion37), 
  duracion: {hor: 0, min: 0}, generos: [], creador: "SYSTEM"});

export const playList = new Coleccion<PlayList>(playlist1, playlist2, playlist3);

export const autores = new Coleccion<Artista | Grupo>(grupo1, grupo2, grupo3, grupo4, grupo5, artista1, artista2, artista3, artista4, artista5, artista6, artista7, artista8, artista9);
