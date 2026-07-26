document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('[data-nav-toggle]');

  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = btn.closest('nav');
      if (!nav) return;
      const links = nav.querySelector('[data-nav-links]');
      if (!links) return;

      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));

      if (!expanded) {
        // Show the mobile menu
        links.style.display = 'flex';
        links.style.flexDirection = 'column';
        links.style.position = 'absolute';
        links.style.top = `${nav.offsetHeight}px`;
        links.style.right = '1rem';
        links.style.left = '1rem';
        links.style.background = getComputedStyle(document.body).backgroundColor || '#ffffff';
        links.style.padding = '1rem';
        links.style.borderRadius = '0.5rem';
        links.style.zIndex = '60';
      } else {
        // Hide the mobile menu
        links.style.display = '';
        links.style.flexDirection = '';
        links.style.position = '';
        links.style.top = '';
        links.style.right = '';
        links.style.left = '';
        links.style.background = '';
        links.style.padding = '';
        links.style.borderRadius = '';
        links.style.zIndex = '';
      }
    });
  });
});