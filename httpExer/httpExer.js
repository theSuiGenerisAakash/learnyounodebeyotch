const http = require('http');

module.exports = (url, cbk) => {
  http.get(url, (res) => {
    res.setEncoding('utf-8');
    return cbk(res.statusCode);
  }).on('error', e => cbk(e.code));
};

// http.get(process.argv[2], (res) => {
//   res.setEncoding('utf-8');
//   res.on('data', datum => console.log(datum));
// });
