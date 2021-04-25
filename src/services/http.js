import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const http = axios.create({
    baseURL: 'https://api.mesto.co/v1',
  });

http.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken') || undefined;

    if (token) {
      config.headers.Authorization = token && `Bearer ${token}`;
    }

    config.headers['X-Request-Id'] = uuidv4();

    return config;
  });

const refreshAuthLogic = (failedRequest) => http.post('/auth/refresh/', { RqUid: uuidv4(), refreshToken: localStorage.getItem('refreshToken') })
  .then((tokenRefreshResponse) => {
    const { accessToken, refreshToken } = tokenRefreshResponse.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    failedRequest.response.config.headers.Authorization = `Bearer ${accessToken}`;

    return Promise.resolve();
  })
  .catch((e) => {
    localStorage.removeItem('refreshToken');
    window.location.href = '/auth/get-link/';

    return Promise.reject(e);
  });

createAuthRefreshInterceptor(http, refreshAuthLogic, {
  pauseInstanceWhileRefreshing: true, // default: false
});


export default http;