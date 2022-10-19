import { createSlice } from '@reduxjs/toolkit';

const contactsFilterSlice = createSlice({
	name: 'filter',
	initialState: '',
	reducers: {
	  filterContacts(state, action) {
		return action.payload;
	  },
	},
  });

  export const filterReducer = contactsFilterSlice.reducer;

  export const { filterContacts } = contactsFilterSlice.actions;