import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';
import searchReducer from './slices/searchSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    search: searchReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
