import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IData, IHero } from '../../types/types';
import { fetchData, fetchHero } from '../../api';

export interface SearchState {
  query: string;
  data: IData[];
  loading: boolean;
  error: null | string;
  hero: IHero;
  heroLoading: boolean;
}

const initialState: SearchState = {
  query: '',
  data: [],
  loading: false,
  error: null,
  heroLoading: false,
  hero: {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    location: '',
    image: '',
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    closeModal(state) {
      state.heroLoading = false;
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.data = [];
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchHero.fulfilled, (state, action) => {
        state.hero = { ...action.payload, location: action.payload.location.name };
        state.heroLoading = true;
      });
  },
});

export const { setQuery, closeModal } = searchSlice.actions;
export default searchSlice.reducer;
