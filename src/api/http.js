import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

let http = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
});

// Force put Bearer and token in header
http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default http;
