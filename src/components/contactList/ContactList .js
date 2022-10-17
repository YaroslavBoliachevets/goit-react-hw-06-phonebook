import PropTypes from 'prop-types';
import {DeleteButton} from './ContactList .module';
import { useDispatch} from 'react-redux';
import {remove} from '../../redux/store';

function ContactList({contacts}) {
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {contacts && contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteButton type="button" onClick={() => dispatch(remove(contact.id))}>delete</DeleteButton>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ContactList;

ContactList.propTypes = {
	contacts: PropTypes.array, 
	onDeleteContact: PropTypes.func,
}