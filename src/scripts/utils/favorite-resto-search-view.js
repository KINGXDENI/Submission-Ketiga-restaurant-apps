import { createRestoItemTemplate } from '../views/templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
         <div class="content">
       <input id="query" type="text">
           <h2 class="content__heading">Your Liked Resto</h2>
           <div id="restos" class="restos">
           </div>
       </div>
        `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showResto(restos) {
    this.showFavoriteResto(restos);
  }

  showFavoriteResto(restos = []) {
    let html;
    if (restos && restos.length) {
      html = restos.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('restos').innerHTML = html;

    document.getElementById('restos').dispatchEvent(new Event('restos:updated'));
  }

  _getEmptyRestoTemplate() {
    return '<div class="Reso-item__not__found Resos__not__found">Tidak ada restauran untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
