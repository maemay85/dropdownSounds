import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div id='navbar' className='row'>
      <span>Select Key Dropdown</span>
      <span>Complexity Toggle</span>
      <span>Octave Toggle</span>
      <span>Volume Slider</span>
    </div>
  )
}

export default Navbar
