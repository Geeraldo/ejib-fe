import axios from 'axios';

const baseApi = 'http://localhost:4000/'
const instance = axios.create({
  baseURL: baseApi,
});

export const apiClient = instance;
