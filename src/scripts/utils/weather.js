import GetWeather from '../data/weather/get-weather'
import Rain from '../../public/images/rain.png' 
import Sun from '../../public/images/sun.png' 
import Clouds from '../../public/images/clouds.png' 
import Cloudy from '../../public/images/cloudy.png' 
import Storm from '../../public/images/storm.png' 

const cuaca = (kode) => {
    let kodeCuaca = [0,1,2,3,4,5,10,45,60,61,63,80,95,97]
    let checkCuaca = kodeCuaca.find(code => code === parseInt(kode))
    if(checkCuaca === 0){
        return ["Cerah",Sun]
    }
    if(checkCuaca === 1){
        return ["Cerah Berawan",Cloudy]
    }
    if(checkCuaca === 2){
        return ["Cerah Berawan",Cloudy]
    }
    if(checkCuaca === 3){
        return ["Berawan",Clouds]
    }
    if(checkCuaca === 4){
        return ["Berawan Tebal",Clouds]
    }
    if(checkCuaca === 5){
        return ["Udara Kabur",Clouds]
    }
    if(checkCuaca === 10){
        return ["Asap",Clouds]
    }
    if(checkCuaca === 45){
        return ["Kabut",Clouds]
    }
    if(checkCuaca === 60){
        return ["Hujan Ringan",Rain]
    }
    if(checkCuaca === 61){
        return ["Hujan Sedang",Rain]
    }
    if(checkCuaca === 63){
        return ["Hujan Lebat",Rain]
    }
    if(checkCuaca === 80){
        return ["Hujan Lokal",Rain]
    }
    if(checkCuaca === 95 ){
        return ["Hujan Petir",Storm]
    }
    if(checkCuaca === 97){
        return ["Hujan Petir",Storm]
    }
    return "Code Not Found"
}
const filter = async(province) => {

    if(province === "Aceh"){
        return await GetWeather.aceh()
    }else if(province === "Bali"){
        return await GetWeather.bali()
    }else if(province === "Banten"){
        return await GetWeather.banten()
    }else if(province === "Jawa Timur"){
        return await GetWeather.jawaTimur()
    }else if(province === "Jawa Tengah"){
        return await GetWeather.jawaTengah()
    }else if(province === "Jawa Barat"){
        return await GetWeather.jawaBarat()
    }else if(province === "Banten"){
        return await GetWeather.jawaBarat()
    }else if(province === "Bangka Belitung"){
        return await GetWeather.bangkaBelitung()
    }else if(province === "Bengkulu"){
        return await GetWeather.bengkulu()
    }else if(province === "Kalimantan Tengah"){
        return await GetWeather.kalteng()
    }else if(province === "Sulawesi Tengah"){
        return await GetWeather.sulteng()
    }else if(province === "Kalimantan Timur"){
        return await GetWeather.kaltim()
    }else if(province === "Nusa Tenggara Timur"){
        return await GetWeather.ntt()
    }else if(province === "Gorontalo"){
        return await GetWeather.gorontalo()
    }else if(province === "DKI Jakarta"){
        return await GetWeather.jakarta()
    }else if(province === "Jambi"){
        return await GetWeather.jambi()
    }else if(province === "Lampung"){
        return await GetWeather.lampung()
    }else if(province === "Maluku"){
        return await GetWeather.maluku()
    }else if(province === "Kalimantan Utara"){
        return await GetWeather.kalut()
    }else if(province === "Maluku Utara"){
        return await GetWeather.malukuUtara()
    }else if(province === "Sulawesi Utara"){
        return await GetWeather.sulut()
    }else if(province === "Sumatra Utara"){
        return await GetWeather.sumut()
    }else if(province === "Papua"){
        return await GetWeather.papua()
    }else if(province === "Riau"){
        return await GetWeather.riau()
    }else if(province === "Kepulauan Riau"){
        return await GetWeather.kepri()
    }else if(province === "Sulawesi Tenggara"){
        return await GetWeather.sulteng()
    }else if(province === "Kalimantan Selatan"){
        return await GetWeather.kalsel()
    }else if(province === "Sulawesi Selatan"){
        return await GetWeather.sulsel()
    }else if(province === "Sumatra Selatan"){
        return await GetWeather.susel()
    }else if(province === "Kalimantan Barat"){
        return await GetWeather.kalbar()
    }else if(province === "Nusa Tenggara Barat"){
        return await GetWeather.ntb()
    }else if(province === "Papua Barat"){
        return await GetWeather.papuaBarat()
    }else if(province === "Sulawesi Barat"){
        return await GetWeather.sulbar()
    }else if(province === "Sumatra Barat"){
        return await GetWeather.subar()
    }else if(province === "DIYogyakarta"){
        return await GetWeather.diy()
    }
    return await GetWeather.ibukota()
}
export {cuaca, filter}