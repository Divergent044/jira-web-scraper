const click = async (page, selector) => {
  await page.waitForSelector(selector);
  await page.click(selector);
};

module.exports.click = click;
