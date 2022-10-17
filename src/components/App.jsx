import React, { useEffect} from 'react';
import { nanoid } from 'nanoid';
import ContactForm  from './contactForm';
import ContactList  from './contactList';
import Filter from './filter';
import {useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/store';


export default function App() {
  // const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state=> state.contacts);

  // const [contacts, setContacts] = useState(localStorage.getItem('contacts') 
  // ? JSON.parse(localStorage.getItem('contacts')) 
  // : []
  // );


  useEffect(()=> {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    // if((contacts.find(contact => (contact.name.includes(name))))) return alert(`${name} is already in contacts.`);

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    
    // setContacts(prevState => ([contact, ...prevState]));
  };


  const changeFilter = event => {
    const {value} = event.currentTarget;
    dispatch(filterContacts(value));
  }

const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
// console.log("contacts", contacts, "filter", filter, "visibleContacts", visibleContacts);
return (
  <>
    <h1>Phonebook</h1>
      <ContactForm  onSubmit={addContact}/>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter}/>
      <ContactList  contacts={visibleContacts} />
  </>
);
}