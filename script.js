(() => {
  const button = document.getElementById('theme-toggle');
  const icon = button.querySelector('.theme-icon');
  const label = button.querySelector('.theme-label');
  const meta = document.querySelector('meta[name="theme-color"]');

  function setTheme(dark) {
    document.body.classList.toggle('dark', dark);
    icon.textContent = dark ? '☀' : '☾';
    label.textContent = dark ? 'Light mode' : 'Dark mode';
    button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    meta.setAttribute('content', dark ? '#0c1422' : '#f5f8fc');
    try { localStorage.setItem('dilxushbek-theme', dark ? 'dark' : 'light'); } catch (_) { /* Storage can be unavailable for local files. */ }
  }

  let saved;
  try { saved = localStorage.getItem('dilxushbek-theme'); } catch (_) { /* Use the light theme when storage is unavailable. */ }
  setTheme(saved === 'dark');
  button.addEventListener('click', () => setTheme(!document.body.classList.contains('dark')));
})();

