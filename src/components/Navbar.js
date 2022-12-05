import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div id='navbar' className='row'>
      <NavLink to ="/stories" className="active">Stories</NavLink>
      <NavLink to ="/authors" className="active">Authors</NavLink>
    </div>
  )
}

export default Navbar
