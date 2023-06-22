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
      () =>
        async ({ setState, getState }) => {
          setState({
            // isLoading: true,
          });

          try {
            const res = await resultPemasukanAll(getState());
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

export const useResultPemasukan = createHook(Store);
