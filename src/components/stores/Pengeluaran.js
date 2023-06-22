import { createStore, createHook } from 'react-sweet-state';
import { pengeluaran } from '../api';

const Store = createStore({
  initialState: {
    isLoading: true,
    data: {},
    error: false,
  },
  actions: {
    updateStore:
      (newState) =>
      async ({ setState }) => {
        setState(newState);
      },
    loadData:
      (gerejaId) =>
      async ({ setState }) => {
        setState({ isLoading: true });

        try {
          const res = await pengeluaran(gerejaId);
          if (res.data) {
            setState({ data: res.data, isLoading: false });
          }
        } catch (err) {
          setState({
            error: err && err.message ? err.response.message : 'Data not found',
          });
        }
      },
  },
  name: 'pengeluaran',
});

export const usePengeluaran = createHook(Store);
