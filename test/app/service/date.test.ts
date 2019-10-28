import assert = require('assert');
import { app } from 'egg-mock/bootstrap';

describe('now()', () => {
  it('should get date', async () => {
    const ctx = app.mockContext();
    const date = await ctx.service.date.now();
    assert(date > 0);
  });
});
