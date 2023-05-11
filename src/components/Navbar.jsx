import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/"><h2>Blogg</h2></Link>
      <ul>
        <li><NavLink to="/">Hem</NavLink></li>
        <li><NavLink to="/add">Skapa ett nytt inlägg</NavLink></li>
        <li><NavLink to="/posts">Se blogginlägg</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar