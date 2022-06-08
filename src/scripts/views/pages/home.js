const Home = {
  async render() {
    return `
    <div class="hero">
      <div class="hero-text">
          <h2>Halo, Selamat datang</p>
          <h1>Informasi Cuaca Terkini <br> dan Data Gempa Yang Akurat</h1>
          <p>Memiliki informasi berbagai cuaca dan data gempa lengkap dengan mudah dan nyaman</p>
      </div>
      <div id="maincontent">
      
      </div>
    </div>
    `;
  },
 
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
 
export default Home;