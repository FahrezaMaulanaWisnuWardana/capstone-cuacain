import { async } from 'regenerator-runtime';
import {infoCuacaTemplate} from '../templates/template-weather'
import Provinsi from '../../../../wilayah.json'
import { filter } from '../../utils/weather';

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
            <button class="search-btn">Search</button>
        </form>
    </div>  
    `;
  },
 
  async afterRender() {
    const cekCuaca1 = document.querySelector('.cek-cuaca');
    const selectProv = document.querySelector('#provinsi');
    const selectKota = document.querySelector('#kota');
    let provArr = []
    let kota = []
    let output = [];
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
    // Belum filtering cuaca by daerah

    cekCuaca1.style.display = 'none';
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
    
    const listTime = document.querySelectorAll('li');
    const timeHour = document.querySelector('p.jam');

    listTime.forEach( item => {
        item.addEventListener('click', () => {
            listTime.forEach( el => {
                if(el.classList.contains('active')){
                    el.classList.remove('active');
                }
            })
            item.classList.add('active');
        })
    })

    const getTime = () => {
        const hour = new Date().getHours();
        timeHour.innerText = `${hour}.00`;
    }

getTime();


    const main = document.querySelector('#main-content');
    const submit = document.querySelector('button');
    submit.addEventListener('click', async () => {
      cekCuacaRender();
      hiddenForm();
    })

    const cekCuacaRender = () => {
      cekCuaca1.style.display = 'block'
      const back = document.querySelector('.back');
      back.addEventListener('click', () => {
        console.log('nas')
        showForm();
      })
    }

    const hiddenForm = () => {
      const formContainer = document.querySelector('.form-container');
      const wraper = document.querySelector('.wraper')
      const searchButton = document.querySelector('.search-btn');

      formContainer.style.display = 'none';
      wraper.style.display = 'none';
    }  

    const showForm = () => {
      const cekCuaca = document.querySelector('.cek-cuaca')
      const formContainer = document.querySelector('.form-container');
      const wraper = document.querySelector('.wraper');

      formContainer.style.display = 'flex';
      wraper.style.display = 'flex';
      cekCuaca.style.display = 'none';
    }
    

  },
};
 
export default CekCuaca;
