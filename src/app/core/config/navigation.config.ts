export interface Config {
  path: string;
  name: string;
}

export const NAVIGATION_CONFIG: Config[] = [
  {
    path: '/home',
    name: 'Home',
  },
  {
    path: '/services',
    name: 'Services',
  },
  {
    path: '/experience',
    name: 'Experience',
  },
];
