const axios = require('axios');
import '../components/app-bar'
import '../components/nav-bar'
import '../styles/main.css'
import GetLoc from './data/get-location'
import './global/request'
const myIp = async() =>{
    try {
        const response = await axios.get('https://api.ipify.org?format=json')
        document.querySelector("#ip").innerHTML = response.data.ip
        const listAddress = await GetLoc.location(response.data.ip)
        document.querySelector("#main-content").innerHTML = listAddress.city
    } catch (err) {
        console.error(err)
    }
}
myIp()