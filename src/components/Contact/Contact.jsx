import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContactStyle, ButtonStyle } from './Contact.styled';

export function Contact({ contact }) {
  const dispatch = useDispatch();
  const { name, number, id } = contact;
  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <ContactStyle>
      <p>
        {name} : {number}
      </p>
      <ButtonStyle type="button" onClick={handleDeleteContact}>
        Delete
      </ButtonStyle>
    </ContactStyle>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
