const httpCollect = require('./httpCollect');

describe('testing responses', () => {
  it('testing normal string response from local server', (done) => {
    const stringToBeSent = 'Aakash';
    const stringToBeRecvd = 'Aakash';
    const cbk = (data) => {
      expect(data).toEqual([stringToBeRecvd, stringToBeRecvd.length]);
      done();
    };
    httpCollect(`http://localhost:8080/?text=${stringToBeSent}`, cbk);
  });
  it('testing undefined response from local server', (done) => {
    const stringToBeSent = undefined;
    const stringToBeRecvd = 'undefined';
    const cbk = (data) => {
      expect(data).toEqual([stringToBeRecvd, stringToBeRecvd.length]);
      done();
    };
    httpCollect(`http://localhost:8080/?text=${stringToBeSent}`, cbk);
  });
});
