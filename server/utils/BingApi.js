const axios = require('axios');
const MsgHandler = require('./MsgHandler');

const getSearchResults = async (keyword) => {
  const { data } = await axios(`https://api.bing.com/osjson.aspx?query=${keyword}`);
  if (Array.isArray(data) && data.length) {
    const [search, results] = data;
    return results;
  }
  throw MsgHandler.Search.NotFound;
};

module.exports = {
  getSearchResults,
};
