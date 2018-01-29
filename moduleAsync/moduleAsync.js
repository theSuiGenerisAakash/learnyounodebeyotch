const fs = require('fs');

module.exports = (folderPath, fileExt, cbk) => {
  fs.readdir(folderPath, (err, data) => {
    if (err) {
      return cbk(err);
    }

    const dataFinal = [];
    data.map(res => new RegExp(`.${fileExt}$`).exec(res))
      .forEach((ele) => {
        if (ele !== null) dataFinal.push(ele.input);
      });
    return cbk(null, dataFinal);
  });
};
