import path from 'node:path';
import url from 'node:url';

export function getRoutes(themeDir = path.dirname(url.fileURLToPath(import.meta.url))) {
  return [
    {
      path: '/',
      name: 'home',
      component: path.resolve(themeDir, 'pages/Home.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: path.resolve(themeDir, 'pages/Dashboard.vue'),
    },
    {
      path: '/markets',
      name: 'markets',
      component: path.resolve(themeDir, 'pages/Markets.vue'),
    },
    {
      path: '/scenarios',
      name: 'scenarios',
      component: path.resolve(themeDir, 'pages/Scenarios.vue'),
    },
    {
      path: '/assets',
      name: 'assets',
      component: path.resolve(themeDir, 'pages/Assets.vue'),
    },
    {
      path: '/positions',
      name: 'positions',
      component: path.resolve(themeDir, 'pages/Positions.vue'),
    },
    {
      path: '/compliance',
      name: 'compliance',
      component: path.resolve(themeDir, 'pages/Compliance.vue'),
    },
    {
      path: '/reports',
      name: 'reports',
      component: path.resolve(themeDir, 'pages/Reports.vue'),
    },
  ];
}
