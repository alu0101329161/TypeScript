import 'mocha';
import chai from 'chai';
import {expect} from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const url = 'https://grupoi-music-app.herokuapp.com';

describe('Solicitud GET', () => {
  describe('Artistas', () => {
    it('Sacar todos los Artistas', (done) => {
      chai.request(url)
      .get('/artist')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(200);
        done();
      });
    });
    it('Sacar un artista', (done) => {
      chai.request(url)
      .get('/artist?name=El%20duro')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(200);

        chai.request(url)
        .get(`/artist/${res.body[0]._id}`)
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
          expect(res).to.have.status(200);
          done();
        });
      });
    });
    it('Sacar un artista que no existe', (done) => {
      chai.request(url)
      .get('/artist?name=Error')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(404);

        chai.request(url)
        .get(`/artist/000000000000000000000000`)
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



  describe('Canciones', () => {
    it('Sacar todas las canciones', (done) => {
      chai.request(url)
      .get('/song')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(200);
        done();
      });
    });
    it('Sacar una canción', (done) => {
      chai.request(url)
      .get('/song?title=La%20Mamasita')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(200);
        
        chai.request(url)
        .get(`/song/${res.body[0]._id}`)
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
          expect(res).to.have.status(200);
          done();
        });
      });
    });
    it('Sacar una canción que no existe', (done) => {
      chai.request(url)
      .get('/song?title=Error')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(404);
        
        chai.request(url)
        .get('/song/000000000000000000000000')
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



  describe('Playlist', () => {
    it('Sacar todas las Playlist', (done) => {
      chai.request(url)
      .get('/playlist')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(200);
        done();
      });
    });
    it('Sacar una playlist', (done) => {
      chai.request(url)
      .get('/playlist?title=Fiesta%201')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(200);
        
        chai.request(url)
        .get(`/playlist/${res.body[0]._id}`)
        .end((err, res) => {
          if (err) {
            throw new Error('Error');
          }
          expect(res).to.have.status(200);
          done();
        });
      });
    });
    it('Sacar una playlist que no existe', (done) => {
      chai.request(url)
      .get('/playlist?title=Error')
      .end((err, res) => {
        if (err) {
          throw new Error('Error');
        }
        expect(res).to.have.status(404);
       
        chai.request(url)
        .get('/playlist/000000000000000000000000')
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
});
