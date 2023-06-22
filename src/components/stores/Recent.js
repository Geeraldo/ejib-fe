import { createStore, createHook } from 'react-sweet-state';
import { recentPengeluaran } from '../api';

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
      () =>
      async ({ setState }) => {
        setState({ isLoading: true });

        try {
          const res = await recentPengeluaran(setState);
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

export const useRecentPengeluaran = createHook(Store);
