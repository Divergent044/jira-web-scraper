const sendLogin = require('./login');

const authorization = async (page) => {
  await sendLogin(page);
};

module.exports = authorization;
