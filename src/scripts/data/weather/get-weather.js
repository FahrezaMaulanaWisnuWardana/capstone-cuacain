const axios = require('axios');
const txml = require('txml/dist/txml');
import API_ENDPOINT from '../../global/api-endpoint'

class weatherSource {
    static async ibukota() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-Indonesia.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    // Pulau Jawa
    static async jawaTimur() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-JawaTimur.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async banten() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-Banten.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async jakarta() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-DKIJakarta.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async jawaBarat() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-JawaBarat.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async jawaTengah() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-JawaTengah.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async diy() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-DIYogyakarta.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    // Pulau Papua & Maluku
    static async papua() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-Papua.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async papuaBarat() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-PapuaBarat.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async maluku() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-Maluku.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async malukuUtara() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-MalukuUtara.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    // Pulau Sumatra
    static async aceh() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-Aceh.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async sumut() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-SumateraUtara.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async susel() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-SumateraSelatan.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async subar() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-SumateraBarat.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async riau() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-Riau.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async kepri() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-KepulauanRiau.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async bengkulu() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-Bengkulu.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async jambi() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-Jambi.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async lampung() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-Lampung.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async bangkaBelitung() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-BangkaBelitung.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    // Pulau Kalimantan
    static async kalbar() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-KalimantanBarat.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async kalsel() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-KalimantanSelatan.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async kalteng() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-KalimantanTengah.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async kaltim() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-KalimantanTimur.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async kalut() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-KalimantanUtara.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    // Pulau Nusa Tenggara & Bali
    static async bali() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-Bali.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async ntt() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-NusaTenggaraTimur.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async ntb() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-NusaTenggaraBarat.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    // Pulau Sulawesi
    static async gorontalo() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-Gorontalo.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async sulbar() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-SulawesiBarat.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async sulsel() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-SulawesiSelatan.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async sultengah() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-SulawesiTengah.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async sulteng() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-SulawesiTenggara.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
    static async sulut() {
        return await axios.get(`https://cors-anywhere.herokuapp.com/${API_ENDPOINT.LIST_WEATHER}-SulawesiUtara.xml`)
        .then((response)=>{
            const parseJson = txml.parse(response.data)
            return parseJson[1].children[0].children
        })
    }
}
export default weatherSource;