import React from 'react'
import CardItem from './CardItem'; 
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Find Your Forever Dog!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                  <CardItem 
                    src='images/DogCards/D1.jpg'
                    title='Available Dogs'
                    text='View Our Available Dogs because this thing is being a major fucking asshole'
                    label='Female'
                    path='/'
                  />
                  <CardItem 
                    src='images/DogCards/Litter.jpg'
                    title='Upcoming Litters'
                    text='View Our Upcoming Litters'
                    label='Male'
                    path='/'
                  />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards