import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Layout from '../Layout/Layout';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';

function App() {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <div className={css.mainContainer}>
        <div>
          <SearchBox />
          <ContactForm />
        </div>
        <div>
          <ContactList />
        </div>
      </div>
    </Layout>
  );
}

export default App;
