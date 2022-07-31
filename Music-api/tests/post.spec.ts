import 'mocha';
import chai from 'chai';
import {expect} from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const url = 'https://grupoi-music-app.herokuapp.com';

describe('Solicitud POST: ', () => {
  describe("Artista éxito", () => {
    it('Insertar Artista 1', (done) => {
      chai.request(url)
      .post('/artist')
      .send({
        nombre: 'El duro',
        generos: ['Rock', 'Pop'],
        canciones: ['La mamasita', 'El tavieso scot'],
        oyentes: 1500,
      }).end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(201);
        done();
      });
    });
    it('Insertar Artista 2', (done) => {
      chai.request(url)
      .post('/artist')
      .send({
        nombre: 'El paquito el vergas',
        generos: ['Trap', 'Drill'],
        canciones: ['La Murcia', 'El Mandangon'],
        oyentes: 244500,
      }).end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(201);
        done();
      });
    });
  });
  
  describe("Artista fracaso", () => {
    it('Insertar Artista que ya existe en la base de datos', (done) => {
      chai.request(url)
      .post('/artist')
      .send({
        nombre: 'El duro',
        generos: ['Rock', 'Pop'],
        canciones: ['La mamasita', 'El tavieso scot'],
        oyentes: 1500,
      }).end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(400);
        done();
      });
    });
    it('Insertar Artista con géneros erróneos', (done) => {
      chai.request(url)
      .post('/artist')
      .send({
        nombre: 'El paquito el loco',
        generos: ['Rrap', 'Rrill'],
        canciones: ['La Murcia', 'El Mandangon'],
        oyentes: 244500,
      }).end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(400);
        done();
      });
    });
  });



  describe("Cancion éxito", () => {
    it('Insertar Canción 1', (done) => {
      chai.request(url)
      .post('/song')
      .send({
        titulo: 'La Murcia',
        generos: ['Rock', 'Rap'],
        autor: 'El paquito el vergas',
        duracion: {
          min: 2,
          seg: 4
        },
        single: true,
        reproduccionesTotales: 100,
      }).end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(201);
        done();
      });
    });
    it('Insertar Canción 2', (done) => {
      chai.request(url)
      .post('/song')
      .send({
        titulo: 'La Mamasita',
        generos: ['Pop', 'Drill'],
        autor: 'El duro',
        duracion: {
          min: 3,
          seg: 25
        },
        single: true,
        reproduccionesTotales: 10000,
      }).end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(201);
        done();
      });
    });
  });

  describe("Cancion fracaso", () => {
    it('Insertar Canción que ya existe en la base de datos', (done) => {
      chai.request(url)
      .post('/song')
      .send({
        titulo: 'La Murcia',
        generos: ['Rock', 'Rap'],
        autor: 'El paquito el vergas',
        duracion: {
          min: 2,
          seg: 4
        },
        single: true,
        reproduccionesTotales: 100,
      }).end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(400);
        done();
      });
    });
    it('Insertar Canción para un artista que no existe', (done) => {
      chai.request(url)
      .post('/song')
      .send({
        titulo: 'La bby',
        generos: ['Rap', 'Drill'],
        autor: 'Sergio la bebe',
        duracion: {
          min: 3,
          seg: 25
        },
        single: true,
        reproduccionesTotales: 10000,
      }).end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(400);
        done();
      });
    });
  });



  describe("Playlist éxito", () => {
    it('Insertar Playlist 1', (done) => {
      chai.request(url)
      .post('/playlist')
      .send({
        titulo: 'Fiesta 1',
        canciones: ['La Murcia'],
        duracion: {
          hor: 1,
          min: 3
        },
        generos: ['Jazz'],
      }).end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(201);
        done();
      });
    });
    it('Insertar Playlist 2', (done) => {
      chai.request(url)
      .post('/playlist')
      .send({
        titulo: 'Fiesta 2',
        canciones: ['La Mamasita'],
        duracion: {
          hor: 5,
          min: 4
        },
        generos: ['Metal'],
      }).end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(201);
        done();
      });
    });
  });
  
  describe("Playlist fracaso", () => {
    it('Insertar Playlist que ya existe', (done) => {
      chai.request(url)
      .post('/playlist')
      .send({
        titulo: 'Fiesta 1',
        canciones: ['La Murcia'],
        duracion: {
          hor: 1,
          min: 3
        },
        generos: ['Jazz'],
      }).end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(400);
        done();
      });
    });
    it('Insertar Playlist con una cancion que no existe', (done) => {
      chai.request(url)
      .post('/playlist')
      .send({
        titulo: 'Fiesta 2',
        canciones: ['None'],
        duracion: {
          hor: 5,
          min: 4
        },
        generos: ['Metal'],
      }).end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(400);
        done();
      });
    });
  });
});
