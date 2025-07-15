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
