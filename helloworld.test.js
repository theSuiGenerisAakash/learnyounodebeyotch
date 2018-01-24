const helloworld = require('./helloworld');

describe('Testing console.log with inputs', () => {
  it('testing with a string', () => {
    const str = 'ellen';
    const func = jest.fn(helloworld);
    func(str);
    expect(func).toHaveBeenCalledWith(str);
  });
});
