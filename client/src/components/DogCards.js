import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './DogCards.css'


function DogCards() {
  return (
    <div>
        <div className='dog__section'>
            <div className='dog__wrapper'>
                <h1 className='dog__heading'>Dogs</h1>
                <div className='dog__container'>
                    <Link to='/sign-up' className='dog__container-card'>
                        <div className='dog__container-cardInfo'>
                            <div className='dog_section_img'>
                                <img className='img' src='images/DogCards/D1.jpg'></img>
                            </div>
                            <h3>Productions</h3>
                            <h4>8.99</h4>
                            <p>per month</p>
                            <ul className='dog__container-features'>
                                <li>100 transactions</li>
                                <li>2 Cash Back</li>
                                <li> No Limit</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>
                                Choose Plan
                            </Button>
                        </div>    
                    </Link>
                    <Link to='/sign-up' className='dog__container-card'>
                        <div className='dog__container-cardInfo'>
                            <div className='dog_section_img'>
                                <img src='images/DogCards/D2.jpg'></img>
                            </div>
                            <h3>Available</h3>
                            <h4>8.99</h4>
                            <p>per month</p>
                            <ul className='dog__container-features'>
                                <li>100 transactions</li>
                                <li>2 Cash Back</li>
                                <li> No Limit</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='blue'>
                                Choose Plan
                            </Button>
                        </div>    
                    </Link>
                    <Link to='/sign-up' className='dog__container-card'>
                        <div className='dog__container-cardInfo'>
                            <div className='dog_section_img'>
                            <img src='images/DogCards/D1.jpg'></img>
                            </div>
                            <h3>Upcoming Litters</h3>
                            <h4>8.99</h4>
                            <p>per month</p>
                            <ul className='dog__container-features'>
                                <li>100 transactions</li>
                                <li>2 Cash Back</li>
                                <li> No Limit</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>
                                Choose Plan
                            </Button>
                        </div>    
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DogCards