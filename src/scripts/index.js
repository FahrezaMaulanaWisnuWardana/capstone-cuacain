import axios from 'axios'
import '../components/app-bar'
import '../components/nav-bar'
import '../styles/main.css'
import { convertDate , dateOnly } from './utils/date'
import cuaca from './utils/weather'
import GetLoc from './data/get-location'
import GetWeather from './data/weather/get-weather'

const myIp = async() =>{
    try {
        const response = await axios.get('https://api.ipify.org?format=json')
        const listAddress = await GetLoc.location(response.data.ip)
        let weather = await GetWeather.ibukota()
        if(listAddress.regionName === "Aceh"){
            weather = await GetWeather.aceh()
        }else if(listAddress.regionName === "Bali"){
            weather = await GetWeather.bali()
        }else if(listAddress.regionName === "Banten"){
            weather = await GetWeather.banten()
        }else if(listAddress.regionName === "East Java"){
            weather = await GetWeather.jawaTimur()
        }else if(listAddress.regionName === "Central Java"){
            weather = await GetWeather.jawaTengah()
        }else if(listAddress.regionName === "West Java"){
            weather = await GetWeather.jawaBarat()
        }else if(listAddress.regionName === "Banten"){
            weather = await GetWeather.jawaBarat()
        }else if(listAddress.regionName === "Bangka Belitung Islands"){
            weather = await GetWeather.bangkaBelitung()
        }else if(listAddress.regionName === "Bengkulu"){
            weather = await GetWeather.bengkulu()
        }else if(listAddress.regionName === "Central Kalimantan"){
            weather = await GetWeather.kalteng()
        }else if(listAddress.regionName === "Central Sulawesi"){
            weather = await GetWeather.sulteng()
        }else if(listAddress.regionName === "East Kalimantan"){
            weather = await GetWeather.kaltim()
        }else if(listAddress.regionName === "East Nusa Tenggara"){
            weather = await GetWeather.ntt()
        }else if(listAddress.regionName === "Gorontalo"){
            weather = await GetWeather.gorontalo()
        }else if(listAddress.regionName === "Capital Special Region of Jakarta"){
            weather = await GetWeather.jakarta()
        }else if(listAddress.regionName === "Jambi"){
            weather = await GetWeather.jambi()
        }else if(listAddress.regionName === "Lampung"){
            weather = await GetWeather.lampung()
        }else if(listAddress.regionName === "Maluku"){
            weather = await GetWeather.maluku()
        }else if(listAddress.regionName === "North Kalimantan"){
            weather = await GetWeather.kalut()
        }else if(listAddress.regionName === "North Maluku"){
            weather = await GetWeather.malukuUtara()
        }else if(listAddress.regionName === "North Sulawesi"){
            weather = await GetWeather.sulut()
        }else if(listAddress.regionName === "Nort Sumatra"){
            weather = await GetWeather.sumut()
        }else if(listAddress.regionName === "Papua"){
            weather = await GetWeather.papua()
        }else if(listAddress.regionName === "Riau"){
            weather = await GetWeather.riau()
        }else if(listAddress.regionName === "Riau Island"){
            weather = await GetWeather.kepri()
        }else if(listAddress.regionName === "Southeast Sulawesi"){
            weather = await GetWeather.sulteng()
        }else if(listAddress.regionName === "South Kalimantan"){
            weather = await GetWeather.kalsel()
        }else if(listAddress.regionName === "South Sulawesi"){
            weather = await GetWeather.sulsel()
        }else if(listAddress.regionName === "South Sumatra"){
            weather = await GetWeather.susel()
        }else if(listAddress.regionName === "West Kalimantan"){
            weather = await GetWeather.kalbar()
        }else if(listAddress.regionName === "West Nusa Tenggara"){
            weather = await GetWeather.ntb()
        }else if(listAddress.regionName === "West Papua"){
            weather = await GetWeather.papuaBarat()
        }else if(listAddress.regionName === "West Sulawesi"){
            weather = await GetWeather.sulbar()
        }else if(listAddress.regionName === "West Sumatra"){
            weather = await GetWeather.subar()
        }else if(listAddress.regionName === "Special Region of Yogyakarta"){
            weather = await GetWeather.diy()
        }
        document.querySelector("#main-content").innerHTML = weather.slice(1).map((data)=>{
            if(data.attributes.description === listAddress.city){
                const date = new Date()
                const justDate = dateOnly(data.children[8].children[0].attributes.datetime)
                let cuacaHariIni = cuaca(data.children[8].children[0].children[0].children[0])
                if(date.getDate() === parseInt(justDate)){
                    if(date.getHours() >= 6 && date.getHours() < 12){
                        cuacaHariIni = cuaca(data.children[8].children[1].children[0].children[0])
                    }else if(date.getHours() >= 12 && date.getHours() < 18){
                        cuacaHariIni = cuaca(data.children[8].children[2].children[0].children[0])
                    }else if(date.getHours() >= 18 ){
                        cuacaHariIni = cuaca(data.children[8].children[3].children[0].children[0])
                    }
                }
                let cuacaBesok = cuaca(data.children[8].children[4].children[0].children[0])
                if(date.getDate()+1 === parseInt(justDate)){
                    if(date.getHours() >= 6 && date.getHours() < 12){
                        cuacaBesok = cuaca(data.children[8].children[5].children[0].children[0])
                    }else if(date.getHours() >= 12 && date.getHours() < 18){
                        cuacaBesok = cuaca(data.children[8].children[6].children[0].children[0])
                    }else if(date.getHours() >= 18 ){
                        cuacaBesok = cuaca(data.children[8].children[7].children[0].children[0])
                    }
                }
                let cuacaLusa = cuaca(data.children[8].children[8].children[0].children[0])
                if(date.getDate()+2 === parseInt(justDate)){
                    if(date.getHours() >= 6 && date.getHours() < 12){
                        cuacaLusa = cuaca(data.children[8].children[9].children[0].children[0])
                    }else if(date.getHours() >= 12 && date.getHours() < 18){
                        cuacaLusa = cuaca(data.children[8].children[10].children[0].children[0])
                    }else if(date.getHours() >= 18 ){
                        cuacaLusa = cuaca(data.children[8].children[11].children[0].children[0])
                    }
                }
                return `
                <div>
                    <ul>
                        <li>Cuaca kota ${data.attributes.description}</li>
                        <li>${convertDate(data.children[8].children[0].attributes.datetime)}</li>
                        <li>${cuacaHariIni}</li>
                        
                        <li>${convertDate(data.children[8].children[4].attributes.datetime)}</li>
                        <li>${cuacaBesok}</li>
                        
                        <li>${convertDate(data.children[8].children[8].attributes.datetime)}</li>
                        <li>${cuacaLusa}</li>
                    </ul>
                </div>`
            }
        }).join('')
    } catch (err) {
        console.error(err)
    }
}
myIp()