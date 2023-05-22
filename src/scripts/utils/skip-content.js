function setSkipLinkHref() {
  const skipLink = document.querySelector('.skip-link');

  function isFavoritePage() {
    const url = window.location.href.toLowerCase();
    return url.includes('favorite');
  }

  function isDetailPage() {
    const url = window.location.href.toLowerCase();
    return url.includes('detail');
  }

  function scrollToElement(element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    element.setAttribute('tabindex', '-1');
    element.focus();
  }
  skipLink.addEventListener('click', (event) => {
    event.preventDefault();

    if (isFavoritePage()) {
      // Halaman favorit
      const restoFavoriteSection = document.getElementById('resto-favorite');
      scrollToElement(restoFavoriteSection);
    } else if (isDetailPage()) {
      // Halaman Detail
      const restoDetailSection = document.getElementById('resto-detail');
      scrollToElement(restoDetailSection);
    } else {
      // Halaman utama
      const restoSection = document.getElementById('resto');
      scrollToElement(restoSection);
    }
  });
  skipLink.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' || event.code === 'Space') {
      event.preventDefault();
      skipLink.click();
    }
  });
}

export default setSkipLinkHref;
