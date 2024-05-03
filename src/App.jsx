import { useSelector } from 'react-redux';
import { ContactForm, ContactList, Filter, Section } from './components';
import { selectFilteredContacts } from './redux/contacts/selectors';

const App = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={contacts} />
      </Section>
    </div>
  );
};

export default App;
