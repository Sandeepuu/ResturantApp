import React from 'react'
import './Navbar.css'
import logo from '../assests/logo.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <Link className='logo'>
    <img src={logo} alt=''/>
    </Link>
            <ul>
            <li>
                <Link to='/home'>HOME</Link>

            </li>
            <li>
            <Link to='/menu'>MENU</Link>
            </li>
            <li>
                <Link to='/contact'>CONTACT</Link>

            </li>
            <li>
                <Link to='/about'>ABOUT</Link>
                </li>
<li>
<form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button></form>
</li>

        </ul>
        <button>SIGN IN</button>
    </nav>
  )
}

export default Navbar
