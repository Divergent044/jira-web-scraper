const focus = async (page, selector) => {
  await page.waitForSelector(selector);
  await page.focus(selector);
};

module.exports.focus = focus;
