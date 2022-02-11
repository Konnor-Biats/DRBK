import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {
  {/* Initial Value Showing Hamburger Menu Bars */}
  const [click, setClick] = useState(false)

  {/* Once clicked, set to clicked and displat the X */}
  const handleClick = () => setClick(!click)

  return (
    <>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                  {/* Fingerprint icon */}
                    <MdFingerprint className='navbar-icon' />
                    DRBK
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  {/* Fingerprint icon */}
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