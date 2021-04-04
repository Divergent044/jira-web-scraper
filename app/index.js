const puppeteer = require('puppeteer');

const { PAGE_URL } = require('./constants');
const { config } = require('./launch.config');

const auth = require('./services/authorization');
const findRelease = require('./services/find-release');

const launch = async () => {
  const browser = await puppeteer.launch(config);
  const page = await browser.newPage();

  await page.goto(PAGE_URL);

  await auth(page);
  await findRelease(page);

  // browser.close();
};

module.exports = launch;
