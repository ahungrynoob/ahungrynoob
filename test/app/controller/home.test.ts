import { app } from 'egg-mock/bootstrap';
import assert = require('assert');

describe('test/controller/home/test.ts', () => {
  describe('GET /work', () => {
    it('should status 200 and get right content', () => {
      return app
        .httpRequest()
        .get('/work')
        .expect(200)
        .expect((res) => {
          assert(res.text.indexOf('work') > -1);
        });
    });

    it('should status 404 and get right content', () => {
      return app
        .httpRequest()
        .get('/404')
        .expect(404)
        .expect((res) => {
          assert(res.text.indexOf('无可奉告') > -1);
        });
    });
  });
});
