const request = require('supertest');

const server = require('./server.js');
const db = require('../data/dbConfig.js');

describe('the server', () => {
  beforeEach(async () => {
    await db('hobbits').truncate();
  });

  describe('GET /', () => {
    // xit('should run the testing env', () => {
    //   expect(process.env.DB_ENV).toBe('testing');
    // });
    it('should returns status 200', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    test('should return the correct object', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toBe('application/json');
          expect(res.body).toEqual({ api: 'up' });
        });
    });

    describe('GET /hobbits', () => {
      test('should return a list of hobbits', () => {
        return request(server)
          .get('/hobbits')
          .then(res => {
            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
            expect(res.body.length).toBe(0);
          });
      });
    });
  });
});
