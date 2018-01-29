const fileExt = require('./fileExt');

describe('testing fileExt', () => {
  it('testing a folder with .js and .txt files', (done) => {
    const folderPath = '../ioasync/';
    const fileExten = 'txt';
    const cbk = (data) => {
      console.log = jest.fn();
      expect(data).toEqual(['numFile.txt', 'strFile.txt']);
      done();
    };
    fileExt(folderPath, fileExten, cbk);
  });
});
