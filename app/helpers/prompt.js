// eslint-disable-next-line no-undef
const showPrompt = (page, title) => page.evaluate((msg) => prompt(msg, ''), title);

module.exports.prompt = showPrompt;
