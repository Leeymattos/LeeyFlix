import React from 'react';
import {Link} from 'react-router-dom'
import {FaPowerOff} from 'react-icons/fa'

import './style.css'
import logo from '../../assets/leeyflix.png'

export default function PageDefault({children, linkPath, nameLink}){
  return(
    <>
      <nav className='nav'>
        <Link to='/session'>
        <img src={logo} alt="logo" className='pagedefault-logo'/>
        </Link>
          <div className="nav-functionalities">
          <Link to={linkPath} className='nav-link'>{nameLink}</Link>
          <Link to='/' className='logout'><FaPowerOff color='white'/></Link>
        </div>
      </nav>
      {children}


      <footer className='footer'>
        Criado por <Link className='footer-link'> Weslley</Link>
      </footer>
    </>
  )
}