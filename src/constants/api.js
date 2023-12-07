import axios from 'axios';

const createApiInstance = baseURL => {
  console.log(baseURL, 'baseurll');
  return axios.create({
    baseURL,
  });
};

export default createApiInstance;
