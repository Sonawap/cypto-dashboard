import Axios from 'axios';

export const axios = Axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
  timeout: 60000
});

