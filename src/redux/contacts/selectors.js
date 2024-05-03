export const selectContacts = state => state.contacts.contacts;

export const selectFilteredContacts = state => {
  const filter = state.contacts.filter;
  const contacts = state.contacts.contacts;

  return filter
    ? contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
    : contacts
};
