import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';



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

  {/* Calling mobile menu function */}
  window.addEventListener('resize', showButton);


  return (
    <>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                  {/* Nav Left Side Title */}
                    DRBK
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  {/* Mobile Menu icon */}
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                
                {/* Navigation Links */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                    <Link to='/' className="nav-links">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/about' className="nav-links">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/bullys' className="nav-links">
                      Bullys
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/available' className="nav-links">
                      Available
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/upcoming_litters' className="nav-links">
                      Upcoming Litters
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/events' className="nav-links">
                      Events
                    </Link>
                  </li>
                  
                  {/* Button Component */}
                  <li className="nav-btn">
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
    </>
  )
}

export default Navbar