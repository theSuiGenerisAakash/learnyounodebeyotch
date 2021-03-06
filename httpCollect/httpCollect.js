const http = require('http');

module.exports = (url, cbk) => {
  let stringToBeRecvd = '';
  http.get(url, (res) => {
    res.on('data', datum => (stringToBeRecvd += datum.toString()));
    res.on('end', () => cbk([stringToBeRecvd, stringToBeRecvd.length]));
  });
};
//
// let stringToBeRecvd = '';
// http.get(process.argv[2], (res) => {
//   res.on('data', datum => (stringToBeRecvd += datum.toString()));
//   res.on('end', () => {
//     console.log(stringToBeRecvd.length);
//     console.log(stringToBeRecvd);
//   });
// });
