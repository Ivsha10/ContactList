import './index.css';
import Header from './Header';
import Footer from './Footer';
import ContactCard from './ContactCard';
import NewContact from './NewContact';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
function App() {

  const [contacts, setContacts] = useState([]);
  const url = 'http://localhost:3500/contacts';
  const [windowSize, setWindowSize] = useState();
  const [isShown, setIsShown] = useState(false);
  window.addEventListener('resize', () => {
    setWindowSize(window.innerWidth);
  })


  const handleDelete = (id) => {
    let updatedContacts = []
    updatedContacts = contacts.filter((contact) => (
      contact.id !== id ? [...updatedContacts, contact] : null
    ))

    setContacts(updatedContacts);

    const deleteItem = async () => {
      try {
        fetch(`${url}/${id}`, { method: 'DELETE' });
      }
      catch (err) {
        console.log(err);
      }

    }
    deleteItem();

  }

  const fetchItems = async () => {

    try {
      const response = await fetch(url);
      const data = await response.json();
      setContacts(data);

    }
    catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {

    fetchItems();
  }, [])
  return (
    <div className="App" style={{ width: `${windowSize * .7}px`, minWidth: '450px', maxWidth: `500px` }}>
      <Header title={'Contact List'} />


      <main>
        <input type='text' placeholder='Search Contact' /> <FaPlus role='button' onClick={() => setIsShown(!isShown)} className='plus' />
        {isShown &&
          <NewContact contacts={contacts} setContacts={setContacts} />
        }
        {contacts.length > 0 ?
          contacts.map((contact) => (
            <ContactCard key={contacts.indexOf(contact)} contact={contact} contacts={contacts} imgSource={contact.imgSource} name={contact.name} email={contact.email} age={contact.age} handleDelete={handleDelete} />
          )) : <p>No Contacts To Display.</p>}
      </main>

      <Footer />
    </div>
  );
}

export default App;
