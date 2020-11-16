import React, {useContext, useState} from 'react'
import { ContactsContext } from '../ContactsContext'

function AddContact() {
    const [contacts, setContacts] = useContext(ContactsContext);

    const Arr = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    //FUNCTIONS TO HANDLE UPDATING STATE
    function handleNameChange(e) {
        e.preventDefault();
        setName(e.target.value);
        console.log(name)
    }
    function handleNumberChange(e) {
        e.preventDefault();
        setPhone(e.target.value);
        console.log(phone)
    }
    function handleEmailChange(e) {
        e.preventDefault();
        setEmail(e.target.value);
        console.log(email)
    }
    function handleStreetChange(e) {
        e.preventDefault();
        setStreet(e.target.value);
        console.log(street)
    }
    function handleCityChange(e) {
        e.preventDefault();
        setCity(e.target.value);
        console.log(city)
    }
    function handleStateChange(e) {
        e.preventDefault();
        setState(e.target.value);
        console.log(state)
    }
    function handleZipChange(e) {
        e.preventDefault();
        setZip(e.target.value);
        console.log(zip)
    }

    //SUBMITS FORM AND UPDATES CONTACTS CONTEXT ARRAY WITH NEW VALUES
    function handleSubmit(e) {
        e.preventDefault();
        setContacts(contacts => [...contacts, {id: (Date.now()), name: name, phone: phone, email: email, street: street, address: [{street: street, city: city, state: state, zip:zip }]}])
        console.log("added", contacts)
    }

    return (
        <div className="add-contact-page">
            <h1>NEW CONTAKT</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                <h3>Name:</h3>
                    <input required 
                        type="text" 
                        placeholder="Contact Name" 
                        value={name}
                        onChange={e => handleNameChange(e)}
                        />
                <h3>Phone:</h3>
                    <input required 
                        type="number" 
                        placeholder="Phone Number" 
                        value={phone}
                        onChange={e => handleNumberChange(e)}
                        />
                <h3>Email:</h3>
                    <input required 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={e => handleEmailChange(e)}
                        />
                </div>
                <div className="address-box">
                <h3>Street: </h3>
                    <input required type="text" 
                        placeholder="Street" 
                        value={street}
                        onChange={e => handleStreetChange(e)}
                        />
                <h3>City: </h3>
                    <input required type="text" 
                        placeholder="City" 
                        value={city}
                        onChange ={e => handleCityChange(e)}
                        />
                <h3>State: </h3>
                    <select onChange={e => handleStateChange(e)}>
                        {Arr.map(item => {
                            return (
                                <option key={item} value={item} >{item}</option>
                            )
                        })}
                    </select>
                <h3>Zip Code: </h3>
                    <input required type="number" 
                        placeholder="Zip Code" 
                        value={zip}
                        onChange={e => handleZipChange(e)}
                    />
                    </div>
                <div className="box-add-btn">
                    <button type='submit' className="add-btn">Add Contakt</button>
                </div>
            </form>
    </div>
    )
}

export default AddContact
