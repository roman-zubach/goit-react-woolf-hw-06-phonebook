import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
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
  },
});

const contactsConfig = {
  key: 'contacts',
  storage,
};

export const { addContactAction, removeContactAction } = contactsSlice.actions;
export const contactsReducer = persistReducer(contactsConfig, contactsSlice.reducer);
