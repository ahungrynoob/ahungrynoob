import mm from 'egg-mock';
import urllib from 'urllib';
import mock from '../../mock/issues';

import assert = require('assert');

describe('test/controller/home.test.ts', () => {
  describe('GET /', () => {
    let app;
    beforeEach(async () => {
      mm(urllib, 'request', () => ({
        data: mock,
      }));

      app = mm.app({
        cache: false,
      });
      await app.ready();
      app.mockService('issue', 'list', () => mock);
    });

    afterEach(() => {
      mm.restore();
    });

    it('should status 200 and get right content', () =>
      app
        .httpRequest()
        .get('/')
        .expect(200)
        .expect(res => {
          assert(res.text.indexOf('ahungrynoob') > -1);
        }));

    it('should status 200 and get right content', () =>
      app
        .httpRequest()
        .get('/work')
        .expect(200)
        .expect(res => {
          assert(res.text.indexOf('ahungrynoob') > -1);
        }));

    it('should status 404 and get right content', () =>
      app
        .httpRequest()
        .get('/404')
        .expect(404)
        .expect(res => {
          assert(res.text.indexOf('无可奉告') > -1);
        }));
  });
});
