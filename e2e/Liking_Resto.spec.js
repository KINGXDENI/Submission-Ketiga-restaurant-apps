Feature('Likeing Resto');

Scenario('Check if favorite page is empty', async ({ I }) => {
  I.amOnPage('/#/favorite');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.seeElement('.no-favorite-message');
  I.see('Belum ada resto favorite', '.no-favorite-message');
});

Scenario('Add and Delete Resto', async ({
  I,
}) => {
  I.amOnPage('/');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.click('#btn_explore');
  I.seeElement('.resto__title');
  const restaurantTitl = locate('.resto__title').first();
  I.click(restaurantTitl);
  I.seeElement('.btnd');
  I.click('.btnd');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.amOnPage('/#/favorite');
  await new Promise((resolve) => setTimeout(resolve, 4000));
  I.seeElement('.resto__title');
  const restaurantTitle = locate('.resto__title').first();
  I.click(restaurantTitle);
  I.seeElement('.btnd');
  I.click('.btnd');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.seeElement('.swal2-confirm');
  I.click('.swal2-confirm');
  await new Promise((resolve) => setTimeout(resolve, 3000));
});
Scenario('Add a review', async ({
  I,
}) => {
  I.amOnPage('/');
  I.click('#btn_explore');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.seeElement('.resto__title');
  const restaurantTitle = locate('.resto__title').first();
  I.click(restaurantTitle);
  I.seeElement('.btnd');
  I.click('.btnd');
  I.seeElement('#name-review');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  I.fillField('#name-review', 'Deni');
  I.seeElement('#review-isi');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  I.fillField('#review-isi', 'Mantap');
  I.seeElement('.btn-review');
  I.click('.btn-review');
  await new Promise((resolve) => setTimeout(resolve, 5000));
});
