import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_LOCAL_API_ENDPOINT || '';

const baseInstance = axios.create({
  baseURL: API_ENDPOINT,
});

export default baseInstance;
