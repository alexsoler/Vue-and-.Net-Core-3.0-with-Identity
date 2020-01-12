/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '',
    // Relative to /src/views
    view: 'Dashboard',
    meta: {
      isPublic: true
    }
  },
  {
    path: '/user-profile',
    name: 'Perfil de Usuario',
    view: 'UserProfile'
  },
  {
    path: '/table-list',
    name: 'Lista de tablas',
    view: 'TableList'
  },
  {
    path: '/typography',
    name: 'Tipografía',
    view: 'Typography'
  },
  {
    path: '/icons',
    name: 'Iconos',
    view: 'Icons'
  },
  {
    path: '/maps',
    name: 'Mapas',
    view: 'Maps'
  },
  {
    path: '/notifications',
    name: 'Notificaciones',
    view: 'Notifications'
  }
]
