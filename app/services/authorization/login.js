const { focus } = require('../../helpers/focus');
const { prompt } = require('../../helpers/prompt');

const { login } = require('./selectors');
const { LOGIN_TITLE } = require('./content');

const sendLogin = async (page) => {
  await focus(page, login);

  // const loginValue = await prompt(page, LOGIN_TITLE);
  const loginValue = 'PavZakharov@beeline.ru';

  await page.keyboard.type(loginValue);
  await page.keyboard.press('Enter');
};

module.exports = sendLogin;
