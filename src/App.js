import './index.css';
import Header from './Header';
import Footer from './Footer';
import ContactCard from './ContactCard';
import { useState } from 'react';
function App() {
  const [contacts, setContact] = useState([
    {imgSource: require('./images/Visa.jpg'), name: 'Ivan Djuricic', email: 'idjuricic@gmail.com', age: 21},
    {imgSource: require('./images/logo192.png'), name: 'Marko Djuricic', email: 'markodjuricic@gmail.com', age: 20},
    {imgSource: require('./images/logo192.png'), name: 'Marko Djuricic', email: 'markodjuricic@gmail.com', age: 20},{imgSource: require('./images/logo192.png'), name: 'Marko Djuricic', email: 'markodjuricic@gmail.com', age: 20}
  ]);
  return (
    <div className="App">
      <Header title={'Contact List'}/>
      <main>
        {contacts.map((contact)=>(
          <ContactCard imgSource={contact.imgSource} name={contact.name} email={contact.email} age={contact.age}  />
        ))}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
