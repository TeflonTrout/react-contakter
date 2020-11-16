import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import { ContactsProvider, ContactsContext } from './ContactsContext'
import Home from './Components/Home'
import Nav from './Components/Nav'
import ContactBook from './Components/ContactBook'
import AddContact from './Components/AddContact'
import './style.css';

// Router and switch used to create links/paths to different
// parts of the application.

//Still need to integrate API and Database to store contacts
//for each user. Potentially planing on utilizing Firebase
//to create authentication for each user.

function App() {
  return (
    <div className="App">
      <ContactsProvider>
        <Router>
          <Nav />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contactbook">
            <ContactBook />
          </Route>
          <Route path="/add">
            <AddContact />
          </Route>
          <Switch>
          </Switch>
        </Router>
      </ContactsProvider>
    </div>
  );
}

export default App;
