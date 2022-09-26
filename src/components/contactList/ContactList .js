// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {DeleteButton} from './ContactList .module';

// class ContactList extends Component {
//   render() {
//     return (
//       <>
//         <ul>
//           {this.props.contacts.map(contact => {
//             return (
//               <li key={contact.id}>
//                 {contact.name}: {contact.number}
//                 <DeleteButton type="button" onClick={() => this.props.onDeleteContact(contact.id)}>delete</DeleteButton>
//               </li>
//             );
//           })}
//         </ul>
//       </>
//     );
//   }
// }

function ContactList(options) {
  const {contacts, onDeleteContact} = options;
  console.log('contacts', contacts);
  console.log('options', options);

  return (
    <>
      <ul>
        {contacts && contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteButton type="button" onClick={() => onDeleteContact(contact.id)}>delete</DeleteButton>
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