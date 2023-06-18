import axios, { AxiosInstance } from 'axios';

// interface CustomHeaders extends AxiosHeaders {
//   Authorization?: string;
// }



const Api: AxiosInstance = axios.create({
    baseURL: 'http://192.168.0.228:8888/',
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
    },
  });



// Api.interceptors.request.use(async (config: AxiosRequestConfig<any>) => {
//     const JSONToken = await AsyncStorage.getItem('token');
//     if (!JSONToken) return config;
//     const token = JSON.parse(JSONToken);
//     console.log('thetoken', token);
//     const headers: CustomHeaders = {
//       ...(config.headers as CustomHeaders),
//       Authorization: `Bearer ${token}`,
//     };
//     return {
//       ...config,
//       headers: headers,
//     };
//   });

export default Api;