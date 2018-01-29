const moduleAsync = require('./moduleAsync');

describe('testing modular async function', () => {
  it('testing a folder with .js and .txt files', (done) => {
    const folderPath = '../ioasync/';
    const fileExten = 'txt';
    const cbk = (err, data) => {
      if (err) {
        return console.log(err);
      }
      expect(data).toEqual(['numFile.txt', 'strFile.txt']);
      return done();
    };
    moduleAsync(folderPath, fileExten, cbk);
  });
});
