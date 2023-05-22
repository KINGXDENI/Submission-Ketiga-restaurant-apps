import Swal from 'sweetalert2';
import resto from '../DATA.json';

// Looping List Restoran
const boxItem = document.querySelector('.box');

resto.restaurants.forEach((restaurant) => {
  const boxItemClone = boxItem.cloneNode(true);
  const boxItemThumbnail = boxItemClone.querySelector('.thumb-res');
  const boxItemTitle = boxItemClone.querySelector('.title-res');
  const boxItemDescription = boxItemClone.querySelector('.desc-res');
  const boxItemLoc = boxItemClone.querySelector('.loc-res');
  const boxItemRate = boxItemClone.querySelector('.rate-res');

  boxItemThumbnail.src = restaurant.pictureId;
  boxItemThumbnail.alt = `gambar ${restaurant.name}`;
  boxItemTitle.textContent = restaurant.name;
  boxItemTitle.href = '#';
  boxItemDescription.textContent = restaurant.description;
  boxItemLoc.textContent = restaurant.city;
  boxItemLoc.setAttribute('aria-label', `lokasi ${restaurant.city}`);
  boxItemRate.textContent = restaurant.rating;
  boxItemRate.setAttribute('aria-label', `rating ${restaurant.rating}`);

  boxItem.parentNode.appendChild(boxItemClone);
});

boxItem.remove();
const toggleNavbar = () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
};

// Declar Button
const exploreButton = document.getElementById('btn_explore');
const navbar = document.querySelector('.navbar');
const menuBtn = document.getElementById('menu-btn');
const logo = document.querySelector('.logo');
// navbar button
menuBtn.addEventListener('click', toggleNavbar);

window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
});

logo.addEventListener('click', () => {});

logo.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    event.preventDefault();
    logo.click();
  }
});

menuBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleNavbar();
  }
});

navbar.addEventListener('keydown', (event) => {
  if (event.code === 'Enter' || event.code === 'Space') {
    event.preventDefault();
    event.target.click();
  }
});

// hero button
exploreButton.addEventListener('click', () => {});

exploreButton.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    event.preventDefault();
    exploreButton.click();
  }
});

// mendapatkan semua tombol detail
function showDetail() {
  Swal.fire({
    title: `<h3 class="title" aria-label="Restoran ${this.parentElement.querySelector('.title-res').textContent}">${this.parentElement.querySelector('.title-res').textContent}</h3>`,
    html: `
      <style>
        .desc {
          text-align: justify;
          color: #f4eee0;
          padding: 1rem 0;
          font-size: 1.3rem;
        }

        .title {
          font-size: 2.5rem;
          color: #f4eee0;
        }

        .info {
          display: flex;
          align-items: center;
        }

        .locat {
          font-size: 1.7rem;
          color: #E94560;
          font-weight: bold;
          margin-right: 1rem;
        }

        .bin {
          font-size: 1.7rem;
          color: #FDC57B;
          margin-right: 1rem;
        }

        .ret {
          font-size: 1.7rem;
          font-weight: bold;
          color: #f4eee0;
        }
        .image{
          border-radius: 0.5rem;
        }
      </style>
      <img class="image" src="${this.parentElement.parentElement.querySelector('.thumb-res').src}" alt="gambar ${this.parentElement.querySelector('.title-res').textContent}" style="width: 100%; margin-bottom: 10px;">
      <div class="info">
        <p class="locat"><i class="fas fa-map-marker-alt"></i> ${this.parentElement.querySelector('.loc-res').textContent}</p>
        <p class="bin"><i class="fas fa-star"></i></p>
        <p class="ret" aria-label="Rating ${this.parentElement.querySelector('.rate-res').textContent}">${this.parentElement.querySelector('.rate-res').textContent}</p>
      </div>
      <p class="desc">${this.parentElement.querySelector('.desc-res').textContent}</p>
    `,
    showCloseButton: true,
    showConfirmButton: false,
    width: '550px',
    padding: '3em',
    color: '#f4eee0',
    background: '#4f4557',
  });
}

const detailButtons = document.querySelectorAll('.btnd');

detailButtons.forEach((button) => {
  button.addEventListener('click', showDetail);
  button.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showDetail.call(button);
    }
  });
});

// tombol booking
const bookingButton = document.getElementById('btn_booking');
bookingButton.addEventListener('click', () => {
  // ambil nilai input dari form
  const name = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const tanggal = document.getElementById('tanggal').value;
  const jumlahOrang = document.getElementById('jmlh_org').value;
  const spesialReq = document.getElementById('spes_req').value;

  // validasi input
  if (name === '' || email === '' || tanggal === '' || jumlahOrang === '' || spesialReq === '') {
    /*     Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Please fill in all the fields!',
          showConfirmButton: false,
          timer: 2500
        }) */

  }

  // tampilkan pesan sukses
  /*   Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your reservation has been booked! Thank you!',
      showConfirmButton: false,
      timer: 2500
    }) */
});
bookingButton.addEventListener('keydown', (event) => {
  if (event.code === 'Enter' || event.code === 'Space') {
    event.preventDefault();
    bookingButton.click();
  }
});
