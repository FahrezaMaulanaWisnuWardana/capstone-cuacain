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
                  <h1>${data[0].cuacaHariIni[0]}</h1>
              </div>
          </div>
          <div class="box">
              <h3>${data[0].waktuBesok}</h3>
              <div class="weather-info">
                  <h1>${data[0].cuacaBesok[0]}</h1>
              </div>
          </div>
          <div class="box">
              <h3>${data[0].waktuLusa}</h3>
              <div class="weather-info">
                  <h1>${data[0].cuacaLusa[0]}</h1>
              </div>
          </div>
      </div>`
}

const infoCuacaTemplate = (data) => {
    return `
        <div class="cek-cuaca">
            <div class="detail">
                <h2 class="detail-kota">${data[0].kota}</h2>
                <h3 class="provinsi">Provinsi ${data[0].provinsi}</h3>

                <ul style="color:#f2f2f2">
                    <li class="tabs-cuaca active-time" onclick="tabsCuaca(event, 'hariIni')">${data[0].waktuHariIni}</li>
                    <li class="tabs-cuaca" onclick="tabsCuaca(event, 'besok')">${data[0].waktuBesok}</li>
                    <li class="tabs-cuaca" onclick="tabsCuaca(event, 'lusa')">${data[0].waktuLusa}</li>
                </ul>

                <div class="image-container tabcontent" id="hariIni" style="display:block;">
                    <div class="detail-cuaca" style="color:#f2f2f2">
                        <img src="${data[0].cuacaHariIni[1]}" alt="">
                        <p class="infoCuaca">${data[0].cuacaHariIni[0]}</p>
                        <p class="suhu">${data[0].suhu}&#9900; Celcius</p>
                        <p class="kelembapan">Kelembapan ${data[0].kelembapanHariIni}%</p>
                        <p class="kecepatanAngin">${Math.round(data[0].angin)} km/jam</p>
                    </div>                
                </div>
                <div class="image-container tabcontent" id="besok">
                    <div class="detail-cuaca" style="color:#f2f2f2">
                        <img src="${data[0].cuacaBesok[1]}" alt="">
                        <p class="infoCuaca">${data[0].cuacaBesok[0]}</p>
                        <p class="suhu">${data[0].suhuBesok}&#9900; Celcius</p>
                        <p class="kelembapan">Kelembapan ${data[0].kelembapanBesok}%</p>
                        <p class="kecepatanAngin">${Math.round(data[0].anginBesok)} km/jam</p>
                    </div>                
                </div>
                <div class="image-container tabcontent" id="lusa">
                    <div class="detail-cuaca" style="color:#f2f2f2">
                        <img src="${data[0].cuacaLusa[1]}" alt="">
                        <p class="infoCuaca">${data[0].cuacaLusa[0]}</p>
                        <p class="suhu">${data[0].suhuLusa}&#9900; Celcius</p>
                        <p class="kelembapan">Kelembapan ${data[0].kelembapanLusa}%</p>
                        <p class="kecepatanAngin">${Math.round(data[0].anginLusa)} km/jam</p>
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
                <img src="${GempaIcon}" alt="kedalaman" class="ml" height="32px" id="kedalaman">
                <label for="kedalaman" class="ml">${data[0].kedalaman}</label>
                <img src="${WaveIcon}" alt="magnitude" class="ml" height="32px" id="magnitude">
                <label for="magnitude" class="ml">${data[0].kekuatan} M</label>
                <img src="${LocIcon}" alt="location" class="ml" height="32px" id="location">
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
