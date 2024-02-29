import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from "../components/layout/Home.vue";
// import { defineAsyncComponent } from "vue";

const routes: Array<RouteRecordRaw> = [
   // { path: '/', component: defineAsyncComponent(() => import('../views/Home.vue')) },
   {
      path: "/",
      name: "Home",
      component: () => import("../components/layout/Home.vue"),
   },
   // {
   //   path: "/resultado",
   //   name: "ResultFinal",
   //   component: () => import("../views/ResultFinal.vue"),
   // },
   // {
   //   path: "/login",
   //   name: "Login",
   //   component: () => import("../views/login/Login.vue"),
   // },
   // {
   //   path: "/esquecisenha",
   //   name: "EsqueciSenha",
   //   component: () => import("../views/login/ForgetPassword.vue"),
   // },
   // {
   //   path: "/responsavel/cadastrar",
   //   name: "CadastrarResponsavel",
   //   component: () => import("../views/user/UserNew.vue"),
   // },
   // {
   //   path: "/cadastrar/confirmacao",
   //   name: "Confirmacao",
   //   component: () => import("../views/user/CardConfirmed.vue"),
   // },
   // {
   //   path: "/confirmar-recuperar-senha",
   //   name: "RecuperarSenha",
   //   component: () => import("../views/user/UserRecoverPassword.vue"),
   // },
   // {
   //   path: "/principal",
   //   name: "Principal",
   //   component: () => import("../views/main/Principal.vue"),
   //   meta: {
   //     requiresAuth: true,
   //   },
   //   children: [
   //     {
   //       path: "home",
   //       name: "PrincipalHome",
   //       component: () => import("../views/user/PrincipalUser.vue"),
   //       meta: {
   //         requiresAuth: true,
   //       },
   //     },
   //     {
   //       path: "/responsavel/alterar/senha",
   //       name: "AlterarSenha",
   //       component: () => import("../views/user/UserUpdatePassword.vue"),
   //       meta: {
   //         requiresAuth: true,
   //       },
   //     },
   //     {
   //       path: "/aluno/listar",
   //       name: "MeusAlunos",
   //       component: () => import("../views/student/myStudents.vue"),
   //       meta: {
   //         requiresAuth: true,
   //       },
   //     },
   //     {
   //       path: "/aluno/gemeos",
   //       name: "Gemeos",
   //       component: () => import("../views/student/gemini/Index.vue"),
   //       meta: {
   //         requiresAuth: true,
   //       },
   //       children: [
   //         {
   //           path: "/aluno/gemeos/associar",
   //           name: "AssociateGemini",
   //           component: () => import("../views/student/gemini/Associate.vue"),
   //           meta: {
   //             requiresAuth: true,
   //           },
   //         },
   //         {
   //           path: "/aluno/gemeos/listar",
   //           name: "ListGemini",
   //           component: () => import("../views/student/gemini/List.vue"),
   //           meta: {
   //             requiresAuth: true,
   //           },
   //         },
   //       ],
   //     },
   //     {
   //       path: "/aluno/buscar",
   //       name: "BuscarAluno",
   //       component: () => import("../views/student/searchStudent.vue"),
   //       meta: {
   //         requiresAuth: true,
   //       },
   //     },
   //     {
   //       path: "/aluno/associar",
   //       name: "AssociarAluno",
   //       component: () => import("../views/student/foundStudent.vue"),
   //     },
   //     {
   //       path: "/responsavel/aluno/novo",
   //       name: "CadastrarAluno",
   //       component: () => import("../views/student/newStudent.vue"),
   //       meta: {
   //         requiresAuth: true,
   //       },
   //     },
   //     {
   //       path: "/responsavel/aluno/consultar",
   //       name: "ConsultarAluno",
   //       component: () => import("../views/student/detailStudent.vue"),
   //       meta: {
   //         requiresAuth: true,
   //       },
   //     },
   //     {
   //       path: "/responsavel/alterar",
   //       name: "AlterarResponsavel",
   //       component: () => import("../views/user/UserUpdate.vue"),
   //       meta: {
   //         requiresAuth: true,
   //       },
   //     },
   //     {
   //       path: "/responsavel/aluno/inscricao",
   //       name: "InscreverAluno",
   //       component: () => import("../views/student/registration.vue"),
   //       meta: {
   //         requiresAuth: true,
   //       },
   //     },
   //     {
   //       path: "/sorteio-numeros",
   //       name: "SorteioNumero",
   //       component: () => import("../views/raffle/SorteioNumeros.vue"),
   //       meta: {
   //         requiresAuth: true,
   //       },
   //     },
   //     {
   //       path: "/sorteio-classificacao",
   //       name: "SorteioClassificacao",
   //       component: () => import("../views/raffle/SorteioClassificacao.vue"),
   //       meta: {
   //         requiresAuth: true,
   //       },
   //     },
   //   ],
   // },
   // {
   //   path: "/about",
   //   name: "About",
   //   component: () =>
   //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
   // },
   {
      path: "/:pathMatch(.*)*",
      redirect: { name: "Home" },
   },
];

// history: createWebHistory(import.meta.env.VITE_BASE_URL),
const router = createRouter({
   history: createWebHistory("/"),
   routes,
});

router.beforeEach((to, _from, next) => {
   if (to.matched.some((record) => record.meta.requiresAuth)) {
      const token = localStorage.getItem("tokenInscricaoSemed");
      // console.log("beforeEach Router Token: ", token)
      if (!token) {
         next({
            path: "/login",
            query: { redirect: to.fullPath },
         });
      } else {
         next();
      }
   } else {
      next(); // make sure to always call next()!
   }
});

export default router;
