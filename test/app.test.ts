import mm from 'egg-mock';
import urllib from 'urllib';
import mock from './mock/issues';
import assert = require('assert');

describe('test/app.ts', () => {
  describe('app#issueClient', () => {
    let app;
    beforeEach(() => {
      mm(urllib, 'request', (_: string) => {
        return new Promise((resolve) => {
          resolve({
            data: mock,
          });
        });
      });
      app = mm.app();
      return app.ready();
    });

    afterEach(() => {
      mm.restore();
    });

    it('should get right title', () => {
      const list = app.issueClient.get('work');
      assert(list[0].title === 'Test: Test a issue');
    });

    it('should get right title when match id', () => {
      const list = app.issueClient.get(888888);
      assert(list[0].title === 'Test: Test a issue 888888');
    });

    it('should get empty list', () => {
      const list = app.issueClient.get('/');
      assert.deepEqual(list, []);
    });
  });

  describe('app#issueClient#null)', () => {
    let app;
    beforeEach(() => {
      mm(urllib, 'request', (_: string) => {
        return new Promise((resolve) => {
          resolve({
            data: null,
          });
        });
      });
      app = mm.app({
        cache: false,
      });
      return app.ready();
    });

    afterEach(() => {
      mm.restore();
    });

    it('should get empty list', () => {
      const list = app.issueClient.get('work');
      assert.deepEqual(list, []);
    });
  });
});
