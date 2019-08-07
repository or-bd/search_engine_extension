import axios from 'axios';

const serverEndpoint = 'http://localhost:3001/api';
export const getSearchEngineResults = keyword => new Promise((resolve) => {
  axios(`${serverEndpoint}/search/${keyword}`)
    .then(({ data }) => resolve(data))
    .catch(err => console.log(err.message));
});
