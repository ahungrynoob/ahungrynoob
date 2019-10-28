import { app, mock } from 'egg-mock/bootstrap';

describe('test/controller/home/test.ts', () => {
  describe('GET /home', () => {
    it('should status 200 and get the right timestamp', () => {
      mock.syncData(Date, 'now', 1567068230381);
      return app
        .httpRequest()
        .get('/home')
        .expect(200)
        .expect('1567068230381');
    });
  });
});
