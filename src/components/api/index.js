import { apiClient } from '../../services/ApiClient';

export const resultPengeluaranAll = () =>
  apiClient.get(`transaction/result/pengeluaran/17`);
  export const resultPemasukanAll = () =>
  apiClient.get(`transaction/result/pemasukan/1`);


  // get list all gereja name and id

  export const ListAllGereja = () =>
  apiClient.get(`gereja`);
