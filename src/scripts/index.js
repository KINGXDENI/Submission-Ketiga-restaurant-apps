import '../styles/style.scss';
import '../styles/responsive.scss';
import './utils/header-footer-cstom';
import './vendor';
import App from './views/app';
import swRegister from './utils/sw-register';
import {
  setNavButtonFunctionality,
} from './utils/button-func';
import setSkipLinkHref from './utils/skip-content';

const START = 4;
const NUMBER_OF_IMAGES = 50;
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
