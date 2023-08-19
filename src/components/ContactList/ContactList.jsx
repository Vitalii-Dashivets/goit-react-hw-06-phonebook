import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Contact } from 'components/Contact/Contact';
import { getFilter, getContacts } from 'redux/selectors';
import { useMemo } from 'react';

export function ContactList() {
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const visibleContacts = useMemo(() => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter, 0);
    });
  }, [filterValue, contacts]);

  return visibleContacts.map(item => {
    return <Contact key={item.id} contact={item} id={item.id} />;
  });
}
