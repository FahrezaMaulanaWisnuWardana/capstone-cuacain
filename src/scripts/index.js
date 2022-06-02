import axios from 'axios'
import '../components/app-bar'
import '../components/nav-bar'
import '../styles/main.css'
import '../styles/responsive.css'
import { convertDate ,dateOnly } from './utils/date'
import { cuaca, filter } from './utils/weather'
import GetLoc from './data/get-location'
import GetSeismic from './data/seismic/get-seismic'

const menu = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu');

menu.addEventListener('click', function (event) {
    menu.classList.toggle('open');
    navMenu.classList.toggle('open');
});

const myIp = async() =>{
    try {
        const Seismic = await GetSeismic.EQBig()
        const response = await axios.get('https://api.ipify.org?format=json')
        const listAddress = await GetLoc.location(response.data.ip)
        const weather = await filter(listAddress.regionName)
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
