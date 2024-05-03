import { useDispatch } from 'react-redux';
import { removeContactAction } from '../../redux/contacts/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeContactAction(id));
  };

  return (
    <>
      <p>{name} {number}</p>
      <button type="button" onClick={removeItem}>Remove</button>
    </>
  );
};
