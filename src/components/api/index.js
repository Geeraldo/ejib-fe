import { apiClient } from '../../services/ApiClient';

export const resultPengeluaranAll = () =>
  apiClient.get(`transaction/result/pengeluaran/1`);
