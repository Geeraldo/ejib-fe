import { createStore, createHook } from 'react-sweet-state';
import { pemasukan } from '../api';

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
          const res = await pemasukan(gerejaId);
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
  name: 'Pemasukan',
});

export const useListPemasukan = createHook(Store);
