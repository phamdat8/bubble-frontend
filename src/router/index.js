import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export const router = new Router({
  routes : 
  [
      {
          path: '',
          component: () => import("@/components/client/Index"),
          children: 
          [
            {
                path: '',
                name: "ClientHome",
                component: () => import("@/components/client/Home")
            },
            {
              path: '/dangky',
              name: 'Register',
              component: () => import("@/components/client/Register")
            }
          ]
      },
      {
        path: '/admin',
        component: () => import("@/components/admin/Index"),
        children: 
        [
          {
              path: '',
              name: "AdminHome",
              component: () => import("@/components/admin/Home")
          }
        ]
      }
  ]
})