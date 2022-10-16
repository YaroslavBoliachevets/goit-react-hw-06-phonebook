import React, { useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import ContactForm  from './contactForm';
import ContactList  from './contactList';
import Filter from './filter';


export default function App() {
  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState(localStorage.getItem('contacts') 
  ? JSON.parse(localStorage.getItem('contacts')) 
  : []
  );


  useEffect(()=> {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if((contacts.find(contact => (contact.name.includes(name))))) return alert(`${name} is already in contacts.`);

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    
    setContacts(prevState => ([contact, ...prevState]));
  };

  const deleteContact = id => {
    setContacts(prevState => (prevState.filter(contact => contact.id !== id)))
    // this.setState(p => ({
    //   contacts: p.contacts.filter(contact => contact.id !== id)
    // }))

    // setContacts(prevState => (prevState.filter(contact => contact.id !== id)))
  }

  const changeFilter = event => {
    const {value} = event.currentTarget;
    setFilter(value);
  }

const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

return (
  <>
    <h1>Phonebook</h1>
      <ContactForm  onSubmit={addContact}/>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter}/>
      <ContactList  contacts={visibleContacts} onDeleteContact={deleteContact} />
  </>
);
}