import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilterAction: (state, { payload }) => payload,
  },
});

export const { updateFilterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
