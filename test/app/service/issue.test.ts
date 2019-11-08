import assert = require('assert');
import urllib from 'urllib';
import mock from '../../mock/issues';
import mm from 'egg-mock';

describe('issue', () => {
  let app;
  before(() => {
    mm(urllib, 'request', (_: string) => {
      return {
        data: mock,
      };
    });
    app = mm.app({
      cache: false,
    });
    return app.ready();
  });

  after(() => {
    mm.restore();
  });
  it('should get right title', async () => {
    const ctx = app.mockContext();
    const list = await ctx.service.issue.list('work');
    assert(list[0].title === 'Test: Test a issue');
  });
});
