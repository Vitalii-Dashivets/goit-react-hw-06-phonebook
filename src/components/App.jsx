import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { AppSection, TitleOne } from './APP.styled';

// const LS_KEY = 'contacts';

export const App = () => {
  return (
    <AppSection>
      <TitleOne>Phonebook</TitleOne>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </AppSection>
  );
};
