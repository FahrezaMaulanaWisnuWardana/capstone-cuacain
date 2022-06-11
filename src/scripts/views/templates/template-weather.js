const HomeTemplate = (data) => {
    return `
      <h1> Cuaca Pada Jakarta</h1>
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
            <li class="active">Sen, 30 Mei</li>
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
export {HomeTemplate, infoCuacaTemplate}
