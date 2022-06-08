const axios = require('axios');
import API_ENDPOINT from '../../global/api-endpoint'

class weatherSource {
    static async ibukota() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/`)
    }
    // Pulau Jawa
    static async jawaTimur() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/jawa-timur`)
    }
    static async banten() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/banten`)
    }
    static async jakarta() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/jawa-timur`)
    }
    static async jawaBarat() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/jawa-barat`)
    }
    static async jawaTengah() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/jawa-tengah`)
    }
    static async diy() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/diyogyakarta`)
    }
    // Pulau Papua & Maluku
    static async papua() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/papua`)
    }
    static async papuaBarat() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/papua-barat`)
    }
    static async maluku() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/maluku`)
    }
    static async malukuUtara() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/maluku-utara`)
    }
    // Pulau Sumatra
    static async aceh() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/aceh`)
    }
    static async sumut() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/sumatera-utara`)
    }
    static async susel() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/sumatera-selatan`)
    }
    static async subar() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/sumatera-barat`)
    }
    static async riau() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/riau`)
    }
    static async kepri() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/kepulauan-riau`)
    }
    static async bengkulu() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/bengkulu`)
    }
    static async jambi() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/jambi`)
    }
    static async lampung() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/lampung`)
    }
    static async bangkaBelitung() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/bangka-belitung`)
    }
    // Pulau Kalimantan
    static async kalbar() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/kalimantan-barat`)
    }
    static async kalsel() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/kalimantan-selatan`)
    }
    static async kalteng() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/kalimantan-tengah`)
    }
    static async kaltim() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/kalimantan-timur`)
    }
    static async kalut() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/kalimantan-utara`)
    }
    // Pulau Nusa Tenggara & Bali
    static async bali() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/bali`)
    }
    static async ntt() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/ntt`)
    }
    static async ntb() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/ntb`)
    }
    // Pulau Sulawesi
    static async gorontalo() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/gorontalo`)
    }
    static async sulbar() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/sulawesi-barat`)
    }
    static async sulsel() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/sulawesi-selatan`)
    }
    static async sultengah() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/sulawesi-tengah`)
    }
    static async sulteng() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/sulawesi-tenggara`)
    }
    static async sulut() {
        return await axios.get(`${API_ENDPOINT.LIST_WEATHER}/sulawesi-utara`)
    }
}
export default weatherSource;