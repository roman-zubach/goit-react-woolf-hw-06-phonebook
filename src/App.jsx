import { useSelector } from 'react-redux';
import { ContactForm, ContactList, Filter, Section } from './components';
import { getContacts } from './redux/contacts/selectors';
import { getFilter } from './redux/filter/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const isNameExist = (newName) => {
    return contacts.some(({ name }) => name.toLowerCase() === newName.toLowerCase());
  };

  const filteredContacts = filter
    ? contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
    : contacts;

  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm isNameExist={isNameExist} />
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={filteredContacts} />
      </Section>
    </div>
  );
};

export default App;
