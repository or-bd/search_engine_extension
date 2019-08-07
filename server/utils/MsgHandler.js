const newMsg = (type, code, msg) => ({ type, code, msg });

module.exports = {
  General: {
    InvalidParams: newMsg('error', 400, 'Invalid input params'),
  },
  Search: {
    NotFound: newMsg('error', 404, 'No results found'),
  },
};
