import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div className="navbar">
            <Link to='/'>HOME</Link>
            <Link to='/contactbook'>MY CONTAKTS</Link>
            <Link to='/add'>ADD CONTAKT</Link>
        </div>
    )
}

export default Nav
