import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button,
    drawer,
    content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._previousUrl = null;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (page && page.render) {
      if (this._isSamePage(url)) {
        this._content.innerHTML = await page.render();
        await page.afterRender();
      } else {
        this._showLoadingIndicator();

        try {
          await this._wait(500);
          const renderedContent = await page.render();
          this._content.innerHTML = renderedContent;
          await page.afterRender();
        } catch (error) {
          this._showErrorPage(error);
          console.error('Failed to render page:', error);
        }

        this._hideLoadingIndicator();
      }
    } else {
      this._showErrorPage();
    }
    window.scrollTo(0, 0);

    this._previousUrl = url;
  }

  _isSamePage(url) {
    return this._previousUrl === url;
  }

  _wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  _showLoadingIndicator() {
    this._content.innerHTML = `
      <div class="loading-indicator">
        <div class="loading-indicator__circle"></div>
        <span class="loading-indicator__text">Loading...</span>
      </div>
    `;
  }

  _hideLoadingIndicator() {
    const loadingIndicator = this._content.querySelector('.loading-indicator');
    if (loadingIndicator) {
      loadingIndicator.remove();
    }
  }

  _showErrorPage(error) {
    let errorMessage = 'Oops! Page not found.';
    if (error) {
      errorMessage = 'Failed to load the page.';
    }

    this._content.innerHTML = `
      <div class="error-page">
        <h2 class="error-page__title">404</h2>
        <p class="error-page__message">${errorMessage}</p>
      </div>
    `;
  }
}

export default App;
