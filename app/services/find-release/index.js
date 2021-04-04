const selectors = require('./selectors');
const { click } = require('../../helpers/click');

const findRelease = async (page) => {
  await click(page, selectors.buttonGoTo);
  await click(page, selectors.releaseLink);
  await click(page, selectors.releaseNoteLink);
};

module.exports = findRelease;
