import CONFIG from './config';

const API_ENDPOINT = {
  LIST_WEATHER: `${CONFIG.BASE_URL}/cuaca`,
  LIST_EARTHQUAKE: `${CONFIG.BASE_URL}/gempa`,
};

export default API_ENDPOINT;
