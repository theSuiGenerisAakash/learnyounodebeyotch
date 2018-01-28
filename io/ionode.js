const fs = require('fs');
// Uncomment below for learnyounode
// console.log(fs.readFileSync(process.argv[2]).toString().match(/\n/g).length);
module.exports = filePath => fs.readFileSync(filePath).toString().match(/\n/g);
