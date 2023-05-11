import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaPencilAlt } from "react-icons/fa" //importera icons


const Navbar = () => {
  return (
    <nav className='navbar'>
     
      <Link to="/" className='Logo'><h2>Blog</h2><div className='pen-logo'><FaPencilAlt /></div></Link>
      <ul>
        <li><NavLink to="/">Hem</NavLink></li>
        <li><NavLink to="/add">Skapa ett nytt inlägg</NavLink></li>
        <li><NavLink to="/posts">Se blogginlägg</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar