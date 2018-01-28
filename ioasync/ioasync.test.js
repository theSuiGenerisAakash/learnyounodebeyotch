const ioasync = require('./ioasync');

describe('testing the asynchronous nature of readFile', () => {
  it('test with a math operation', () => {
    const filePath = './numFile.txt';
    const oneNum = 2 + Number(ioasync(filePath));
    const result = NaN;
    expect(oneNum).toBe(result);
  });

  it('testing function return type immediately', () => {
    const filePath = './strFile.txt';
    const strType = typeof ioasync(filePath);
    const resultType = 'string';
    expect(strType).not.toBe(resultType);
  });

  it('testing function execution order', () => {
    const filePath = './numFile.txt';
    console.log = jest.fn(console.log);
    ioasync(filePath);
    for (let i = 0; i < 10; i += 1) {
      console.log(i);
    }
    // setTimeout(() => console.log('hello'), 0); Why doesn't this print anuthing?
    expect(console.log).toHaveBeenCalledTimes(10);
    // setTimeout(() => expect(console.log).toHaveBeenCalledTimes(11), 0);
  });
});
