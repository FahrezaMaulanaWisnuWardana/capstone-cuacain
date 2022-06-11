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
export {HomeTemplate}