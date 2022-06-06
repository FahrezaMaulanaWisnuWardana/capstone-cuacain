// Utils
import nearestPlace from '../../utils/get-location'
import { convertDate ,dateOnly } from '../../utils/date'
import { cuaca, filter } from '../../utils/weather'
import { HomeTemplate } from '../templates/template-weather';

const getLocation = (callback) => {
  if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(callback);
  }else{
    document.querySelector("#main-content").innerHTML = "Silahkan aktifkan Navigasi agar bisa menggunakan aplikasi"
  }
}
const Home = {
  async render() {
    return `
      <h1>Halo, selamat datang</h1>
      <div id="maincontent"></div>
    `;
  },
 
  async afterRender() {
    const HomeContainer = document.querySelector("#maincontent")
    getLocation( async(position)=>{
      let lat = position.coords.latitude
      let lng = position.coords.longitude
      let myLocation = nearestPlace(lat , lng)
      let propinsi = myLocation[0][0].provinsi
      let kota = myLocation[0][0].kota
      let filterCuaca = await filter(propinsi)
      
      filterCuaca.slice(1).map((data)=>{
        if(data.attributes.description === kota){  
          const date = new Date()
          const justDate = dateOnly(data.children[8].children[0].attributes.datetime)
          let cuacaHariIni = cuaca(data.children[8].children[0].children[0].children[0])
          let waktuHariIni = convertDate(data.children[8].children[0].attributes.datetime)
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
          let waktuBesok = convertDate(data.children[8].children[4].attributes.datetime)
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
          let waktuLusa = convertDate(data.children[8].children[8].attributes.datetime)
          if(date.getDate()+2 === parseInt(justDate)){
              if(date.getHours() >= 6 && date.getHours() < 12){
                  cuacaLusa = cuaca(data.children[8].children[9].children[0].children[0])
              }else if(date.getHours() >= 12 && date.getHours() < 18){
                  cuacaLusa = cuaca(data.children[8].children[10].children[0].children[0])
              }else if(date.getHours() >= 18 ){
                  cuacaLusa = cuaca(data.children[8].children[11].children[0].children[0])
              }
          }
          let dataArr = [{
            'waktuHariIni' : waktuHariIni,
            'cuacaHariIni' : cuacaHariIni,
            'waktuBesok' : waktuBesok,
            'cuacaBesok': cuacaBesok,
            'waktuLusa': waktuLusa,
            'cuacaLusa': cuacaLusa
          }]
          HomeContainer.innerHTML += HomeTemplate(dataArr)
        }
      })

    })
  },
};
export default Home;