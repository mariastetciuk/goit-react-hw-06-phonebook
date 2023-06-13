import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name: name,
            id: nanoid(),
            number: number,
          },
        };
      },
    },
    deleteContacts(state, { payload }) {
      const index = state.findIndex(contact => contact.id === payload);
      state.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
