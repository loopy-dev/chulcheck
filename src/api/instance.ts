import axios from 'axios';
import Storage from '../utils/storage';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_ENDPOINT = process.env.REACT_APP_LOCAL_API_ENDPOINT || '';
const storage = new Storage();

const baseInstance = axios.create({
  baseURL: API_ENDPOINT,
});

function getToken() {
  const token = storage.getItem<string>('token', '');
  return token;
}

function getConfigurationWithAuthorizationBy(
  requestConfig: AxiosRequestConfig
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
