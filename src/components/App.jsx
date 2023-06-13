// import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  const filter = '';

  const filterContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      {/* {<Filter filter={filter} hendleFilterChange={handleFilterChange} />} */}
      <ContactList contacts={filterContacts()} />
    </div>
  );
};
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import css from './App.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContacts, deleteContacts } from '../redux/counterSlise';

// export const App = () => {
//   const dispatch = useDispatch();
//   const { contacts } = useSelector(state => state.contacts);
//   console.log(contacts);

// const handleFilterChange = event => {
//   dispatch(filterContact());
//   filter = event.target.value;
// };

// const addContact = (name, number) => {
//   if (
//     contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     )
//   ) {
//     alert(`${name} is already in contacts.`);
//     return;
//   }
//   dispatch(addContacts({ name, number }));
// };

// const filterContacts = () => {
//   return contacts.filter(contact => {
//     return contact.name.toLowerCase().includes(filter.toLowerCase());
//   });
// };

// const deleteContact = name => {
//   const deleteContacts = contacts.filter(contact => {
//     return contact.name !== name;
//   });
// console.log(deleteContacts);

// dispatch(deleteContact(deleteContacts));

// setContacts(() => [...deleteContacts]);
//   };

//   return (
//     <div className={css.container}>
//       <h2 className={css.title}>Phonebook</h2>
//       <ContactForm addContact={addContact} />
//       <h2 className={css.title}>Contacts</h2>
//       {/* <Filter filter={filter} hendleFilterChange={handleFilterChange} /> */}
//       {/* <ContactList contacts={filterContacts()} deleteContact={deleteContact} /> */}
//     </div>
//   );
// };
