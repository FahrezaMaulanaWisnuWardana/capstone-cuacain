const axios = require('axios');

exports.location = (ip) => {
    return axios.get(`http://ip-api.com/json/${ip}?fields=3207167`)
    .then((response)=>{
        console.log(response)
    })
}