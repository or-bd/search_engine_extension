const BingApi = require('../utils/BingApi');

const search = keyword => BingApi.getSearchResults(keyword);

module.exports = {
  search,
};
