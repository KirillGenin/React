import { createSlice } from '@reduxjs/toolkit';
import { FormValues } from '../../types/types';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CardsState {
  cards: FormValues[];
}

const initialState: CardsState = {
  cards: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<FormValues>) {
      const { payload: card } = action;
      state.cards.push({
        firstName: card.firstName,
        deliveryDate: card.deliveryDate,
        product: card.product,
        options: card.options,
        payment: card.payment,
        image: card.image,
      });
    },
  },
});

export const { addCard } = formSlice.actions;
export default formSlice.reducer;
