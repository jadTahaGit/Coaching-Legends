const navIconEL = document.querySelector('.navWrapper');
const closeIconEl = document.querySelector('.closeIcon');
const navbar = document.querySelector('.Navbar');
console.log(navbar);
// const portfolioSectionEl = document.querySelector('body');

const openNavbar = () => {
  console.log('Hey');
  navbar.style.display = 'flex';
  navIconEL.style.display = 'none';
  closeIconEl.style.display = 'block';
  //   portfolioSectionEl.style.marginTop = '32rem';
};

const closeNavbar = () => {
  navbar.style.display = 'none';
  closeIconEl.style.display = 'none';
  navIconEL.style.display = 'block';
  //   portfolioSectionEl.style.marginTop = '0';
};
