const { IS_DEV } = require('./constants');

const config = {
  slowMo: IS_DEV ? 100 : 0,
  devtools: IS_DEV,
  headless: false,
  defaultViewport: {
    width: 1100,
    height: 770,
  },
};

module.exports.config = config;
