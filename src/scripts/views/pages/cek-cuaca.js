import {infoCuacaTemplate} from '../templates/template-weather'
import { convertDate ,dateOnly } from '../../utils/date'
import { cuaca } from '../../utils/weather'
import Provinsi from '../../../../wilayah.json'

const axios = require('axios')

const CekCuaca = {
  async render() {
    return `
    <div class="wraper">
        <span class="pre_text">Sebelum Berangkat Ingat Check </span>
        <div class="text_wraper">
            <div class="innerText">
                <span>Cuaca</span>
                <span>Cerah</span>
                <span>Berawan</span>
                <span>Hujan</span>
                <span>CuacaIn</span>
            </div>
        </div>
    </div>
    <script src="textslide.js"></script>

    <div class="header form-container">
        <form>
        <select class="search-field business" id="provinsi">
          <option value="">Pilih Provinsi</option>
        </select>
        <select class="search-field business" id="kota">
          <option value="">Pilih Kota</option>
        </select>
            <button class="search-btn" id="cari">Search</button>
        </form>
    </div>  
    <div id="cuacaContainer" style="min-height:100vh"></div>
    `;
  },
 
  async afterRender() {
    const selectProv = document.querySelector('#provinsi');
    const selectKota = document.querySelector('#kota');
    const cariButton = document.querySelector("#cari")
    const cuacaContainer = document.querySelector("#cuacaContainer")
    let provArr = []
    let kota = []
    Provinsi.map((data)=>{
      provArr.push(data.propinsi)
    })
    Provinsi.map((data)=>{
      kota.push({
        'provinsi':data.propinsi,
        'kota':data.kota
      })
    })
    let arrayGroupBy = Object.values(kota.reduce((c,{kota,...rest})=>{
      let key = Object.values(rest).join('#')
      c[key] = c[key] || {...rest,kota:[]}
      c[key].kota.push(kota)
      return c
    },{}))
    
    let filtered = provArr.filter((item, pos, self)=>{
      return self.indexOf(item) == pos;
    })
    filtered.map((data)=>{
      selectProv.innerHTML += `<option value="${data}">${data}</option>`
    })
    selectProv.addEventListener('change',(e)=>{
      selectKota.innerHTML=''
      let data = e.target.value
      let dataKota = arrayGroupBy.filter(ob => ob.provinsi === data)
      dataKota[0].kota.map((data)=>{
        selectKota.innerHTML +=`<option value="${data}">${data}</option>`
      })
    })
    cariButton.addEventListener('click', async()=>{
      let getCuaca
      let dataArr = []
      let prov = selectProv.value
      let kot = selectKota.value
      const arrProv = prov.split(" ")
      if(arrProv.length > 1){
        getCuaca = await axios.get(`https://cuacain-backend.herokuapp.com/cuaca/${prov.replace(" ","-").toLowerCase()}`)
        getCuaca.data.slice(1).map((data)=>{
          if(data.attributes.description === kot){
            const date = new Date()
            const justDate = dateOnly(data.children[8].children[0].attributes.datetime)
            let cuacaHariIni = cuaca(data.children[8].children[0].children[0].children[0])
            let waktuHariIni = convertDate(data.children[8].children[0].attributes.datetime)
            let kelembapan = data.children[2].children[0].children[0].children[0]
            let suhu = data.children[4].children[0].children[0].children[0]
            let angin = data.children[10].children[0].children[2].children[0]
            if(date.getDate() === parseInt(justDate)){
                if(date.getHours() >= 6 && date.getHours() < 12){
                    cuacaHariIni = cuaca(data.children[8].children[1].children[0].children[0])
                    kelembapan = data.children[2].children[1].children[0].children[0]
                    angin = data.children[10].children[1].children[2].children[0]
                }else if(date.getHours() >= 12 && date.getHours() < 18){
                    cuacaHariIni = cuaca(data.children[8].children[2].children[0].children[0])
                    kelembapan = data.children[2].children[2].children[0].children[0]
                    angin = data.children[10].children[2].children[2].children[0]
                }else if(date.getHours() >= 18 ){
                    cuacaHariIni = cuaca(data.children[8].children[3].children[0].children[0])
                    kelembapan = data.children[2].children[3].children[0].children[0]
                    angin = data.children[10].children[3].children[2].children[0]
                }
            }
            let cuacaBesok = cuaca(data.children[8].children[4].children[0].children[0])
            let waktuBesok = convertDate(data.children[8].children[4].attributes.datetime)
            let kelembapanBesok = data.children[2].children[4].children[0].children[0]
            let suhuBesok = data.children[4].children[1].children[0].children[0]
            let anginBesok = data.children[10].children[4].children[2].children[0]
            if(date.getDate()+1 === parseInt(justDate)){
                if(date.getHours() >= 6 && date.getHours() < 12){
                    cuacaBesok = cuaca(data.children[8].children[5].children[0].children[0])
                    kelembapanBesok = data.children[2].children[5].children[0].children[0]
                    anginBesok = data.children[10].children[5].children[2].children[0]
                }else if(date.getHours() >= 12 && date.getHours() < 18){
                    cuacaBesok = cuaca(data.children[8].children[6].children[0].children[0])
                    kelembapanBesok = data.children[2].children[6].children[0].children[0]
                    anginBesok = data.children[10].children[6].children[2].children[0]
                }else if(date.getHours() >= 18 ){
                    cuacaBesok = cuaca(data.children[8].children[7].children[0].children[0])
                    kelembapanBesok = data.children[2].children[7].children[0].children[0]
                    anginBesok = data.children[10].children[7].children[2].children[0]
                }
            }
            let cuacaLusa = cuaca(data.children[8].children[8].children[0].children[0])
            let waktuLusa = convertDate(data.children[8].children[8].attributes.datetime)
            let kelembapanLusa = data.children[2].children[8].children[0].children[0]
            let suhuLusa = data.children[4].children[2].children[0].children[0]
            let anginLusa = data.children[10].children[8].children[2].children[0]
            if(date.getDate()+2 === parseInt(justDate)){
                if(date.getHours() >= 6 && date.getHours() < 12){
                    cuacaLusa = cuaca(data.children[8].children[9].children[0].children[0])
                    kelembapanLusa = data.children[2].children[9].children[0].children[0]
                    anginLusa = data.children[10].children[9].children[2].children[0]
                }else if(date.getHours() >= 12 && date.getHours() < 18){
                    cuacaLusa = cuaca(data.children[8].children[10].children[0].children[0])
                    kelembapanLusa = data.children[2].children[10].children[0].children[0]
                    anginLusa = data.children[10].children[10].children[2].children[0]
                }else if(date.getHours() >= 18 ){
                    cuacaLusa = cuaca(data.children[8].children[11].children[0].children[0])
                    kelembapanLusa = data.children[2].children[11].children[0].children[0]
                    anginLusa = data.children[10].children[11].children[2].children[0]
                }
            }
            dataArr = [{
              'waktuHariIni' : waktuHariIni,
              'cuacaHariIni' : cuacaHariIni,
              'kelembapanHariIni' : kelembapan,
              'suhu':suhu,
              'angin':angin,
              'waktuBesok' : waktuBesok,
              'cuacaBesok': cuacaBesok,
              'kelembapanBesok' : kelembapanBesok,
              'suhuBesok':suhuBesok,
              'anginBesok':anginBesok,
              'waktuLusa': waktuLusa,
              'cuacaLusa': cuacaLusa,
              'suhuLusa':suhuLusa,
              'kelembapanLusa' : kelembapanLusa,
              'anginLusa':anginLusa,
              'kota':kot,
              'provinsi':prov
            }]
            cuacaContainer.innerHTML = infoCuacaTemplate(dataArr)
          }
        })
      }else{
        getCuaca = await axios.get(`https://cuacain-backend.herokuapp.com/cuaca/${prov.toLowerCase()}`)
        getCuaca.data.slice(1).map((data)=>{
          if(data.attributes.description === kot){
            const date = new Date()
            const justDate = dateOnly(data.children[8].children[0].attributes.datetime)
            let cuacaHariIni = cuaca(data.children[8].children[0].children[0].children[0])
            let waktuHariIni = convertDate(data.children[8].children[0].attributes.datetime)
            let kelembapan = data.children[2].children[0].children[0].children[0]
            let suhu = data.children[4].children[0].children[0].children[0]
            let angin = data.children[10].children[0].children[2].children[0]
            if(date.getDate() === parseInt(justDate)){
                if(date.getHours() >= 6 && date.getHours() < 12){
                    cuacaHariIni = cuaca(data.children[8].children[1].children[0].children[0])
                    kelembapan = data.children[2].children[1].children[0].children[0]
                    angin = data.children[10].children[1].children[2].children[0]
                }else if(date.getHours() >= 12 && date.getHours() < 18){
                    cuacaHariIni = cuaca(data.children[8].children[2].children[0].children[0])
                    kelembapan = data.children[2].children[2].children[0].children[0]
                    angin = data.children[10].children[2].children[2].children[0]
                }else if(date.getHours() >= 18 ){
                    cuacaHariIni = cuaca(data.children[8].children[3].children[0].children[0])
                    kelembapan = data.children[2].children[3].children[0].children[0]
                    angin = data.children[10].children[3].children[2].children[0]
                }
            }
            let cuacaBesok = cuaca(data.children[8].children[4].children[0].children[0])
            let waktuBesok = convertDate(data.children[8].children[4].attributes.datetime)
            let kelembapanBesok = data.children[2].children[4].children[0].children[0]
            let suhuBesok = data.children[4].children[1].children[0].children[0]
            let anginBesok = data.children[10].children[4].children[2].children[0]
            if(date.getDate()+1 === parseInt(justDate)){
                if(date.getHours() >= 6 && date.getHours() < 12){
                    cuacaBesok = cuaca(data.children[8].children[5].children[0].children[0])
                    kelembapanBesok = data.children[2].children[5].children[0].children[0]
                    anginBesok = data.children[10].children[5].children[2].children[0]
                }else if(date.getHours() >= 12 && date.getHours() < 18){
                    cuacaBesok = cuaca(data.children[8].children[6].children[0].children[0])
                    kelembapanBesok = data.children[2].children[6].children[0].children[0]
                    anginBesok = data.children[10].children[6].children[2].children[0]
                }else if(date.getHours() >= 18 ){
                    cuacaBesok = cuaca(data.children[8].children[7].children[0].children[0])
                    kelembapanBesok = data.children[2].children[7].children[0].children[0]
                    anginBesok = data.children[10].children[7].children[2].children[0]
                }
            }
            let cuacaLusa = cuaca(data.children[8].children[8].children[0].children[0])
            let waktuLusa = convertDate(data.children[8].children[8].attributes.datetime)
            let kelembapanLusa = data.children[2].children[8].children[0].children[0]
            let suhuLusa = data.children[4].children[2].children[0].children[0]
            let anginLusa = data.children[10].children[8].children[2].children[0]
            if(date.getDate()+2 === parseInt(justDate)){
                if(date.getHours() >= 6 && date.getHours() < 12){
                    cuacaLusa = cuaca(data.children[8].children[9].children[0].children[0])
                    kelembapanLusa = data.children[2].children[9].children[0].children[0]
                    anginLusa = data.children[10].children[9].children[2].children[0]
                }else if(date.getHours() >= 12 && date.getHours() < 18){
                    cuacaLusa = cuaca(data.children[8].children[10].children[0].children[0])
                    kelembapanLusa = data.children[2].children[10].children[0].children[0]
                    anginLusa = data.children[10].children[10].children[2].children[0]
                }else if(date.getHours() >= 18 ){
                    cuacaLusa = cuaca(data.children[8].children[11].children[0].children[0])
                    kelembapanLusa = data.children[2].children[11].children[0].children[0]
                    anginLusa = data.children[10].children[11].children[2].children[0]
                }
            }
            dataArr = [{
              'waktuHariIni' : waktuHariIni,
              'cuacaHariIni' : cuacaHariIni,
              'kelembapanHariIni' : kelembapan,
              'suhu':suhu,
              'angin':angin,
              'waktuBesok' : waktuBesok,
              'cuacaBesok': cuacaBesok,
              'kelembapanBesok' : kelembapanBesok,
              'suhuBesok':suhuBesok,
              'anginBesok':anginBesok,
              'waktuLusa': waktuLusa,
              'cuacaLusa': cuacaLusa,
              'suhuLusa':suhuLusa,
              'kelembapanLusa' : kelembapanLusa,
              'anginLusa':anginLusa,
              'kota':kot,
              'provinsi':prov
            }]
            cuacaContainer.innerHTML = infoCuacaTemplate(dataArr)
          }
        })
      }
    })
    // Belum filtering cuaca by daerah

    let innerTexts = document.querySelectorAll('.text_wraper .innerText');
    if(innerTexts)
    {
        innerTexts.forEach(innerText=>{
            /* make clone of first child start*/
            let firstText = innerText.firstElementChild.cloneNode('true');
            innerText.appendChild(firstText);
            /* make clone of first child end*/

            let i        = 0,
                speed    = 2000,
                distance = 45;

            setInterval(() => {
                let step = innerText.childElementCount;
                innerText.style.transform  = `translateY(-${distance * i}px)`;
                innerText.style.transition = "0.5s ease-in-out";
                // console.log(i, step);
                if(i==step)
                {
                    innerText.style.transition = "0s";
                    innerText.style.transform = `translateY(0px)`;
                }

                // now change the value of i
                i = (i<step) ? (i+1) : 1;
            }, speed);
        });
    }

  },
};
 
export default CekCuaca;
