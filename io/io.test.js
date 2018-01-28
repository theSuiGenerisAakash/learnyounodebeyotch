const ionode = require('./ionode');

describe('testing file i/o', () => {
  it('testing with input file containing random text', () => {
    const fileInput = './test1.txt';
    const result = 3;
    expect(ionode(fileInput)).toBe(result);
  });
  it('testing with input file only 1 line feed', () => {
    const fileInput = './test2.txt';
    const result = 1;
    expect(ionode(fileInput)).toBe(result);
  });
});
