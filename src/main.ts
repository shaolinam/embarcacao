import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";

import "./assets/css/style.css";
import "./assets/css/tailwind.css";

import App from "./App.vue";

const pinia = createPinia();

const app = createApp(App);

/* ---------------- Estrutura para comunicação com a API ------------------ */

import AxiosAdapter from "./infra/AxiosAdapter";
import AxiosEmbarcacao from "./axios-auth";

import GeralHttpGateway from "./gateways/geralHttpGateway";

// import UserHttpGatewway from "./gateways/user/userHttpGateway";
// import EnrolmentHttpGateway from "./gateways/enrolment/enrolmentHttpGateway";
// import StudentHttpGateway from "./gateways/student/studentHttpGateway";

const httpClientEmbarcacao = new AxiosAdapter(AxiosEmbarcacao);

const geralGateway = new GeralHttpGateway(httpClientEmbarcacao);
app.provide("geralGateway", geralGateway);

/* ------------------------------------------------------------------------ */

app.use(pinia);
app.use(router);

app.mount("#app");
