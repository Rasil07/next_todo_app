import axios from 'axios'
import { BASE_URL } from '../constants/api'




const axiosInstance = axios.create({
    baseURL: BASE_URL,
   headers:{
       "Access-Control-Allow-Origin":"*",
       "Access-Control-Request-Headers":"*"

   }
  });
  
  axiosInstance.interceptors.request.use(
    async config => {
     
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
  
  export default axiosInstance;
