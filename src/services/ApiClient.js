import axios from 'axios';

const baseApi = 'http://localhost:4000/'
const instance = axios.create({
  "Content-Type":	"application/json; charset=utf-8",
  baseURL: baseApi,
});

export const apiClient = instance;
