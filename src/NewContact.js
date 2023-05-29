import { useEffect, useState } from "react";
import apiRequest from './apiRequest';
import { FaSave } from "react-icons/fa";
const NewContact = ({contacts, setContacts, fetchItems}) => {

    const [file, setFile] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const url = 'http://localhost:3500/contacts';

    const handleNewContact = async ()=>{

        let contact = {id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1, imgSource: URL.createObjectURL(file),
            name: name, email:email, age:age};
        
        setContacts([...contacts, contact]);
            const postOptions = {

                method: 'POST', 
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(contact)
            }

            const result = await apiRequest(url, postOptions);
            if(result)console.log('Error');
        
            setFile('');
            setName('');
            setEmail('');
            setAge('');

    }
    return (
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <label className="inputLabel" style={{fontSize:'0.5em'}}>Picture</label>
            <label className="inputLabel" style={{fontSize:'0.5em'}}>Name</label>
            <label className="inputLabel" style={{fontSize:'0.5em'}}>Email</label>
            <label className="inputLabel" style={{fontSize:'0.5em'}}>Age</label>
            
            <input type="file" style={{gridColumn:'1', gridRow:'2'}}  accept={"image/jpeg, image/png, image/jpg"} onChange={(e)=>{setFile(e.target.files[0])}} />
            <input type="text" style={{gridColumn:'2', gridRow:'2'}}placeholder="Add Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text" style={{gridColumn:'3', gridRow:'2'}}placeholder="Add Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="text" style={{gridColumn:'4', gridRow:'2'}}placeholder="Add Age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>

            <FaSave role className="inputBtn" type="submit" onClick={async()=>{await handleNewContact()}}/>
        </form>
    )
}

export default NewContact
