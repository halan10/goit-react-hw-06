import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (name, phone) => {
        return {
          payload: {
            id: crypto.randomUUID(),
            name: name,
            number: phone,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
