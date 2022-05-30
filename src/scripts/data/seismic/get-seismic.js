const axios = require('axios');
import API_ENDPOINT from '../../global/api-endpoint'

class seismicSource {
    static async updateEarthquake() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_EARTHQUAKE}-autogempa.json`)
        .then((response)=> {
            console.log(response.data)
            return response.data
        })
    }
}
export default seismicSource;