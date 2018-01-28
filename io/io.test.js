const ionode = require('./ionode');

describe('testing file i/o', () => {
  it('testing with input file containing random text', () => {
    const fileInput = './test1.txt';
    const result = 3;
    expect(ionode(fileInput)).toBe(result);
  });
});
