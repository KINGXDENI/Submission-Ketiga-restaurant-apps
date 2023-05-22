class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="" class="skip-link">Skip to content</a>
      <header class="header">
        <a href="/" class="logo" tabindex="0">
          <img src="images/restaurant3.png" class="logo" id="logo" width="44" height="44" alt="Dicoding Food">
          Dicoding Food
        </a>
        <div class="icons">
          <button id="menu-btn" type="button" class="fas fa-bars fa-3x" tabindex="0" aria-label="tombol menu"></button>
        </div>
        <nav class="navbar" id="navigationDrawer" aria-label="Navigasi utama">
          <a href="#/home" tabindex="0" aria-label="navigasi home">home</a>
          <a href="#/favorite" tabindex="0" aria-label="navigasi favorite">Favorite</a>
          <a href="https://github.com/KINGXDENI" tabindex="0" target="_blank" rel="noopener noreferrer"
            aria-label="navigasi about us">About Us</a>
        </nav>
      </header>
    `;
  }
}

class FooterElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <small>My Submission Dicoding &copy; 2023 - Muh Deni Setiawan</small>
      </footer>
    `;
  }
}

customElements.define('custom-header', HeaderElement);
customElements.define('custom-footer', FooterElement);
