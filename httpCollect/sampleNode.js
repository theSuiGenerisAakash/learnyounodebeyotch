const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  const txt = `${q.text}`;
  console.log(txt);
  res.end(txt);
}).listen(8080);
