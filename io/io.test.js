const ionode = require('./ionode');

describe('testing file i/o', () => {
  it('testing with input file containing random text', () => {
    const fileInput = './test1.txt';
    const result = 3;
    expect(ionode(fileInput).length).toBe(result);
  });
  it('testing with input file only 1 line feed', () => {
    const fileInput = './test2.txt';
    const result = 1;
    expect(ionode(fileInput).length).toBe(result);
  });
  it('testing with input file no line feed', () => {
    const fileInput = './test3.txt';
    const result = null;
    expect(ionode(fileInput)).toBe(result);
  });
});
