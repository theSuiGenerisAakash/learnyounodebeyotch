module.exports = (...args) => {
  console.log(args.reduce((accum, elem) => accum + Number(elem), 0));
};
