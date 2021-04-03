const puppeteer = require('puppeteer');

const { PAGE_URL } = require('./constants');
const { config } = require('./launch.config');

const auth = require('./services/authorization');

const launch = async () => {
  const browser = await puppeteer.launch(config);
  const page = await browser.newPage();

  await page.goto(PAGE_URL);

  await auth(page);

  browser.close();
};

module.exports = launch;
