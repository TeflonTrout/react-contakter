import React, { useContext } from 'react'
import { ContactsContext } from '../ContactsContext'

const Contact = () => {
    const [contacts, setContacts] = useContext(ContactsContext)
            
    // DELETE ITEM IN ARRAY BASED ON ID
    const handleDelete = (e, id) => {
        e.preventDefault();
        const newContactsList = contacts.filter(contact => contact.id !== id);
        return setContacts([...newContactsList])
    }

    return (
        //MAPPING CONTACT INFO
        contacts.map((contact, index) => {
            return(
                <div key={index} className="contact-card">
                    <div className="contact-line"><h3>Name: </h3><p>{contact.name}</p></div>
                    <div className="contact-line"><h3>Phone: </h3><p>{contact.phone}</p></div>
                    <div className="contact-line"><h3>Email: </h3><p>{contact.email}</p></div>

        {/* MAPPING ADDRESS INFO */}
                {contact.address.map((item, index) => {
                    return(
                        <div key={index} className="contact-line">
                            <h3>Address: </h3><p>{item.street}, {item.city}, {item.state} {item.zip}</p>
                        </div>
                    )
                })}
                <p className="delete-btn" onClick={e => handleDelete(e, (contact.id))}>X</p>
            </div> 
            )  
        })
    )
}

export default Contact
