const IS_DEV = process.env.NODE_ENV === 'development';
const PAGE_URL = 'https://task.beedgtl.ru/secure/RapidBoard.jspa?rapidView=61&view=planning.nodetail&issueLimit=100';

module.exports = {
  IS_DEV,
  PAGE_URL,
};
