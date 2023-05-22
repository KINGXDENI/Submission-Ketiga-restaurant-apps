const DrawerInitiator = {
  init({
    button,
    drawer,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
      this._closeDrawerOnPageChange(drawer);
    });

    window.addEventListener('scroll', () => {
      this._closeDrawer(drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('active');
  },

  _closeDrawer(drawer) {
    drawer.classList.remove('active');
  },

  _closeDrawerOnPageChange(drawer) {
    const drawerItems = drawer.querySelectorAll('.navbar a');
    drawerItems.forEach((drawerItem) => {
      drawerItem.addEventListener('click', () => {
        drawer.classList.remove('active');
      });
      drawerItem.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          drawer.classList.remove('active');
        }
      });
    });
  },
};

export default DrawerInitiator;
