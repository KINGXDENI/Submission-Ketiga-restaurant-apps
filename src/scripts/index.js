import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
import '../styles/responsive.scss';
import './utils/header-footer-cstom';
import App from './views/app';
import swRegister from './utils/sw-register';
import {
  setNavButtonFunctionality,
} from './utils/button-func';
import setSkipLinkHref from './utils/skip-content';

const app = new App({
  button: document.querySelector('#menu-btn'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#konten-utama'),
});

window.addEventListener('hashchange', () => {
  setNavButtonFunctionality();
  setSkipLinkHref();
  app.renderPage();
});

window.addEventListener('load', () => {
  setNavButtonFunctionality();
  setSkipLinkHref();
  app.renderPage();
  swRegister();
});
