import React, {useState, useEffect} from 'react'
import { useStateValue } from '../../State/StateProvider'
import './Card.css'

const Card = ({searchResult, interests}) => {
    const [{ user }, dispatch] = useStateValue()
    const [requestSent, setRequestSent] = useState('Connect')
    const [disable, setDisable] = useState(false)

    //use useEffect to check whether searchResult has been requested or not
    //use useEffect to check whether searchResult is friend with user or not

    const handleClick = () => {
        setDisable(true)
        setRequestSent('Request Sent')
        //make api call here to the request table
    }

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

            {
                searchResult.userID !== user.uid ? (<button className='connectButton' disabled={disable} onClick={handleClick}>{requestSent}</button>) : (
                    console.log('')
                )
            }
        </div>
    )
}

export default Card
