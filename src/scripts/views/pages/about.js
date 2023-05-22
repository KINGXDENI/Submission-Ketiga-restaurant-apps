// import RestauranSource from '../../data/restaurant-source';
// import { createRestoItemTemplate } from '../templates/template-creator';

// Fungsi untuk memuat halaman About
function loadAbout() {
  const contentDiv = document.getElementById('konten-utama');
  contentDiv.innerHTML = `<h1>About Page</h1>
    <!-- Tambahkan konten halaman About di sini -->`;
}

// Export fungsi-fungsi agar dapat diakses dari file router.js
export default loadAbout;
