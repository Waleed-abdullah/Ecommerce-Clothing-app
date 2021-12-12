import React from 'react'
import './Card.css'

const Card = ({searchResult, interests}) => {
    console.log(interests)
    return (
        <div className='cardContainer'>
            <img className='profilePicInCard' src={searchResult.photoURL} alt='pfp'></img>
            <h4 style={{textAlign: 'center'}}>{searchResult.region}</h4>
            <h3 style={{textAlign: 'center'}}>Interests</h3>
            <div className='interestsList'>
            {
                interests.map(interest => (
                    <div className='cardInterest'>{interest}</div>
                ))
            }
            </div>

            <button className='connectButton'>Connect</button>
        </div>
    )
}

export default Card
