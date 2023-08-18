import React from 'react';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState, useMemo } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { AppSection, TitleOne } from './APP.styled';

// const LS_KEY = 'contacts';

export const App = () => {
  const contacts=useSelector(getContacts);
  console.log(contacts);
  const dispatch=useDispatch();
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem(LS_KEY)) ?? []
  // );
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const visibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter, 0);
    });
  }, [filter, contacts]);

  const formSubmitSearchHandler = data => {
    const searchResult = contacts.find(contact => contact.name === data.name);
    if (searchResult) {
      alert(`${data.name} is already in contacts`);
      return false;
    }
    dispatch(addContact(data));
    // setContacts(prevContacts => [{ id: nanoid(), ...data }, ...prevContacts]);
  };

  // const deleteItem = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(item => item.id !== contactId)
  //   );
  // };

  return (
    <AppSection>
      <TitleOne>Phonebook</TitleOne>
      <ContactForm onSubmitHandler={formSubmitSearchHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={setFilter} />
      <ContactList list={visibleContacts}  />
    </AppSection>
  );
};
