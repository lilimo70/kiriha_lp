const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__nav a');
const pageTopButton = document.querySelector('.page-top');

const setMenuOpen = (isOpen, returnFocus = false) => {
  if (!header || !menuButton || !mobileMenu) {
    return;
  }

  header.classList.toggle('header--menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  document.body.classList.toggle('menu-open', isOpen);

  if (!isOpen && returnFocus) {
    menuButton.focus();
  }
};

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!isOpen);
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false, true);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024 && menuButton?.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
  }
});

const updatePageTopButton = () => {
  if (!pageTopButton) {
    return;
  }

  const isVisible = window.scrollY > 600;
  pageTopButton.classList.toggle('page-top--visible', isVisible);
  pageTopButton.setAttribute('aria-hidden', String(!isVisible));
};

pageTopButton?.addEventListener('click', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? 'auto' : 'smooth'
  });
});

window.addEventListener('scroll', updatePageTopButton, { passive: true });
updatePageTopButton();
