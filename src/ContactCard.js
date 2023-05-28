import { useState, useEffect } from "react";
const ContactCard = ({imgSource, name, email, age}) => {

    const [showAge, setShowAge] = useState(false);
    const [btnText, setBtnText] = useState('Show Age');
    
    useEffect(()=>{
        showAge ? setBtnText('Hide Age') : setBtnText('Show Age');
    }, [showAge])
    return (
        <div className="contactCard">
            <img src={ imgSource }alt="image"/>
            <label>Name: <br/>{name}</label>
            <label style={{display:'flex'}}>Email: {email}</label>
            <button onClick={()=>{setShowAge(!showAge)}}>{btnText}</button>
            {showAge &&
                <label>Age: {age}</label>
            }
        </div>
    )
}

export default ContactCard
