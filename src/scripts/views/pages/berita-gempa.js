import seismicSource from "../../data/seismic/get-seismic";
import { listGempaTerbaru , listGempaBesar, listGempaKecil } from '../templates/template-weather';

const BeritaGempa = {
  async render() {
    return `
    <div class="gempa">
      <div id="maincontent">
        <div id="mainGempa">
        </div>
        <div class="tab">
          <button class="tablinks" onclick="tabs(event, 'besar')">Gempa Besar</button>
          <button class="tablinks" onclick="tabs(event, 'kecil')">Gempa Kecil</button>
        </div>
        <div id="besar" class="tabcontent">
        </div>

        <div id="kecil" class="tabcontent">
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const GempaContainer = document.querySelector("#mainGempa")
    const GempaBesar = document.querySelector("#besar")
    const GempaKecil = document.querySelector("#kecil")
    let gempaTerbaru = await seismicSource.EQNew()
    let gempaTerbesar = await seismicSource.EQBig()
    let gempaTerkecil = await seismicSource.EQSmall()
    gempaTerbesar.data.Infogempa.gempa.map((gempaBesar)=>{
      let dataGempaBesar = [{
        'wilayah':gempaBesar.Wilayah,
        'waktu':gempaBesar.Jam,
        'tanggal':gempaBesar.Tanggal,
        'kekuatan':gempaBesar.Magnitude,
        'coordinate':gempaBesar.Coordinates,
        'lintang':gempaBesar.Lintang,
        'bujur':gempaBesar.Bujur,
        'kedalaman':gempaBesar.Kedalaman,
        'potensi':gempaBesar.Potensi
      }]
      GempaBesar.innerHTML += listGempaBesar(dataGempaBesar)
    })
    gempaTerkecil.data.Infogempa.gempa.map((gempaBesar)=>{
      let dataGempaKecil = [{
        'wilayah':gempaBesar.Wilayah,
        'waktu':gempaBesar.Jam,
        'tanggal':gempaBesar.Tanggal,
        'kekuatan':gempaBesar.Magnitude,
        'coordinate':gempaBesar.Coordinates,
        'lintang':gempaBesar.Lintang,
        'bujur':gempaBesar.Bujur,
        'kedalaman':gempaBesar.Kedalaman,
        'dirasakan':gempaBesar.Dirasakan
      }]
      GempaKecil.innerHTML += listGempaKecil(dataGempaKecil)
    })
    let dataArr = [{
      'wilayah':gempaTerbaru.data.Infogempa.gempa.Wilayah,
      'shakemap':gempaTerbaru.data.Infogempa.gempa.Shakemap,
      'waktu':gempaTerbaru.data.Infogempa.gempa.Jam,
      'tanggal':gempaTerbaru.data.Infogempa.gempa.Tanggal,
      'kekuatan':gempaTerbaru.data.Infogempa.gempa.Magnitude,
      'coordinate':gempaTerbaru.data.Infogempa.gempa.Coordinates,
      'lintang':gempaTerbaru.data.Infogempa.gempa.Lintang,
      'bujur':gempaTerbaru.data.Infogempa.gempa.Bujur,
      'kedalaman':gempaTerbaru.data.Infogempa.gempa.Kedalaman,
      'dirasakan':gempaTerbaru.data.Infogempa.gempa.Dirasakan
    }]
    GempaContainer.innerHTML = listGempaTerbaru(dataArr)
  },
};
export default BeritaGempa;
