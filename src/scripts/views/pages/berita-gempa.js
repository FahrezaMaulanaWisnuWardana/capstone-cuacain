const BeritaGempa = {
  async render() {
    return `
    <div class="gempa">
    <div class="box-gempa">
        <a class="judul-gempa" href="">Pusat gempa berada di laut 85 Km BaratDaya Maluku Barat Daya</a>
        <p>27 mei 2022, 09:36:08</p>
        <p>Dirasakan : III-IV Alor, II Kupang, IV-V Timor Leste, IV Tiakur ,IV Kisar, III Tiakur</p>
        <img src="icons-gempa/earthquake.png" alt="" height="32px" id="kedalaman">
        <label for="kedalaman">Kedalaman</label>
        <img src="icons-gempa/sound-wave.png" alt="" height="32px" id="magnitude">
        <label for="magnitude">Magnitude</label>
        <img src="icons-gempa/pin.png" alt="" height="32px" id="location">
        <label for="location">Location</label>
    </div>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default BeritaGempa;
