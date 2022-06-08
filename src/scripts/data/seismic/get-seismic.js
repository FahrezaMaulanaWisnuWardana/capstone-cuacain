const axios = require('axios');
import API_ENDPOINT from '../../global/api-endpoint'

// EQ = EarthQuake
class seismicSource {
    static async EQNew() {
        return await axios.get(`${API_ENDPOINT.LIST_EARTHQUAKE}-terbaru`)
    }
    static async EQBig() {
        return await axios.get(`${API_ENDPOINT.LIST_EARTHQUAKE}-besar`)
    }
    static async EQSmall() {
        return await axios.get(`${API_ENDPOINT.LIST_EARTHQUAKE}-kecil`)
    }
}
export default seismicSource;