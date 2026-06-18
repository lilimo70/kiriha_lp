const faqButtons = document.querySelectorAll('.faq-item__question');

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const answer = item.querySelector('.faq-item__answer');
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', String(!isOpen));
    item.classList.toggle('faq-item--open', !isOpen);
    answer.style.maxHeight = isOpen ? '0px' : `${answer.scrollHeight}px`;
  });
});
