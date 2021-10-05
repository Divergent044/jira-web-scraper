const selectors = require('./selectors');

const createReleaseNote = async (page) => {
  await page.waitForSelector(selectors.jiraRN);
  const data = await page.$(selectors.jiraRN);

  const tasks = data.value.split(/Task|Bug/)[2].split(/\[|\]/).shift();
  const bugs = data.value.split(/Task|Bug/)[4].split(/\[|\]/).shift();
};

module.exports = createReleaseNote;
