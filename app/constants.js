const IS_DEV = process.env.NODE_ENV === 'development';
const PAGE_URL = 'https://task.beeline.ru/secure/RapidBoard.jspa?rapidView=162&view=planning.nodetail&selectedIssue=ALIN-231&issueLimit=100';

module.exports = {
  IS_DEV,
  PAGE_URL,
};
