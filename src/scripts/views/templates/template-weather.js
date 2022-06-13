import GempaIcon from '../../../public/icons-gempa/earthquake.png'
import WaveIcon from '../../../public/icons-gempa/sound-wave.png'
import LocIcon from '../../../public/icons-gempa/pin.png'

const HomeTemplate = (data) => {
    return `
      <h1 class="text-center"> Cuaca Pada ${data[0].kota}</h1>
      <div class="weather">
          <div class="box">
              <h3>${data[0].waktuHariIni}</h3>
              <div class="weather-info">
                  <h1>${data[0].cuacaHariIni}</h1>
              </div>
          </div>
          <div class="box">
              <h3>${data[0].waktuBesok}</h3>
              <div class="weather-info">
                  <h1>${data[0].cuacaBesok}</h1>
              </div>
          </div>
          <div class="box">
              <h3>${data[0].waktuLusa}</h3>
              <div class="weather-info">
                  <h1>${data[0].cuacaLusa}</h1>
              </div>
          </div>
      </div>`
}

const infoCuacaTemplate = () => {
    return `
    <div class="cek-cuaca">
    <button class="back"><</button>
    <h2 class="kota">Jakarta</h2>
    <div class="detail">
        <h2 class="detail-kota">Jakarta Pusat</h2>
        <h3 class="provinsi">Provinsi DKI Jakarta</h3>

        <ul>
            <li class="active-time">Sen, 30 Mei</li>
            <li>Sel, 31 Mei</li>
            <li>Rab, 01 Jun</li>
            <li>Kam, 02 Jun</li>
            <li>Jum, 03 Jun</li>
            <li>Sab, 04 Jun</li>
            <li>Min, 05 Jun</li>
        </ul>

        <div class="image-container">
            <img src="images/cloud.jpg" alt="">
            <div class="detail-cuaca">
                <p class="jam"></p>
                <img src="images/rain.png" alt="">
                <p class="infoCuaca">Cerah Berawan</p>
                <p class="suhu">26&#9900; Celcius</p>
                <p class="kelembapan">85%</p>
                <p class="kecepatanAngin">10 km/jam</p>
                <p class="arahAngin">Barat Daya</p>
            </div>                
        </div>            
    </div>
</div>
`
}
const listGempaTerbaru = (data) => {
    return `
        <div class="box-gempa text-center">
            <a class="judul-gempa" href="">Gempa Terbaru</a>
            <p>${data[0].wilayah}</p>
            <img class="m-auto" style="width:75%" src="https://data.bmkg.go.id/DataMKG/TEWS/${data[0].shakemap}">
            <p>${data[0].tanggal} - ${data[0].waktu}</p>
            <div class="d-flex middle-content my">
                <img src="${GempaIcon}" alt="" class="ml" height="32px" id="kedalaman">
                <label for="kedalaman" class="ml">${data[0].kedalaman}</label>
                <img src="${WaveIcon}" alt="" class="ml" height="32px" id="magnitude">
                <label for="magnitude" class="ml">${data[0].kekuatan} M</label>
                <img src="${LocIcon}" alt="" class="ml" height="32px" id="location">
                <label for="location" class="ml">LS : ${data[0].lintang} - Bujur : ${data[0].bujur}</label>
            </div>
            <p>Wilayah dirasakan: ${data[0].dirasakan}</p>
        </div>
        `
}
const listGempaBesar = (data) => {
    return `
        <div class="box-gempa">
            <a class="judul-gempa">${data[0].wilayah}</a>
            <p>${data[0].tanggal} - ${data[0].waktu}</p>
            <p>Potensi : ${data[0].potensi}</p>
            <div class="d-flex middle-content my">
                <img src="${GempaIcon}" alt="" class="ml" height="32px" id="kedalaman">
                <label for="kedalaman" class="ml">${data[0].kedalaman}</label>
                <img src="${WaveIcon}" alt="" class="ml" height="32px" id="magnitude">
                <label for="magnitude" class="ml">${data[0].kekuatan} M</label>
                <img src="${LocIcon}" alt="" class="ml" height="32px" id="location">
                <label for="location" class="ml">LS : ${data[0].lintang} - Bujur : ${data[0].bujur}</label>
            </div>
        </div>
        `
}
const listGempaKecil = (data) => {
    return `
        <div class="box-gempa">
            <a class="judul-gempa">${data[0].wilayah}</a>
            <p>${data[0].tanggal} - ${data[0].waktu}</p>
            <p>Dirasakan : ${data[0].dirasakan}</p>
            <div class="d-flex middle-content my">
                <img src="${GempaIcon}" alt="" class="ml" height="32px" id="kedalaman">
                <label for="kedalaman" class="ml">${data[0].kedalaman}</label>
                <img src="${WaveIcon}" alt="" class="ml" height="32px" id="magnitude">
                <label for="magnitude" class="ml">${data[0].kekuatan} M</label>
                <img src="${LocIcon}" alt="" class="ml" height="32px" id="location">
                <label for="location" class="ml">LS : ${data[0].lintang} - Bujur : ${data[0].bujur}</label>
            </div>
        </div>
        `
}
export {HomeTemplate, infoCuacaTemplate, listGempaTerbaru,listGempaBesar,listGempaKecil}
