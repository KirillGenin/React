import { createAsyncThunk } from '@reduxjs/toolkit';
import { IData, ResponseData } from '../types/types';

export const fetchData = createAsyncThunk<IData[], string | undefined, { rejectValue: string }>(
  'search/fetchData',
  async function (query, { rejectWithValue }) {
    try {
      const path = query ? `?name=${query}` : '';
      const res = await fetch(`https://rickandmortyapi.com/api/character/${path}`);
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
