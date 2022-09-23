import { FC, MouseEventHandler, ReactElement } from 'react';

const setTheme = (themeName: string) => {
  localStorage.setItem('supreme-taskos-theme', themeName);
  document.documentElement.setAttribute('data-theme', themeName);
};

const getDocumentTheme = () => {
  return document.documentElement.hasAttribute('data-theme') && document.documentElement.getAttribute('data-theme');
};

const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = getDocumentTheme();
const storedTheme = localStorage.getItem('supreme-taskos-theme');

const isDefaultDark = storedTheme === 'dark' || currentTheme === 'dark' || (storedTheme === null && currentTheme === null && prefersDark);

const initTheme = () => {
  if (isDefaultDark) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
};

const toggleTheme: MouseEventHandler<HTMLButtonElement> = () => {
  const isDark = getDocumentTheme() === 'dark';
  if (isDark) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
};

initTheme();

const ThemeSwitcher: FC = (): ReactElement => {
  return <button className='theme-switcher' aria-label='Changer theme couleur' onClick={toggleTheme}></button>;
};

export default ThemeSwitcher;
