
  function checkScroll() {
    const logoScroll = document.querySelector('.logo-scroll');
    const partnerLogos = document.querySelector('.partner-logos');
    if (logoScroll.scrollWidth > partnerLogos.clientWidth) {
      logoScroll.style.animation = 'scroll 20s linear infinite';
    } else {
      logoScroll.style.animation = 'none';
    }
  }

  window.addEventListener('load', checkScroll);
  window.addEventListener('resize', checkScroll);


