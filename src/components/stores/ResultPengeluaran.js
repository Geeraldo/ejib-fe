import { createStore, createHook } from 'react-sweet-state';
import { resultPengeluaranAll } from '../api';

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
        async ({ setState, getState }) => {
          setState({
            // isLoading: true,
          });

          try {
            const res = await resultPengeluaranAll(getState());
            console.log(res);

            if (res.data) {
              setState({
                data: res.data,
                isLoading: false,
              });
            }
          } catch (err) {
            console.log(err)
            setState({
              error: err && err.message ? err.response.message : 'Data not found',
            });
          }
        },
  },
});

export const useResultPengeluaran = createHook(Store);

