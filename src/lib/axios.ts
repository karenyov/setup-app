import axios from "axios";

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333'
});

// export const api = axios.create({
//   baseURL: 'http://192.168.15.11:3333'
// });