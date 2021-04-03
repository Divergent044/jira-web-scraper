const { IS_DEV } = require('./constants');

const config = {
  slowMo: IS_DEV ? 100 : 0,
  devtools: IS_DEV,
  headless: !IS_DEV,
};

module.exports.config = config;
