module.exports = (...args) => {
  console.log(args.reduce((accum, elem) => accum + Number(elem), 0));
};

// console.log(process.argv.slice(2).reduce((accum, elem) => accum + Number(elem), 0));
