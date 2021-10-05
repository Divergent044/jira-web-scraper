const { focus } = require('../../helpers/focus');
const { prompt } = require('../../helpers/prompt');

const { PASSWORD_TITLE } = require('./content');
const { password, submitPasswordBtn } = require('./selectors');

const sendPassword = async (page) => {
  await focus(page, password);

  const passwordValue = await prompt(page, PASSWORD_TITLE);

  await page.keyboard.type(`4779${passwordValue}`);
  await page.click(submitPasswordBtn);
};

module.exports = sendPassword;
