import axios from "axios";
import {
  AxiosRequestConfig,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";

// import { MutationType } from './store/mutations';
// import { useStore } from './store';
// const store = useStore();

// const url = import.meta.env.VITE_BASE_URL_API;

// console.log('MODE: ', import.meta.env.MODE)
// console.log('PROD: ', import.meta.env.PROD)
// console.log('URL: ', url)

const conf: AxiosRequestConfig = {
  // baseURL: url,
  timeout: 1000 * 60 * 2,
};

const HTTP: AxiosInstance = axios.create(conf);

HTTP.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("tokenInscricaoSemed");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

HTTP.interceptors.response.use(
  (config) => config,
  (error: AxiosError) => {
    // console.log("Axios - Error response: ", error)
    // storeGeral.SetLoading(false);
    if (error.response && error.response.status === 403) {
      console.log("adm/showModalError", "Acesso não permitido!");
    }
    if (error.response && error.response.status === 500) {
      console.log(
        "adm/showModalError",
        "Servidor não responde! Tente mais tarde.",
      );
    }
    if (
      (error.response && error.response.status === 408) ||
      error.code === "ECONNABORTED"
    ) {
      const message = "Tempo excedido para obter os dados! Tente novamente.";
      console.log("adm/showModalError", message);
    }
    if (error.response && error.response.status === 401) {
      console.log("adm/logout", "usuario nao logado !");
    }
    if (!error.response) {
      console.log("adm/showModalError", "Falha de conexão! Tente novamente.");
      console.log("Error : ", error);
    }
    return Promise.reject(error);
  },
);

export default HTTP;
