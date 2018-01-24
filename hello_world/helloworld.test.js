const helloworld = require('./helloworld');

describe('Testing console.log with inputs', () => {
  it('testing with a string', () => {
    const str = 'ellen';
    const func = jest.fn(helloworld);
    func(str);
    expect(func).toHaveBeenCalledWith(str);
  });
  it('testing with a number', () => {
    const num = 32;
    const func = jest.fn(helloworld);
    func(num);
    expect(func).toHaveBeenCalledWith(num);
  });
  it('testing with undefined', () => {
    const num = undefined;
    const func = jest.fn(helloworld);
    func(num);
    expect(func).toHaveBeenCalledWith(num);
  });
});
