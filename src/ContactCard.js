import { useState, useEffect } from "react";
import {FaTrashAlt} from 'react-icons/fa';
const ContactCard = ({contact, contacts, imgSource, name, email, age, handleDelete}) => {

    
    
    return (
     
        <div className="contactCard">
            <img src={ imgSource }alt="image"/>
            <label >Name: <br/>{name}</label>
            <label style={{display:'flex'}}>Email: {email}</label>
            <FaTrashAlt className="Trash" onClick={()=>{handleDelete(contact.id)}}/>
            <label>Age: {age}</label>
            
        </div>
     
    )
}

export default ContactCard
