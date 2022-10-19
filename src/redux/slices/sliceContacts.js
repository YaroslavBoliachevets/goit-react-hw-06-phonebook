import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  export const contactsFormSlice = createSlice({
	name: 'contacts',
	initialState: contactsInitialState,
	reducers: {
	  add(state, action) {
		return [...state, action.payload];
	  },
	  remove(state, action) {
		return state.filter(item => item.id !== action.payload);
	  },
	},
  });

  export const contactsReducer = contactsFormSlice.reducer;

  export const { add, remove } = contactsFormSlice.actions;