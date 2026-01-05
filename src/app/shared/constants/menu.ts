interface NavBarMenu {
  url: string;
  title: string;
  icon?: string;
}

export const NON_AUTH_MENU: NavBarMenu[] = [
  {
    url: '',
    title: 'Home',
  },
  {
    url: 'login',
    title: 'Sign in',
  },
  {
    url: 'register',
    title: 'Sign up',
  },
];

export const AUTH_MENU: NavBarMenu[] = [
  {
    url: '',
    title: 'Home',
  },
  {
    url: 'settings',
    title: 'Settings/New article',
    icon: 'fa-solid fa-gear',
  },
];
