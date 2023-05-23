class FavoriteRestoShowPresenter {
  constructor({
    view,
    favoriteResto,
  }) {
    this._view = view;
    this._favoriteResto = favoriteResto;

    this._showFavoriteResto();
  }

  async _showFavoriteResto() {
    const restos = await this._favoriteResto.getAllResto();
    this._displayResto(restos);
  }

  _displayResto(restos) {
    this._view.showFavoriteResto(restos);
  }
}

export default FavoriteRestoShowPresenter;
