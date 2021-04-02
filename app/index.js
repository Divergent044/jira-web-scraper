const launch = async (puppeteer) => {
  const browser = await puppeteer.launch({ headless: process.env.NODE_ENV === 'production' });
  const page = await browser.newPage();

  browser.close();
};

module.exports = launch;
