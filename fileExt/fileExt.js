const fs = require('fs');

module.exports = (folderPath, fileExt, cbk) => {
  fs.readdir(folderPath, (err, data) => {
    if (err) {
      console.log(err);
      return cbk([]);
    }
    if (data === undefined) {
      return cbk([]);
    }
    const dataFinal = [];
    data.map(res => new RegExp(`.${fileExt}$`).exec(res))
      .forEach((ele) => {
        if (ele !== null) dataFinal.push(ele.input);
      });
    return cbk(dataFinal);
  });
};

// ((folderPath, fileExt) => {
//   fs.readdir(folderPath, (err, data) => {
//     data.map(res => new RegExp(`.${fileExt}$`).exec(res))
//       .forEach((ele) => {
//         if (ele !== null) console.log(ele.input);
//       });
//   });
// })(process.argv[2], process.argv[3]);
