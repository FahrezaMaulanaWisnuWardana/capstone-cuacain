import GetWeather from '../data/weather/get-weather'

const cuaca = (kode) => {
    let kodeCuaca = [0,1,2,3,4,5,10,45,60,61,63,80,95,97]
    let checkCuaca = kodeCuaca.find(code => code === parseInt(kode))
    if(checkCuaca === 0){
        return "Cerah"
    }
    if(checkCuaca === 1){
        return "Cerah Berawan"
    }
    if(checkCuaca === 2){
        return "Cerah Berawan"
    }
    if(checkCuaca === 3){
        return "Berawan"
    }
    if(checkCuaca === 4){
        return "Berawan Tebal"
    }
    if(checkCuaca === 5){
        return "Udara Kabur"
    }
    if(checkCuaca === 10){
        return "Asap"
    }
    if(checkCuaca === 45){
        return "Kabut"
    }
    if(checkCuaca === 60){
        return "Hujan Ringan"
    }
    if(checkCuaca === 61){
        return "Hujan Sedang"
    }
    if(checkCuaca === 63){
        return "Hujan Lebat"
    }
    if(checkCuaca === 80){
        return "Hujan Lokal"
    }
    if(checkCuaca === 95 ){
        return "Hujan Petir"
    }
    if(checkCuaca === 97){
        return "Hujan Petir"
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
    }else if(province === "East Java"){
        return await GetWeather.jawaTimur()
    }else if(province === "Central Java"){
        return await GetWeather.jawaTengah()
    }else if(province === "West Java"){
        return await GetWeather.jawaBarat()
    }else if(province === "Banten"){
        return await GetWeather.jawaBarat()
    }else if(province === "Bangka Belitung Islands"){
        return await GetWeather.bangkaBelitung()
    }else if(province === "Bengkulu"){
        return await GetWeather.bengkulu()
    }else if(province === "Central Kalimantan"){
        return await GetWeather.kalteng()
    }else if(province === "Central Sulawesi"){
        return await GetWeather.sulteng()
    }else if(province === "East Kalimantan"){
        return await GetWeather.kaltim()
    }else if(province === "East Nusa Tenggara"){
        return await GetWeather.ntt()
    }else if(province === "Gorontalo"){
        return await GetWeather.gorontalo()
    }else if(province === "Capital Special Region of Jakarta"){
        return await GetWeather.jakarta()
    }else if(province === "Jambi"){
        return await GetWeather.jambi()
    }else if(province === "Lampung"){
        return await GetWeather.lampung()
    }else if(province === "Maluku"){
        return await GetWeather.maluku()
    }else if(province === "North Kalimantan"){
        return await GetWeather.kalut()
    }else if(province === "North Maluku"){
        return await GetWeather.malukuUtara()
    }else if(province === "North Sulawesi"){
        return await GetWeather.sulut()
    }else if(province === "Nort Sumatra"){
        return await GetWeather.sumut()
    }else if(province === "Papua"){
        return await GetWeather.papua()
    }else if(province === "Riau"){
        return await GetWeather.riau()
    }else if(province === "Riau Island"){
        return await GetWeather.kepri()
    }else if(province === "Southeast Sulawesi"){
        return await GetWeather.sulteng()
    }else if(province === "South Kalimantan"){
        return await GetWeather.kalsel()
    }else if(province === "South Sulawesi"){
        return await GetWeather.sulsel()
    }else if(province === "South Sumatra"){
        return await GetWeather.susel()
    }else if(province === "West Kalimantan"){
        return await GetWeather.kalbar()
    }else if(province === "West Nusa Tenggara"){
        return await GetWeather.ntb()
    }else if(province === "West Papua"){
        return await GetWeather.papuaBarat()
    }else if(province === "West Sulawesi"){
        return await GetWeather.sulbar()
    }else if(province === "West Sumatra"){
        return await GetWeather.subar()
    }else if(province === "Special Region of Yogyakarta"){
        return await GetWeather.diy()
    }
    return await GetWeather.ibukota()
}
export {cuaca, filter}