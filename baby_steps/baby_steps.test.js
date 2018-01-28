const babysteps = require('./babysteps');

describe('testing babysteps.js', () => {
  it('testing with string parameters', () => {
    console.log = jest.fn(console.log);
    babysteps();
    expect(console.log).toHaveBeenCalledWith(0);
  });
});
