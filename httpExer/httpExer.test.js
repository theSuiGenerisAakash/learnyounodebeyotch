const httpExer = require('./httpExer');

describe('testing with a valid url', () => {
  it('testing http GET with stealmylogin.com', (done) => {
    const url = 'http://www.stealmylogin.com/';
    const cbk = (data) => {
      expect(data).toBe(200);
      done();
    };
    httpExer(url, cbk);
  });
});
