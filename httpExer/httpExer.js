const http = require('http');

module.exports = (url, cbk) => {
  http.get(url, (res) => {
    res.setEncoding('utf-8');
    return cbk(res.statusCode);
  }).on('error', e => cbk(e.code));
};
