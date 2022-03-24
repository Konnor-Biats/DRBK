import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
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
                    <Link to='/About' className='nav-links' onClick={closeMobileMenu} >
                      About
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/Productions' className='nav-links' onClick={closeMobileMenu}>
                      Productions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/Available' className="nav-links" onClick={closeMobileMenu}>
                      Available
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/Upcoming_Litters' className="nav-links" onClick={closeMobileMenu}>
                      Upcoming Litters
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/FAQ' className="nav-links" onClick={closeMobileMenu}>
                      FAQ
                    </Link>
                  </li>
                  
                  {/* Button Component */}
                  
                </ul>
            </div>
        </div>
        </IconContext.Provider>
    </>
  )
}

export default Navbar