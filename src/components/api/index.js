import { apiClient } from '../../services/ApiClient';

export const resultPengeluaranAll = () =>
  apiClient.get(`transaction/result/pengeluaran/1`);
  export const resultPemasukanAll = () =>
  apiClient.get(`transaction/result/pemasukan/1`);