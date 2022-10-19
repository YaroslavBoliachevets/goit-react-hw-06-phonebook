import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, getContactsValue } from 'redux/selectors/selectors';
import { filterContacts } from '../redux/slices/sliceFilter';

export default function App() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContactsValue);

  const changeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterContacts(value));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} />
    </>
  );
}
