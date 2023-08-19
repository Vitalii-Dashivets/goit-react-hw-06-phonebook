import React from 'react';
import { useState } from 'react';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

import {
  FormStyle,
  InputStyle,
  ButtonStyle,
  Label,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchResult = contacts.find(contact => contact.name === name);
    if (searchResult) {
      alert(`${name} is already in contacts`);
      return false;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Label htmlFor="inputName">Name</Label>
      <InputStyle
        type="text"
        name="name"
        value={name}
        id="inputName"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={evt => setName(evt.target.value)}
      />
      <Label htmlFor="inputNumber">Number</Label>
      <InputStyle
        type="tel"
        name="number"
        value={number}
        id="inputNumber"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={evt => setNumber(evt.target.value)}
      />
      <ButtonStyle type="submit">Add contact</ButtonStyle>
    </FormStyle>
  );
};
