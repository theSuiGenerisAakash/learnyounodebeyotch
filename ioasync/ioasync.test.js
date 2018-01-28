const ioasync = require('./ioasync');

describe('testing the asynchronous nature of readFile', () => {
  it('test with a math operation', () => {
    const filePath = './numFile.txt';
    const oneNum = 2 + Number(ioasync(filePath));
    const result = NaN;
    expect(oneNum).toBe(result);
  });
});
