import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>About Us</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Productions</h2>
            <Link to='/'>Males</Link>
            <Link to='/'>Females</Link>
            <Link to='/'>Extra</Link>
            <Link to='/'>Extra</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Available</h2>
            <Link to='/'>Males</Link>
            <Link to='/'>Females</Link>
            <Link to='/'>Extra</Link>
            <Link to='/'>Extra</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Upcoming Litters</h2>
            <Link to='/'>Bloodline</Link>
            <Link to='/'>Bloodline</Link>
            <Link to='/'>Extra</Link>
            <Link to='/'>Extra</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Events</h2>
            <Link to='/'>Shows</Link>
            <Link to='/'>Events</Link>
            <Link to='/'>Meets</Link>
            <Link to='/'>Extra</Link>
          </div>
        </div>
        
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>Done Right Bully Kennel © 2020</small>

          
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '/'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            
          </div>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Site Operated and Maintained by Biats Digital Media LLC
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;