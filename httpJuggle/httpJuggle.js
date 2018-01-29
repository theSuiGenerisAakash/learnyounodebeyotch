const http = require('http');

http.get(process.argv[2], (res1) => {
  let strFirst = '';
  res1.on('data', datum => strFirst += datum);
  res1.on('end', () => {
    console.log(strFirst);
    http.get(process.argv[3], (res2) => {
      let strSecond = '';
      res2.on('data', datum => strSecond += datum);
      res2.on('end', () => {
        console.log(strSecond);
        http.get(process.argv[4], (res3) => {
          let strThird = '';
          res3.on('data', datum => strThird += datum);
          res3.on('end', () => console.log(strThird));
        });
      });
    });
  });
});
