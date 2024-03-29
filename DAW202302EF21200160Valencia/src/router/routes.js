
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  {
    path: '/registro',
    component: () => import('components/IngresoRegistro/RegistroUsuario.vue')
  },

  {
    path: '/InicioSesion',
    component: () => import('components/IngresoRegistro/RegistroUsuario.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
