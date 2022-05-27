import axios from 'axios'
import '../components/app-bar'
import '../components/nav-bar'
import '../styles/main.css'
import GetLoc from './data/get-location'
import GetWeather from './data/weather/get-weather'

const myIp = async() =>{
    try {
        const response = await axios.get('https://api.ipify.org?format=json')
        const listAddress = await GetLoc.location(response.data.ip)
        const weather = await GetWeather.jawaTimur()
        document.querySelector("#main-content").innerHTML = weather.slice(1).map((data)=>{
            if(data.attributes.description === listAddress.city){
                return `<div>
                    <ul>
                        <li>${data.attributes.description}</li>
                    </ul>
                </div>`
            }
        }).join('')
    } catch (err) {
        console.error(err)
    }
}
myIp()