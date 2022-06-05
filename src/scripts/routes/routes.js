import Home from '../views/pages/home';
import CekCuaca from '../views/pages/cek-cuaca';
import BeritaGempa from '../views/pages/berita-gempa';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': Home,
  '/cek-cuaca': CekCuaca,
  '/berita-gempa': BeritaGempa,
  '/about-us': AboutUs,
};

export default routes;