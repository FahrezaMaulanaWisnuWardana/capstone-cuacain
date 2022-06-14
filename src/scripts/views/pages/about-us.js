import LogoBmkg from '../../../public/images/logo-bmkg.png'

const AboutUs = {
  async render() {
    return `
    <div class="about-us">
      <div class="logo">
          <img id="icon2" src="images/weather.png" alt="logo CuacaIn" height="64px">
          <label for="icon2">CuacaIn</label>
      </div>
      <p>Kondisi iklim dan cuaca akhir-ahir ini terbilang cukup ekstrim, yang dimana keadaan tersebut tidak lepas dari meningkatnya pemanasan global dan efek rumah kaca. 
          Keadaan cuaca yang tidak menentu ini sangat merugikan banyak masyarakat terkhusus untuk pelajar dan pekerja yang hampir setiap hari melakukan perjalanan. 
          Sejauh ini perkembangan teknologi sukses dalam membantu masyarakat dalam memecahkan permasalahan di lingkungan keseharian, 
          semakin cerdas sebuah sistem aplikasi dirancang dapat meningkatkan efektivitas penanganan informasi.dengan perkembangan teknologi saat ini. 
          Kami ingin merancang sebuah aplikasi perkiraan cuaca untuk mempermudah seseorang dalam mendapatkan informasi terbaru mengenai kondisi 
          cuaca di sekitar atau daerah yang ingin dikunjungi dan pada aplikasi yang kami rancang juga akan memuat layanan informasi berita gempa terkini di seluruh indonesia.
      </p>
      <h1 class="crew-header">Terimakasih Kepada : </h1>
      <div class="logo-partner">
        <img src="${LogoBmkg}" />
      </div>
      <p>Sumber data cuaca : <a target="_blank" href="https://data.bmkg.go.id/" style="color:#f2f2f2; text-decoration:none">BMKG</a></p>

      <h1 class="crew-header">Our Crew</h1>
      <div class="profile">
          <div class="crew">
              <img src="./img/profile/profile-example.webp" alt="">
              <h1>Made Yoga Adhitya</h1>
          </div>
          <div class="crew">
              <img src="./img/profile/profile-example.webp" alt="">
              <h1>Fahreza Maulana Wisnu Wardana</h1>
          </div>
          <div class="crew">
              <img src="./img/profile/profile-example.webp" alt="">
              <h1>Muhammad Arif Ambarita</h1>
          </div>
          <div class="crew">
              <img src="./img/profile/profile-example.webp" alt="">
              <h1>Ali Hasyim</h1>
          </div>
      </div>
    </div>
    `;
  },
 
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
 
export default AboutUs;
