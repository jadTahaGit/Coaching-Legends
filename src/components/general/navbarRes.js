export const openNavbar = (nav, navList, navIcon, closeBtn) => {
  nav.style.display = 'flex';
  nav.style.flexDirection = 'column';
  navList.style.display = 'flex';
  navList.style.flexDirection = 'column';
  navList.style.gap = '1rem';
  navIcon.style.display = 'none';
  closeBtn.style.display = 'block';
  //   portfolioSectionEl.style.marginTop = '32rem';
};

export const closeNavbar = (nav, navList, navIcon, closeBtn) => {
  navList.style.flexDirection = 'row';
  navList.style.display = 'flex';
  nav.style.flexDirection = 'row';
  nav.style.display = 'none';
  closeBtn.style.display = 'none';
  navIcon.style.display = 'block';
  //   portfolioSectionEl.style.marginTop = '0';
};
