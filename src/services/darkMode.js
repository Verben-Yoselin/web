export function getPreferredColorScheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyColorScheme(scheme) {
  const root = document.documentElement;
  if (scheme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

export function initializeColorScheme() {
  const preferredScheme = getPreferredColorScheme();
  applyColorScheme(preferredScheme);
  return preferredScheme;
}