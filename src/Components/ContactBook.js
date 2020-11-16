import React, { useState, useContext } from 'react'
import {ContactsContext} from '../ContactsContext'
import Contact from './Contact'

const ContactBook = () => {
    const [contacts, setContacts] = useContext(ContactsContext);


    return (
        <div className="contact-book">
            <h1>CONTAKT BOOK:</h1>
            <Contact />
        </div>
    )
}

export default ContactBook
