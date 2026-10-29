document.addEventListener('DOMContentLoaded', () => {
  // Print Resume Functionality
  const printButtons = [document.getElementById('printBtn'), document.getElementById('footerPrint')];
  
  printButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.print();
      });
    }
  });

  // Smooth Scroll & Active Nav Tracking
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});