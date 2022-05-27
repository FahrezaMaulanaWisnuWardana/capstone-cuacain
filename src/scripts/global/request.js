import axios from "axios";

const request = new XMLHttpRequest();
axios({
   method: "get",
   url: "https://cors-anywhere.herokuapp.com/https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-Indonesia.xml"
})
   .then(function(response){
       console.log(response.data);
   });
export default request;