import React from 'react'
import { Link } from "react-router-dom";
import "./navigation.css"


const Navigation = () => {
  return (
    <nav className='navDiv'>
        <ul>
          <li>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="about">About</Link>

          </li>
        </ul>
      </nav>
  )
}

export default Navigation
