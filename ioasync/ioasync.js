const fs = require('fs');

module.exports = filePath => fs.readFile(filePath, (err, data) => (data.toString()));
