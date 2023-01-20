import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectKeys } from '../features/keys/keysSlice';


const Navbar = () => {
  const keys = useSelector(selectKeys);
  return (
    <div id='navbar' className='row'>
      <span>Select Key</span>
      <ul id='navbar-content'>
      {keys && keys.length
        ? keys.map((key) => (
              <Link to={`/keys/${key.name}`}
                   key={`All Keys: ${key.name}`}>
                  <div className="key row">
                    <p>{key.name}</p>
                    </div>
              </Link>
          ))
        : null}
      </ul>
      <span>Complexity Toggle</span>
      <span>Octave Toggle</span>
      <span>Volume Slider</span>
    </div>
  )
}

export default Navbar
