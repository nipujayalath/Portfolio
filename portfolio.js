const navLinks = document.querySelectorAll('header nav a');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

const activePage = () => {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
}

navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();
      
      link.classList.add('active');
      if (window.innerWidth <= 600) {
        navbar.classList.remove('active');
      }
    }
  });
});

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

const profileBtns = document.querySelectorAll('.profile-btn');

profileBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const profileDetails =document.querySelectorAll('.profile-details');

    profileBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');

    profileDetails.forEach(details => {
      details.classList.remove('active');
    });
    profileDetails[idx].classList.add('active');
  });
});
