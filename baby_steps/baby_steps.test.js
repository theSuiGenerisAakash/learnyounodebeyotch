const babysteps = require('./babysteps');

describe('testing babysteps.js', () => {
  it('testing with no parameters', () => {
    console.log = jest.fn(console.log);
    babysteps();
    expect(console.log).toHaveBeenCalledWith(0);
  });

  it('testing with NaN', () => {
    console.log = jest.fn(console.log);
    babysteps(NaN, 2);
    expect(console.log).toHaveBeenCalledWith(NaN);
  });

  it('testing with normal integers', () => {
    console.log = jest.fn(console.log);
    babysteps(-4, 2);
    expect(console.log).toHaveBeenCalledWith(-2);
  });
});
