const HomeTemplate = (data) => {
    return `
    <div>
        <ul>
            <li>${data[0].kota}</li>
            <li>${data[0].waktuHariIni}</li>
            <li>${data[0].cuacaHariIni}</li>
            
            <li>${data[0].waktuBesok}</li>
            <li>${data[0].cuacaBesok}</li>
            
            <li>${data[0].waktuLusa}</li>
            <li>${data[0].cuacaLusa}</li>
        </ul>
    </div>`
}
export {HomeTemplate}