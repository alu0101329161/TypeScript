import 'mocha';
import chai from 'chai';
import {expect} from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const url = 'https://grupoi-music-app.herokuapp.com';

describe('Solicitud PATCH', () => {
  describe('Artistas', () => {
    it('Modificar un artista', (done) => {
      chai.request(url)
      .patch('/artist?name=El%20duro')
      .send({
          generos: ['Pop', 'Drill'],
          oyentes: 2000000
      })
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }

        expect(res).to.have.status(200);
        done();
      });
    });
    it('Modificar un artista por ID', (done) => {
      chai.request(url)
      .get('/artist?name=El%20paquito%20el%20vergas')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(200);

        chai.request(url)
        .patch(`/artist/${res.body[0]._id}`)
        .send({
            generos: ['Pop', 'Drill'],
            oyentes: 2000000
        })
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
          expect(res).to.have.status(200);
          done();
        });
      });
    });
    it('Modificar un parámetro que no se puede de un artista', (done) => {
        chai.request(url)
        .patch('/artist?name=El%20duro')
        .send({
            estudios: ['Pop', 'Drill'],
            seguidores: 2000000
        })
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
  
          expect(res).to.have.status(400);
          done();
        });
      });
      it('Modificar un parámetro que no se puede de un artista por ID', (done) => {
        chai.request(url)
        .get('/artist?name=El%20paquito%20el%20vergas')
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
          expect(res).to.have.status(200);
  
          chai.request(url)
          .patch(`/artist/${res.body[0]._id}`)
          .send({
              estudios: ['Pop', 'Drill'],
              seguidores: 2000000
          })
          .end((err, res) => {
            if (err) {
              throw new Error('Error');
            }
            expect(res).to.have.status(400);
            done();
          });
        });
      });
    it('Modificar un artista que no existe', (done) => {
      chai.request(url)
      .patch('/artist?name=Error')
      .send({
        generos: ['Pop', 'Drill'],
        oyentes: 2000000
      })
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }

        expect(res).to.have.status(404);
        done();
      });
    });
    it('Modificar un artista que no existe por ID', (done) => {
      chai.request(url)
      .patch(`/artist/000000000000000000000000`)
      .send({
        generos: ['Pop', 'Drill'],
        oyentes: 2000000
      })
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(404);
        done();
      });
    });
  });



  describe('Canciones', () => {
    it('Modificar una cancion', (done) => {
      chai.request(url)
      .patch('/song?title=La%20Murcia')
      .send({
          generos: ['Pop', 'Drill'],
          reproduccionesTotales: 2000000
      })
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }

        expect(res).to.have.status(200);
        done();
      });
    });
    it('Modificar una cancion por ID', (done) => {
      chai.request(url)
      .get('/song?title=La%20Mamasita')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(200);

        chai.request(url)
        .patch(`/song/${res.body[0]._id}`)
        .send({
            generos: ['Pop', 'Drill'],
            reproduccionesTotales: 2000000
        })
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
          expect(res).to.have.status(200);
          done();
        });
      });
    });
    it('Modificar un parámetro que no se puede de una cancion', (done) => {
        chai.request(url)
        .patch('/song?title=La%20Murcia')
        .send({
            estudios: ['Pop', 'Drill'],
            seguidores: 2000000
        })
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
  
          expect(res).to.have.status(400);
          done();
        });
      });
      it('Modificar un parámetro que no se puede de una cancion por ID', (done) => {
        chai.request(url)
        .get('/song?title=La%20Mamasita')
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
          expect(res).to.have.status(200);
  
          chai.request(url)
          .patch(`/song/${res.body[0]._id}`)
          .send({
              estudios: ['Pop', 'Drill'],
              seguidores: 2000000
          })
          .end((err, res) => {
            if (err) {
              throw new Error('Error');
            }
            expect(res).to.have.status(400);
            done();
          });
        });
      });
    it('Modificar una cancion que no existe', (done) => {
      chai.request(url)
      .patch('/song?title=Error')
      .send({
        generos: ['Pop', 'Drill'],
        reproduccionesTotales: 2000000
      })
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }

        expect(res).to.have.status(404);
        done();
      });
    });
    it('Modificar una cancion que no existe por ID', (done) => {
      chai.request(url)
      .patch(`/song/000000000000000000000000`)
      .send({
        generos: ['Pop', 'Drill'],
        reproduccionesTotales: 2000000
      })
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(404);
        done();
      });
    });
  });



  describe('Playlist', () => {
    it('Modificar una playlist', (done) => {
      chai.request(url)
      .patch('/playlist?title=Fiesta%201')
      .send({
          generos: ['Pop', 'Drill'],
          duracion: {
            hor: 200,
            min: 10
          }
      })
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }

        expect(res).to.have.status(200);
        done();
      });
    });
    it('Modificar una playlist por ID', (done) => {
      chai.request(url)
      .get('/playlist?title=Fiesta%202')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(200);

        chai.request(url)
        .patch(`/playlist/${res.body[0]._id}`)
        .send({
            generos: ['Pop', 'Drill'],
            duracion: {
              hor: 200,
              min: 10
            }
        })
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
          expect(res).to.have.status(200);
          done();
        });
      });
    });
    it('Modificar un parámetro que no se puede de una playlist', (done) => {
        chai.request(url)
        .patch('/playlist?title=Fiesta%201')
        .send({
            estudios: ['Pop', 'Drill'],
            seguidores: 2000000
        })
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
  
          expect(res).to.have.status(400);
          done();
        });
      });
      it('Modificar un parámetro que no se puede de una playlist por ID', (done) => {
        chai.request(url)
        .get('/playlist?title=Fiesta%202')
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
          expect(res).to.have.status(200);
  
          chai.request(url)
          .patch(`/playlist/${res.body[0]._id}`)
          .send({
              estudios: ['Pop', 'Drill'],
              seguidores: 2000000
          })
          .end((err, res) => {
            if (err) {
              throw new Error('Error');
            }
            expect(res).to.have.status(400);
            done();
          });
        });
      });
    it('Modificar una playlist que no existe', (done) => {
      chai.request(url)
      .patch('/playlist?title=Error')
      .send({
        generos: ['Pop', 'Drill'],
        duracion: {
          hor: 200,
          min: 10
        }
      })
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }

        expect(res).to.have.status(404);
        done();
      });
    });
    it('Modificar una playlist que no existe por ID', (done) => {
      chai.request(url)
      .patch(`/playlist/000000000000000000000000`)
      .send({
        generos: ['Pop', 'Drill'],
        duracion: {
          hor: 200,
          min: 10
        }
      })
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(404);
        done();
      });
    });
  });
});
