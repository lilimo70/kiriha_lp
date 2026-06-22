const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__nav a');
const pageTopButton = document.querySelector('.page-top');

const isMenuOpen = () => menuButton?.getAttribute('aria-expanded') === 'true';

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

const updateHeaderState = () => {
  if (!header) {
    return;
  }

  const isScrolled = window.innerWidth >= 1024 && window.scrollY > 40;
  header.classList.toggle('header--scrolled', isScrolled);
};

const updatePageTopButton = () => {
  if (!pageTopButton) {
    return;
  }

  const isVisible = window.scrollY > 600;
  pageTopButton.classList.toggle('page-top--visible', isVisible);
  pageTopButton.setAttribute('aria-hidden', String(!isVisible));
};

const updateScrollState = () => {
  updateHeaderState();
  updatePageTopButton();
};

menuButton?.addEventListener('click', () => {
  setMenuOpen(!isMenuOpen());
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isMenuOpen()) {
    setMenuOpen(false, true);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024 && isMenuOpen()) {
    setMenuOpen(false);
  }

  updateHeaderState();
});

pageTopButton?.addEventListener('click', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? 'auto' : 'smooth'
  });
});

window.addEventListener('scroll', updateScrollState, { passive: true });
updateScrollState();
