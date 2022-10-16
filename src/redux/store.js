import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

// const increment = createAction('myValue/increment');
// const decrement = createAction('myValue/decrement');
export const saveContact= createAction('contact/saveContact');
export const deleteContact = createAction('contact/deleteContact');
export const filter = createAction('filter/inputFilter');

// const myReducer = createReducer(10, {
// [increment]: (state, action) => state + action.payload,
// [decrement]: (state, action) => state - action.payload, 
// [saveContact]: (state, action) => state,
// });

const inputReducer = createReducer([], {
	[saveContact]: (state, action) => [...state, action.payload],
	[deleteContact]: (state, action) => state.filter(item => item.id !== action.payload),
});

const contactsFilter = createReducer('', {
	[filter]: (state, action) => state + action.payload,
});

export const store = configureStore({
  reducer: {
	contacts: inputReducer,
	filter: contactsFilter, 
  },
});

