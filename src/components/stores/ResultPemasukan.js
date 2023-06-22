import { createStore, createHook } from 'react-sweet-state';
import { resultPemasukanAll } from '../api';

const Store = createStore({
  initialState: {
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
});

export const useResultPemasukan = createHook(Store);
