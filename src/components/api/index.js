import { apiClient } from '../../services/ApiClient';

export const resultPengeluaranAll = () =>
  apiClient.get(`transaction/result/pengeluaran/17`);
  export const resultPemasukanAll = () =>
  apiClient.get(`transaction/result/pemasukan/1`);
  export const pemasukan = (gerejaId) =>
  apiClient.get(`transaction/result/pemasukan/${gerejaId}`);
  export const pengeluaran = (gerejaId) =>
  apiClient.get(`transaction/result/pengeluaran/${gerejaId}`);



  // get list all gereja name and id

  export const ListAllGereja = () =>
  apiClient.get(`gereja`);
