import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContactAction: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
      prepare: (contact) => {
        return {
          payload: { id: nanoid(), ...contact },
        };
      },
    },
    removeContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
    updateFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

const contactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const {
  addContactAction,
  removeContactAction,
  updateFilterAction
} = contactsSlice.actions;

export const contactsReducer = persistReducer(contactsConfig, contactsSlice.reducer);
