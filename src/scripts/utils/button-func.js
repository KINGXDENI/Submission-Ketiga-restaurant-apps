import Swal from 'sweetalert2';

function setHomeButtonFunctionality() {
  // Declar Button
  const exploreButton = document.getElementById('btn_explore');
  const bookingButton = document.getElementById('btn_booking');
  // hero button
  exploreButton.addEventListener('click', () => {});
  exploreButton.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault();
      exploreButton.click();
    }
  });

  // bookingbutoon
  bookingButton.addEventListener('click', () => {
    // ambil nilai input dari form
    const name = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const tanggal = document.getElementById('tanggal').value;
    const jumlahOrang = document.getElementById('jmlh_org').value;
    const spesialReq = document.getElementById('spes_req').value;

    // validasi input
    if (name === '' || email === '' || tanggal === '' || jumlahOrang === '' || spesialReq === '') {
      Swal.fire({
        icon: 'error',
        title: 'Please fill in all the fields!',
        showConfirmButton: false,
        timer: 2500,
        customClass: {
          container: 'my-swal-container',
          popup: 'my-swal-popup',
          title: 'my-swal-title',
        },
      });
    } else {
      // tampilkan pesan sukses
      Swal.fire({
        icon: 'success',
        title: 'Your reservation has been booked! Thank you!',
        showConfirmButton: false,
        timer: 2500,
        customClass: {
          container: 'my-swal-container',
          popup: 'my-swal-popup',
          title: 'my-swal-title',
        },
      });
    }
  });

  bookingButton.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' || event.code === 'Space') {
      event.preventDefault();
      bookingButton.click();
    }
  });
}

function setNavButtonFunctionality() {
  const logo = document.querySelector('.logo');
  const navbar = document.querySelector('.navbar');
  logo.addEventListener('click', () => {});

  logo.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault();
      logo.click();
      logo.blur();
    }
  });

  navbar.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' || event.code === 'Space') {
      event.preventDefault();
      event.target.click();
      event.target.blur();
    }
  });
}

export {
  setHomeButtonFunctionality,
  setNavButtonFunctionality,
};
