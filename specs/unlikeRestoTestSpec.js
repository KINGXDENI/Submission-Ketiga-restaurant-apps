import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import createLikeButtonPresenterWithResto from './helpers/testFactories';

describe('Unliking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({
      id: 1,
    });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus dari favorite?"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="Tambahkan ke favorite?"]'))
      .toBeFalsy();
  });
  it('should be able to remove liked resto from the list', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });
    await FavoriteRestoIdb.deleteResto(1);
    document.querySelector('[aria-label="Hapus dari favorite?"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });
    // hapus dulu resto dari daftar resto yang disukai
    await FavoriteRestoIdb.deleteResto(1);
    // kemudian, simulasikan pengguna menekan widget batal menyukai resto
    document.querySelector('[aria-label="Hapus dari favorite?"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
