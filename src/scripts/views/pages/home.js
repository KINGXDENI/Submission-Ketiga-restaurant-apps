import RestauranSource from '../../data/restaurant-source';
import {
  setHomeButtonFunctionality,
} from '../../utils/button-func';
import {
  createRestoItemTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `<section class="hero" id="home">
      <div class="content">
        <h3>Explore a <span> World of </span> Flavors!</h3>
        <a href="#resto" tabindex="0" role="button" id="btn_explore" class="btn" title="Explore Now"
          aria-label="Tombol explore now">
          explore
          now </a>
      </div>
    </section>
    <!-- end -->

    <!-- resto -->
    <section class="list-resto" id="resto">
      <h1 class="heading"> Explore <span> Restaurant</span> </h1>
      <div class="box-container" id="resto-content" >

      </div>
    </section>

    <!-- end -->

    <!-- Service -->
    <section class="service" id="service">
      <h1 class="heading"> our <span>services</span></h1>
      <div class="box-container">
        <div class="box">
          <div class="content">
            <i class="fa fa-4x fa-user-tie"></i>
            <h3>Master Chefs</h3>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <i class="fa fa-4x fa-utensils"></i>
            <h3>Quality Food</h3>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <i class="fa fa-4x fa-cart-plus"></i>
            <h3>Online Order</h3>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <i class="fa fa-4x fa-headset"></i>
            <h3>24/7 Service</h3>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
        </div>
      </div>

    </section>
    <!-- end -->

    <!-- Reservation -->
    <section class="Reservation" id="Reservation">
      <h1 class="heading"> Reservation <span> now </span> </h1>
      <div class="row">
        <div class="image">
          <img src="images/reservation.png" alt="">
        </div>
        <form>
          <div class="inputBox">
            <input type="text" id="nama" tabindex="0" placeholder="your name" aria-label="nama lengkap" required>
            <input type="email" id="email" tabindex="0" placeholder="your email" aria-label="email" required>
          </div>
          <div class="inputBox">
            <input type="date" tabindex="0" id="tanggal" aria-label="Tanggal booking" required>
            <input type="number" id="jmlh_org" tabindex="0" placeholder="How many people"
              aria-label="Pesan untuk berapa orang?" required>
          </div>
          <textarea placeholder="Spesial Request" id="spes_req" cols="30" rows="10"
            aria-label="spesial request" required></textarea>
          <button type="submit" tabindex="0" id="btn_booking" class="btn" aria-label="Tombol Booking Now">Booking now</button>
        </form>
      </div>
    </section>
    <!-- end -->
        `;
  },

  async afterRender() {
    const restos = await RestauranSource.daftarResto();
    const restoContainer = document.querySelector('#resto-content');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
    setHomeButtonFunctionality();
    const detailButtons = document.querySelectorAll('.btnd');
    detailButtons.forEach((button) => {
      button.addEventListener('keydown', (event) => {
        if (event.code === 'Enter' || event.code === 'Space') {
          event.preventDefault();
          const restoId = button.getAttribute('href').split('/').pop();
          window.location.href = `#/detail/${restoId}`;
        }
      });
    });
  },

};

export default Home;
