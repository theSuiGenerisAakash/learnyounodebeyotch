const fs = require('fs');

module.exports = filePath => fs.readFileSync(filePath).toString().match(/\n/g).length;
