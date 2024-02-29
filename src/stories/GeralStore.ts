import { defineStore } from "pinia";
import { reactive } from "vue";

import IModalMessage from "./IModalMessage";

// import { IConfigGeral } from "../domain/entities/IConfigGeral";
// import IStudent from "../modules/student/interfaceStudent";
// import IUser from "../modules/users/interfaceUser";
// import ICountry from "../modules/geral/interfaceCountry";

// const MUNICIPAL = "3";

// const initialState = {
//   anoInscricao: 0,
//   redeEnsino: MUNICIPAL,
//   codMunicipio: 38,
//   sequencia: 1,
//   origemInscricao: 3,
//   resultadoSorteio: 0,
// };

export const GeralStore = defineStore("geralStore", () => {
   const state = reactive({
      // configGeral: initialState,
      showMenuMobile: false,
      // showModalConfirmEnrolment: false,
      // antigo
      loading: false,
      confirm: false,
      message: {
         isOn: false,
         type: 0,
         titule: "",
         body: "",
         precisaAtualizar: false,
      } as IModalMessage,
      token: "",
      selectedMenu: 0,
      // user: {
      //   id: 0,
      //   nome: "",
      //   cpf: "",
      //   email: "",
      //   senha: "",
      //   dataNascimento: "",
      //   sexo: "",
      //   uf: "",
      //   codigoMunicipio: 0,
      //   medidaProtetiva: " ",
      //   maeTrabalhadora: " ",
      //   telefone: "",
      // } as IUser,
   });

   /* GETTERS */

   const setShowMenuMobile = (value: boolean) => {
      state.showMenuMobile = value;
   };

   const getShowMenuMobile = () => {
      return state.showMenuMobile;
   };

   // const setShowModalConfirmEnrolment = (value: boolean) => {
   //   state.showModalConfirmEnrolment = value;
   // };

   // const getShowModalConfirmEnrolment = () => state.showModalConfirmEnrolment;

   /*  ACTIONS  */

   // const Logout = async () => {
   //   await SetToken("");
   // };

   // const SetToken = (value: string): Promise<void> => {
   //   return new Promise((resolve) => {
   //     state.token = value;
   //     if (!value) {
   //       localStorage.removeItem("tokenInscricaoSemed");
   //       localStorage.removeItem("selectedStudentInscricaoSemed");
   //       localStorage.removeItem("selectedMenuInscricaoSemed");
   //     } else {
   //       localStorage.setItem("tokenInscricaoSemed", value);
   //     }
   //     resolve();
   //   });
   // };

   const SetLoading = (value: boolean) => {
      state.loading = value;
   };

   // const SetSelectedMenu = (menu: number): Promise<void> => {
   //   return new Promise((resolve) => {
   //     state.selectedMenu = menu;
   //     if (menu == 0) {
   //       localStorage.removeItem("selectedMenuInscricaoSemed");
   //     } else {
   //       localStorage.setItem("selectedMenuInscricaoSemed", menu.toString());
   //     }
   //     resolve();
   //   });
   // };

   const SetMessage = (message: IModalMessage) => {
      state.message = message;
   };

   // const Login = (token: string): Promise<void> => {
   //   return new Promise(async (resolve) => {
   //     if (token) {
   //       await SetToken(token);
   //     }
   //     resolve();
   //   });
   // };

   // GETTERS

   // const getToken = () => {
   //   if (state.token) return state.token;
   //   return localStorage.getItem("tokenInscricaoSemed") || "";
   // };

   const isLoading = () => {
      return state.loading;
   };

   // const user = () => {
   //   return state.user;
   // };

   const getMessage = (): IModalMessage => {
      return state.message;
   };

   // const getSelectedMenu = () => {
   //   if (state.selectedMenu) return state.selectedMenu;
   //   return (
   //     parseInt(localStorage.getItem("selectedMenuInscricaoSemed") || "1") || 1
   //   );
   // };

   const getSelectedStudent = () => {
      const selected =
         localStorage.getItem("selectedStudentInscricaoSemed") || "{}";
      const selectedStudent = JSON.parse(selected);
      return selectedStudent || {};
   };

   const getConfirmQuestion = () => {
      return state.confirm;
   };

   return {
      state,
      // Getters
      getShowMenuMobile,
      setShowMenuMobile,
      // setShowModalConfirmEnrolment,
      // getShowModalConfirmEnrolment,
      // getToken,
      isLoading,
      // user,
      confirm,
      // config,
      getMessage,
      // getSelectedMenu,
      getSelectedStudent,
      getConfirmQuestion,
      // country,
      // Actions
      // Login,
      // Logout,
      // SetToken,
      SetLoading,
      // SetSelectedMenu,
      SetMessage,
   };
});
