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
            },
            {
              path: '/dangnhap',
              name: 'Login',
              component: () => import("@/components/client/Login")
            },
            {
              path: '/user',
              component: () => import("@/components/client/user/Index"),
              children:
              [
                {
                  path: 'info',
                  name: 'UserInfo',
                  component: () => import("@/components/client/user/Info")
                },
                {
                  path: '',
                  name: 'UserMain',
                  component: () => import("@/components/client/user/Main")
                },
                {
                  path: 'topic',
                  name: 'UserTopic',
                  component: () => import("@/components/client/user/Topic")
                },
                {
                  path: 'lesson/:id',
                  name: 'UserLesson',
                  component: () => import("@/components/client/user/Lesson")
                },
                {
                  path: 'quiz/:id',
                  name: 'Quiz',
                  component: () => import("@/components/client/user/Quiz")
                },
              ]
            }
          ]
      },
      {
        path: '/logout',
        component: () => import("@/components/client/Logout"),
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