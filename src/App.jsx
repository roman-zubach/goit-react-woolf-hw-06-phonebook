import { ContactForm, ContactList, Filter, Section } from './components';

const App = () => {
  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default App;
