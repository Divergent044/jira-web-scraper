const sendLogin = require('./login');
const sendPassword = require('./password');

const authorization = async (page) => {
  await sendLogin(page);
  await sendPassword(page);
};

module.exports = authorization;
