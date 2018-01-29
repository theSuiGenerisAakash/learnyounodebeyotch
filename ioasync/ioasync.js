const fs = require('fs');

// fs.readFile(process.argv[2], (err, data) => (console.log(data.toString().match(/\n/g).length)));
module.exports = (filePath, cbk) => fs.readFile(filePath, (err, data) => {
  const files = data.toString().match(/\n/g);
  if (files !== null) { return cbk(files.length); }
  return cbk(0);
});
