import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: {
    name: string;
  };
  image: string;
}

interface SearchState {
  query: string;
  data: IData[];
}

const initialState: SearchState = {
  query: 'хуй',
  data: [],
};

const searchSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
