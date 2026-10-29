document.addEventListener('DOMContentLoaded', () => {
  // Print Resume Functionality
  const footerPrint = document.getElementById('footerPrint');
  if (footerPrint) {
    footerPrint.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  }

  // Smooth Scroll for Internal Anchor Links (if any)
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
