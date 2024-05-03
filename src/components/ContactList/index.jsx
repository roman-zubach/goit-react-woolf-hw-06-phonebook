import { ContactItem } from './ContactItem';

import './assets/index.css';

export const ContactList = ({ contacts }) => {
  return <ul className='contact-list'>
    {contacts.map(({ id, name, number }) => (
      <li className='contact-item' key={id}>
        <ContactItem id={id} name={name} number={number} />
      </li>
    ))}
  </ul>;
};
