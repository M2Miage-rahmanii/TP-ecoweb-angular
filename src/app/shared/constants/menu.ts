interface NavBarMenu {
  url: string;
  title: string;
  icon?: string;
}

export const NON_AUTH_MENU: NavBarMenu[] = [
  {
    url: '',
    title: 'Retour à accueil principal',
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
    title: 'Retour à accueil principal',
  },
  {
    url: 'settings',
    title: 'Configuration de votre compte/Création d un nouvel article',
    icon: 'fa-solid fa-gear',
  },
];
