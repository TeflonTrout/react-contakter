import React, {useState, createContext} from 'react'

export const ContactsContext = createContext();

export function ContactsProvider(props) {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "Joe Smith",
            phone: 1234567890,
            email: "test@test.com",
            address: [{
                street: "555 Test Ln",
                city: "testville",
                state: "TS",
                zip: 55555
            }]
        },
        {
            id: 2,
            name: "Joe Smith",
            phone: 1234567890,
            email: "test@test.com",
            address: [{
                street: "555 Test Ln",
                city: "testville",
                state: "TS",
                zip: 55555
            }]
        }
        ])
    return (
        <ContactsContext.Provider value={[contacts, setContacts]}>
            {props.children}
        </ContactsContext.Provider>
    )
}

