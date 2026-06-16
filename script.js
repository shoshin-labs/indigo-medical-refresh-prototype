const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

for (const form of document.querySelectorAll('[data-demo-form]')) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('[data-form-status]');
    if (!status) return;
    status.textContent = 'Demo only: in a live build this message would be sent to the practice team with confirmation shown here.';
  });
}
