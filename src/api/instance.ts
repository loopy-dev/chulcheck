import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_ENDPOINT = process.env.REACT_APP_LOCAL_API_ENDPOINT || '';

const baseInstance = axios.create({
  baseURL: API_ENDPOINT,
});

function getToken() {
  const token = localStorage.getItem('token') || '';
  return token;
}

function getConfigurationWithAuthorizationBy(
  requestConfig: AxiosRequestConfig,
) {
  const config = { ...requestConfig };

  if (!config.headers) {
    config.headers = {};
  }

  config.headers.Authorization = `Bearer ${getToken()}`;

  return config;
}

function setupInterceptor(instance: AxiosInstance) {
  instance.interceptors.request.use(getConfigurationWithAuthorizationBy);
}

setupInterceptor(baseInstance);

export default baseInstance;
