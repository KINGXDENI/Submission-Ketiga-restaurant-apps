import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <div class="box">
    <div class="image">
      <img src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_LARGE + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" class="thumb-res" alt="${resto.name}">
      <span class="location">${resto.city}</span>
    </div>
    <div class="content">
      <h3 class="title-res">${resto.name}</h3>
      <div class="icons">
        <div class="icon">
          <i class="fas fa-map-marker-alt"></i>
          <span class="loc-res">${resto.address}</span>
        </div>
      </div>
      <div class="stars">
        <i class="fas fa-star"></i>
        <span class="rate-res">${resto.rating}</span>
      </div>
      <p class="desc-res">${resto.description}</p>
      <div class="category-container">
        <h2 class="category-heading">Categories</h2>
        <div class="categories">
          ${resto.categories.map((category) => `<div class="category"><span class="category-name">${category.name}</span></div>`).join('')}
        </div>
      </div>
    </div>
  </div>
  <div class="menu-list"> 
      <h2 class="menu-text"> List Menu </h2> 
      <div class="menu-container">
        <div class="food-menu">
          <h2 class="menu-heading">Foods</h2>
          <ul class="food-list">
            ${resto.menus.foods.map((food) => `<li class="food-item">${food.name}</li>`).join('')}
          </ul>
        </div>
        <div class="drink-menu">
          <h2 class="menu-heading">Drinks</h2>
          <ul class="drink-list">
            ${resto.menus.drinks.map((drink) => `<li class="drink-item">${drink.name}</li>`).join('')}
          </ul>
        </div>
      </div>
      </div>
`;

const createReviewTemplate = (resto) => `
    ${resto.customerReviews.map((review) => `
        <div class="swiper-slide slide">
            <p>${review.review}</p>
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="images/review_people.png" alt="review people picture">
                <div class="user-info">
                    <h3>${review.name}</h3>
                    <div class="stars">
                        <h3>${review.date}</h3>
                    </div>
                </div>
            </div>
        </div>
    `).join('')}`;
const createRestoItemTemplate = (resto) => `
<div class="resto-item">
    <div class="box" >
      <div class="image">
            <img src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" class="thumb-res" alt="${resto.name}">
          <span class="location">${resto.city}</span>
            </div>
          <div class="content">
            <h3 class="resto__title">${resto.name ? resto.name : '-'}</h3>
            <div class="icons">
              <div class="icon"> <i class="fas fa-map-marker-alt"></i> <span class="loc-res">${resto.city}</span>
              </div>
            </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <span class="rate-res">${resto.rating} || '-'</span>
            </div>
            <p class="desc-res">${resto.description} || '-'</p>
            <a class="btnd" href="#/detail/${resto.id}" tabindex="0" aria-label="Tombol details" title="Detail">
  <i class="fas fa-eye"></i>
  <span>Details</span>
</a>
        </div>
         </div>
         </div>
    `;
const createLikeButtonTemplate = () => `
  <button tabindex="0" aria-label="Tambahkan ke favorite?" id="likeButton" class="like-button" >
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" aria-label="Hapus dari favorite?" id="likeButton" class="like-button-un" >
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewTemplate,
};
