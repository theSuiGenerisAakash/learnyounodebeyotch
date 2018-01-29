const lslib = require('./moduleAsync');

const dirname = process.argv[2];
const ext = process.argv[3];

lslib(dirname, ext, (err, files) => {
  if (err === null) {
    for (let i = 0; i < files.length; i += 1) {
      console.log(files[i]);
    }
  } else {
    console.log(err);
  }
});
