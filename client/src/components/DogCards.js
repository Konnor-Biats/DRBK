import React from 'react'
import { Link } from 'react-router-dom';
import './DogCards.css'


function DogCards() {
  return (
    <div>
        <div className='dog__section'>
            <div className='dog__wrapper'>
                <div className='dog__container'>
                    <Link to='/sign-up' className='dog__container-card'>
                        <div className='dog__container-cardInfo'>
                            <img className='img' src='images/DogCards/D1.jpg'/>
                            <h3>Productions</h3>
                            
                            
                        </div>    
                    </Link>
                    <Link to='/sign-up' className='dog__container-card'>
                        <div className='dog__container-cardInfo'>
                            <img src='images/DogCards/D2.jpg'></img>
                            <h3>Available</h3>
                            
                        </div>    
                    </Link>
                    <Link to='/sign-up' className='dog__container-card'>
                        <div className='dog__container-cardInfo'>
                            <img src='images/DogCards/D1.jpg'></img>
                            <h3>Upcoming Litters</h3>
                            
                        </div>    
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DogCards