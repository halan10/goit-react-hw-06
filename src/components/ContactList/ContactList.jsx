import Contact from '../Contact/Contact';
import Notification from '../Notification/Notification';
import { selectContacts } from '../../redux/selectors';
import { selectNameFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const valueFilter = useSelector(selectNameFilter);

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(valueFilter.toLowerCase())
  );
  return (
    <ul className={css.contactsList}>
      {contacts.length > 0 ? (
        filtredContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <Notification />
      )}
    </ul>
  );
}
