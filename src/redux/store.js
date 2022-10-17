import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// export const saveContact= createAction('contact/saveContact');
// export const deleteContact = createAction('contact/deleteContact');


const contactsFormSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add(state, action) {
      return [...state, action.payload];
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
	// filterContacts(state, action) {return console.log(state, action.payload)}
	// filterContacts(state, action) { return [...state].filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()))}
  },
});
export const { add, remove } = contactsFormSlice.actions;

// const contactsFilterSlice = createSlice({
// 	name: 'filter',
// 	initialState: [],
// 	reducers: {
// 	  filterContacts(state, action) {return console.log(action)}
// 	},
//   });
//   export const {filterContacts} = contactsFilterSlice.actions;

//   filterContacts(state, action) {return state.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()))}

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
    return action.payload;
    },
  },
});
export const {filterContacts} = contactsFilterSlice.actions;
// const inputReducer = createReducer([], {
// 	[saveContact]: (state, action) => [...state, action.payload],
// 	[deleteContact]: (state, action) => state.filter(item => item.id !== action.payload),
// });

// export const filter1 = createAction('filter/inputFilter');

// const contactsFilter = createReducer([], {
// 	[filter1]: (state, action) => state.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase())) ,
// });


// export const { filter } = contactsFilterSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsFormSlice.reducer,
    filter: contactsFilterSlice.reducer,
  },
});
