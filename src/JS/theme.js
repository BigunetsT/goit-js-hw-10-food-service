const refs = {
  switchToggle: document.querySelector('#theme-switch-toggle'),
  bodyRef: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
LightTheme();

howBodyTheme();

function LightTheme() {
  refs.bodyRef.classList.add(Theme.LIGHT);
  refs.bodyRef.classList.remove(Theme.DARK);
  refs.switchToggle.checked = false;
}
function DarkTheme() {
  refs.bodyRef.classList.add(Theme.DARK);
  refs.bodyRef.classList.remove(Theme.LIGHT);
  refs.switchToggle.checked = true;
}

function handleSwitchToggle(event) {
  if (!event.currentTarget.checked) {
    LightTheme();
  } else {
    DarkTheme();
  }
  localStorage.setItem('checked', event.currentTarget.checked);
}
function howBodyTheme() {
  const savedBodyTheme = localStorage.getItem('checked');
  if (savedBodyTheme === 'true') {
    DarkTheme();
  } else {
    LightTheme();
  }
}
refs.switchToggle.addEventListener('change', handleSwitchToggle);
