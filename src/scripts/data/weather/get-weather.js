const axios = require('axios');
const txml = require('txml/dist/txml');

exports.dummyApi = async() => {
    return await axios.get(`https://cors-anywhere.herokuapp.com/https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-Indonesia.xml`)
    .then((response)=>{
        const parseJson = txml.parse(response.data)
        return parseJson[1].children[0].children
    })
}
exports.jawaTimur = async() => {
    return await axios.get(`https://cors-anywhere.herokuapp.com/https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-JawaTimur.xml`)
    .then((response)=>{
        const parseJson = txml.parse(response.data)
        return parseJson[1].children[0].children
    })
}