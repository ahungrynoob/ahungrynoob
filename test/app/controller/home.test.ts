import mm from 'egg-mock';
import urllib from 'urllib';
import mock from '../../mock/issues';
import assert = require('assert');

describe('test/controller/home/test.ts', () => {
  describe('GET /', () => {
    let app;
    beforeEach(async () => {
      mm(urllib, 'request', (_: string) => {
        return {
          data: mock,
        };
      });

      app = mm.app({
        cache: false,
      });
      await app.ready();
      app.mockService('issue', 'list', (_: any) => {
        return mock;
      });
    });

    afterEach(() => {
      mm.restore();
    });

    it('should status 200 and get right content', () => {
      return app
        .httpRequest()
        .get('/')
        .expect(200)
        .expect((res) => {
          assert(res.text.indexOf('ahungrynoob') > -1);
        });
    });

    it('should status 200 and get right content', () => {
      return app
        .httpRequest()
        .get('/work')
        .expect(200)
        .expect((res) => {
          assert(res.text.indexOf('ahungrynoob') > -1);
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
