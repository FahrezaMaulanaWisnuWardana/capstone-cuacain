const Home = {
  async render() {
    return `
      <h2>home page</h2>
    `;
  },
 
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
 
export default Home;