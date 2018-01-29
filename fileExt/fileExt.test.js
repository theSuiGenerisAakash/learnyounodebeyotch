const fileExt = require('./fileExt');

describe('testing fileExt', () => {
  it('testing a folder with .js and .txt files', (done) => {
    const folderPath = '../ioasync/';
    const fileExten = 'txt';
    const cbk = (data) => {
      expect(data).toEqual(['numFile.txt', 'strFile.txt']);
      done();
    };
    fileExt(folderPath, fileExten, cbk);
  });
  it('testing a folder with no files', (done) => {
    const folderPath = './ioasync/';
    const fileExten = 'js';
    const cbk = (data) => {
      expect(data).toEqual([]);
      done();
    };
    fileExt(folderPath, fileExten, cbk);
  });
});
