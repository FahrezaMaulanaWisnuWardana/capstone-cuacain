import CONFIG from './config';

const API_ENDPOINT = {
  LIST_WEATHER: `${CONFIG.BASE_URL}/MEWS/DigitalForecast/DigitalForecast`,
  LIST_EARTHQUAKE: `${CONFIG.BASE_URL}/TEWS`,
};

export default API_ENDPOINT;
