import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'


function Navbar() {
  {/* Initial Value Showing Hamburger Menu Bars */}
  const [click, setClick] = useState(false)

  {/* Initial state of button being not clicked */}
  const [button, setButton] = useState(true)

  {/* Once clicked, set to clicked and displat the X */}
  const handleClick = () => setClick(!click)

  {/* Close the mobile menu */}
  const closeMobileMenu = () => setClick(false)

  {/* Showing mobile menu depending on screen size */}
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  }

  {/* Restarting nav effect on page refresh, putting nav back to non-shrunk state */}
  useEffect(() =>{
    showButton();
  }, []);

  {/* Calling mobile menu function */}
  window.addEventListener('resize', showButton);


  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                  {/* Nav Left Side Title */}
                    DRBK
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  {/* Mobile Menu icon */}
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                
                {/* Navigation Links */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu} >
                      About
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/bullys' className='nav-links' onClick={closeMobileMenu}>
                      Bullys
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/available' className="nav-links" onClick={closeMobileMenu}>
                      Available
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/upcoming_litters' className="nav-links" onClick={closeMobileMenu}>
                      Upcoming Litters
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/events' className="nav-links" onClick={closeMobileMenu}>
                      Events
                    </Link>
                  </li>
                  
                  {/* Button Component */}
                  <li className="nav-btn" onClick={closeMobileMenu}>
                    {button ? (
                      <Link to='/sign-up' className="btn-link">
                      <Button buttonStyle='btn--outline'>Sign Up</Button>
                      </Link>
                    ): (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Sign Up</Button>
                      </Link>
                    )
                  }
                  </li>
                </ul>
            </div>
        </div>
        </IconContext.Provider>
    </>
  )
}

export default Navbar