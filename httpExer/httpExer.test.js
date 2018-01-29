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
  it('testing http GET with google.com', (done) => {
    const url = 'http://google.com/';
    const cbk = (data) => {
      expect(data).toBe(302);
      done();
    };
    httpExer(url, cbk);
  });
});

describe('testing with an invalid url', () => {
  it('testing http GET with stealmylogindicacom', (done) => {
    const url = 'http://www.stealmylogindica.com/';
    const cbk = (data) => {
      expect(data).toBe('ENOTFOUND');
      done();
    };
    httpExer(url, cbk);
  });
});
