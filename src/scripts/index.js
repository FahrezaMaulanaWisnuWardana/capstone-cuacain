const axios = require('axios');
import '../components/app-bar'
import '../components/nav-bar'
import '../styles/main.css'
import GetLoc from './data/get-location'

const myIp = async() =>{
    try {
        const response = await axios.get('https://api.ipify.org?format=json')
        document.querySelector("#ip").innerHTML = response.data.ip
        console.log(GetLoc.location(response.data.ip))
    } catch (err) {
        console.error(err)
    }
}
myIp()
