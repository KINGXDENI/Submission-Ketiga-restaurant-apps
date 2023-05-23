Feature('Liking Resto');
Before((I) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked restos', (I) => {
  I.seeElement('#query');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', (I) => {
  I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto__title a');
  I.click(locate('.resto__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
});
