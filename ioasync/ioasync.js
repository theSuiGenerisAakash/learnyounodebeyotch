const fs = require('fs');

// fs.readFile(process.argv[2], (err, data) => (console.log(data.toString().match(/\n/g).length)));
module.exports = filePath => fs.readFile(filePath, (err, data) => console.log(data.toString()));
