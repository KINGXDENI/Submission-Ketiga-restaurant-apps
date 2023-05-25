import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser';
import RestauranSource from '../../data/restaurant-source';
import {
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createReviewTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import API_ENDPOINT from '../../globals/api-endpoint';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <section class="list-resto-detail" id="resto-detail">
        <h1 class="heading"> Detail <span> Restaurant</span> </h1>
        <div class="box-container" id="resto-detail-content">
        </div>
        <div id="likeButtonContainer"></div>
      </section>
      <section class="review" id="review">
        <h1 class="heading"> customer's <span>review</span> </h1>
        <div class="swiper review-slider">
          <div class="swiper-wrapper">
          </div>
        </div>
        <div id="review-container">
        <h1 class="heading">add <span>review</span></h1>
        <form id="review-form">
          <input type="text" id="name-review" tabindex="0" placeholder="Your name" aria-label="nama lengkap">
          <textarea id="review-isi" name="review" placeholder="Type your review" cols="30" rows="10"
            aria-label="Review anda"></textarea>
          <button type="submit" tabindex="0" aria-label="Tombol Submit Review" class="btn-review">Submit</button>
        </form>
      </div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestauranSource.detailResto(url.id);
    const RestoContainer = document.querySelector('#resto-detail-content');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    const ReviewContainer = document.querySelector('.swiper-wrapper');
    RestoContainer.innerHTML = createRestoDetailTemplate(resto);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
    ReviewContainer.innerHTML = createReviewTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        rating: resto.rating,
        city: resto.city,
      },
    });

    const reviewForm = document.getElementById('review-form');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nameInput = document.getElementById('name-review');
      const reviewInput = document.getElementById('review-isi');
      const reviewData = {
        id: url.id,
        name: nameInput.value,
        review: reviewInput.value,
      };

      const urll = API_ENDPOINT.REVIEW;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      };

      try {
        if (nameInput.value === '' || reviewInput.value === '') {
          Swal.fire({
            icon: 'error',
            title: 'Please fill in all the fields!',
            showConfirmButton: false,
            timer: 2500,
            customClass: {
              container: 'my-swal-container',
              popup: 'my-swal-popup',
              title: 'my-swal-title',
            },
          });
        } else if (!window.navigator.onLine) {
          Swal.fire({
            icon: 'warning',
            title: 'Tidak bisa menambahkan review saat mode offline',
            text: '',
            showConfirmButton: false,
            timer: 2500,
            customClass: {
              container: 'my-swal-container',
              popup: 'my-swal-popup',
              title: 'my-swal-title',
            },
          });
        } else {
          await fetch(urll, options);
          const reviews = await RestauranSource.detailResto(url.id);
          ReviewContainer.innerHTML = createReviewTemplate(reviews);
          nameInput.value = '';
          reviewInput.value = '';
          Swal.fire({
            icon: 'success',
            title: 'Review berhasil ditambahkan',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              container: 'my-swal-container',
              popup: 'my-swal-popup',
              title: 'my-swal-title',
            },
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Review gagal ditambahkan',
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            container: 'my-swal-container',
            popup: 'my-swal-popup',
            title: 'my-swal-title',
          },
        });
      }
    });
  },
};

export default Detail;
