import 'mocha';
import chai from 'chai';
import {expect} from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const url = 'https://grupoi-music-app.herokuapp.com';

describe('Solicitud DELETE', () => {
  describe('Artistas', () => {
    it('Borrar un artista', (done) => {
      chai.request(url)
      .del('/artist?name=El%20duro')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }

        expect(res).to.have.status(200);
        done();
      });
    });
    it('Borrar un artista por ID', (done) => {
      chai.request(url)
      .get('/artist?name=El%20paquito%20el%20vergas')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(200);

        chai.request(url)
        .del(`/artist/${res.body[0]._id}`)
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
          expect(res).to.have.status(200);
          done();
        });
      });
    });
    it('Borrar un artista que no existe', (done) => {
      chai.request(url)
      .del('/artist?name=Error')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }

        expect(res).to.have.status(404);
        done();
      });
    });
    it('Borrar un artista que no existe por ID', (done) => {
      chai.request(url)
      .del(`/artist/000000000000000000000000`)
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
    it('Borrar una cancion', (done) => {
      chai.request(url)
      .del('/song?title=La%20Murcia')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }

        expect(res).to.have.status(200);
        done();
      });
    });
    it('Borrar una cancion por ID', (done) => {
      chai.request(url)
      .get('/song?title=La%20Mamasita')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(200);

        chai.request(url)
        .del(`/song/${res.body[0]._id}`)
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
          expect(res).to.have.status(200);
          done();
        });
      });
    });
    it('Borrar una cancion que no existe', (done) => {
      chai.request(url)
      .del('/song?title=Error')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }

        expect(res).to.have.status(404);
        done();
      });
    });
    it('Borrar una cancion que no existe por ID', (done) => {
      chai.request(url)
      .del(`/song/000000000000000000000000`)
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
    it('Borrar una playlist', (done) => {
      chai.request(url)
      .del('/playlist?title=Fiesta%201')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }

        expect(res).to.have.status(200);
        done();
      });
    });
    it('Borrar una playlist por ID', (done) => {
      chai.request(url)
      .get('/playlist?title=Fiesta%202')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(200);

        chai.request(url)
        .del(`/playlist/${res.body[0]._id}`)
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
          expect(res).to.have.status(200);
          done();
        });
      });
    });
    it('Borrar una playlist que no existe', (done) => {
      chai.request(url)
      .del('/playlist?title=Error')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }

        expect(res).to.have.status(404);
        done();
      });
    });
    it('Borrar una playlist que no existe por ID', (done) => {
      chai.request(url)
      .del(`/playlist/000000000000000000000000`)
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
