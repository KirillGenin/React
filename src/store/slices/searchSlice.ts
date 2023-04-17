import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IData, ResponseData, IHero } from '../../types/types';

export const fetchData = createAsyncThunk<IData[], string, { rejectValue: string }>(
  'search/fetchData',
  async function (query, { rejectWithValue }) {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
      if (!res.ok) {
        throw new Error('Nothing found. Search for example "Rick" or "Morty".');
      }
      const data = await res.json();
      return data.results;
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  }
);

export const fetchHero = createAsyncThunk<ResponseData, number, { rejectValue: string }>(
  'search/fetchHero',
  async function (id, { rejectWithValue }) {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      if (!res.ok) {
        throw new Error('404');
      }
      const data = await res.json();
      return data;
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  }
);

interface SearchState {
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
