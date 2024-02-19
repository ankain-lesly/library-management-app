import axios from "axios";

const axiosClient = axios.create({
  // baseURL: `${process.env.API_ENDPOINT}/api`
  baseURL: "http://localhost:5050/api",
  headers: {
    // "Content-Type": "application/json",
    // Accept: "application/json",
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
  },
});

// axiosClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("access-modal");
//     config.headers.Authorization = `Bearer '${token}'`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const { response } = error;

//     if (response.status === 401) {
//       localStorage.removeItem("access-modal");
//     }
//     throw error;
//   }
// );

export default axiosClient;
