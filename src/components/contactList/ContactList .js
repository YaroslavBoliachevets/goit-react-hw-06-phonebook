import PropTypes from 'prop-types';
import {DeleteButton} from './ContactList .module';
import {useSelector, useDispatch} from 'react-redux';
import {deleteContact} from '../../redux/store';

function ContactList(options) {
  // const { onDeleteContact} = options;
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {contacts && contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteButton type="button" onClick={() => dispatch(deleteContact(contact.id))}>delete</DeleteButton>
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