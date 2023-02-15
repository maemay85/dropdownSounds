import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectKeys } from '../features/keys/keysSlice';


const Navbar = () => {
  const keys = useSelector(selectKeys);
  const formatted = (str) => {
    let formattedStr = str
    if (str.includes('Flat')) formattedStr = str.replace('Flat', '♭')
    if (str.includes('Sharp')) formattedStr = str.replace('Sharp', '♯')
    return formattedStr
  }
  return (
    <div id='navbar' className='dropdown'>
      <span>Select Key</span>
      <div className='dropdown-content'>
      <ul>
      {keys && keys.length
        ? keys.map((key) => (
              <Link to={`/keys/${key.name}`}
                   key={`All Keys: ${key.name}`}>

                    {formatted(key.name)}
              </Link>
          ))
        : null}
      </ul></div>
      <span>Complexity Toggle</span>
      <span>Octave Toggle</span>
      <span>Volume Slider</span>
    </div>
  )
}

export default Navbar
