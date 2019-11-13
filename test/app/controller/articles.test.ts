import mm from 'egg-mock';
import urllib from 'urllib';
import mock from '../../mock/issues';

import assert = require('assert');

describe('test/controller/article.test.ts', () => {
  describe('GET /api/articles', () => {
    let app;
    beforeEach(async () => {
      mm(urllib, 'request', () => ({
        data: mock,
      }));

      app = mm.app({
        cache: false,
      });
      await app.ready();
    });

    afterEach(() => {
      mm.restore();
    });

    it('should status 200 and get articles', () =>
      app
        .httpRequest()
        .get('/api/articles')
        .query({ category: 'work' })
        .expect(200)
        .expect(res => {
          assert.equal(res.body.data.length, 2);
        }));

    it('should status 400 and return error ret', () =>
      app
        .httpRequest()
        .get('/api/articles')
        .query({ category: 'foo' })
        .expect(400)
        .expect(res => {
          assert.equal(res.body.ret, 1000);
        }));
  });

  describe('GET /api/articles/:id', () => {
    let app;
    beforeEach(async () => {
      mm(urllib, 'request', () => ({
        data: mock,
      }));

      app = mm.app({
        cache: false,
      });
      await app.ready();
    });

    afterEach(() => {
      mm.restore();
    });

    it('should status 200 and get right article', () =>
      app
        .httpRequest()
        .get('/api/articles/519906309')
        .expect(200)
        .expect(res => {
          assert.equal(res.body.data.id, 519906309);
        }));

    it('should status 404 and return not found ret', () =>
      app
        .httpRequest()
        .get('/api/articles/1')
        .expect(404)
        .expect(res => {
          assert.equal(res.body.ret, 1001);
        }));
  });
});
