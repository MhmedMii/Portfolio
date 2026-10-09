// Mobile navigation: focus, keyboard controls and background scroll locking.
export function initNav() {
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  if (!burger || !drawer) return;

  function close() {
    drawer.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('dialog-open');
    burger.focus({ preventScroll: true });
  }

  burger.addEventListener('click', () => {
    drawer.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('dialog-open');
    drawer.querySelector('button').focus();
  });
  drawer.addEventListener('click', event => {
    if (event.target.closest('[data-close]')) close();
  });
  drawer.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = [...drawer.querySelectorAll('button, a[href]')];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}
