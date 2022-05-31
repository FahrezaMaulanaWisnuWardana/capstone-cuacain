const axios = require('axios');
import API_ENDPOINT from '../../global/api-endpoint'

// EQ = EarthQuake
class seismicSource {
    static async EQNew() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_EARTHQUAKE}/autogempa.json`)
        .then((response)=> {
            console.log(response.data)
            return response.data
        })
    }
    static async EQBig() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_EARTHQUAKE}/gempaterkini.json`)
        .then((response)=> {
            console.log(response.data)
            return response.data
        })
    }
    static async EQLess() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_EARTHQUAKE}/gempadirasakan.json`)
        .then((response)=> {
            console.log(response.data)
            return response.data
        })
    }
}
export default seismicSource;