import { createRestoItemTemplate } from '../templates/template-creator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Favorite = {
  async render() {
    return `
      <section class="list-resto-favorite" id="resto-favorite" >
        <h1 class="heading"> Favorite <span> Restaurant</span> </h1>
        <div class="box-container" id="resto-favorite-content">
        </div>
        <div class="no-favorite-page">
        <h2 class="no-favorite-message">Belum ada resto favorite</h2>
      </div>
      </section>
    `;
  },

  async afterRender() {
    const Resto = await FavoriteRestoIdb.getAllResto();
    const RestoContainer = document.querySelector('#resto-favorite-content');
    const noFavoriteMessage = document.querySelector('.no-favorite-page');

    if (Resto.length === 0) {
      noFavoriteMessage.style.display = 'block';
    } else {
      Resto.forEach((resto) => {
        RestoContainer.innerHTML += createRestoItemTemplate(resto);
      });
    }

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

export default Favorite;
