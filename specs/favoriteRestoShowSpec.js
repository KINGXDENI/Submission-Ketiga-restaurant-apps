import FavoriteRestoSearchView from '../src/scripts/utils/favorite-resto-search-view';
import FavoriteRestoShowPresenter from '../src/scripts/utils/favorite-resto-show-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Showing all favorite restos', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restos have been liked', () => {
    it('should ask for the favorite restos', () => {
      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });

      expect(favoriteResto.getAllResto).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restos have been liked', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length)
          .toEqual(0);

        done();
      });

      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
      favoriteResto.getAllResto.and.returnValues([]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });

  describe('When favorite restos exist', () => {
    it('should show the restos', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item').length).toEqual(2);
        done();
      });

      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
      favoriteResto.getAllResto.and.returnValues([{
        id: 11,
        name: 'A',
        rating: 3,
        description: 'Sebuah resto A',
      },
      {
        id: 22,
        name: 'B',
        rating: 4,
        description: 'Sebuah resto B',
      },
      ]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });
});
