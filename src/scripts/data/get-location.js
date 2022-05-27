const axios = require('axios');

exports.location = async(ip) => {
    return await axios.get(`http://ip-api.com/json/${ip}?fields=3207167`)
    .then((response)=>{
        console.log(response)
        return response.data
    })
}