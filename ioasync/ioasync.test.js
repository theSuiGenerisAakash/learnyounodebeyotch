const ioasync = require('./ioasync');

describe('testing the asynchronous nature of readFile', () => {
  it('test with a math operation', () => {
    const filePath = './numFile.txt';
    const oneNum = 2 + Number(ioasync(filePath, () => {}));
    const result = NaN;
    expect(oneNum).toBe(result);
  });

  it('testing function return type immediately', () => {
    const filePath = './strFile.txt';
    const strType = typeof ioasync(filePath, () => {});
    const resultType = 'string';
    expect(strType).not.toBe(resultType);
  });

  it('testing callback logic', (done) => {
    const filePath = '../io/test1.txt';
    const cbk = (data) => {
      expect(data).toBe(3);
      done();
    };
    ioasync(filePath, cbk);
  });
});
