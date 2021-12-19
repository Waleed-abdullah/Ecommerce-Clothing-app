import React, {useState, useEffect} from 'react'
import { useStateValue } from '../../State/StateProvider'
import './Card.css'
import axios from 'axios'

const Card = ({searchResult, interests}) => {
    const [{ user }, dispatch] = useStateValue()
    const [requestSent, setRequestSent] = useState('Connect')
    const [alreadySent, setAlreadySent] = useState(false)

    //use useEffect to check whether searchResult has been requested or not
    useEffect(() => {
        async function getRequested() {
            const res = await axios.get(`http://localhost:5000/get/requested`, {params: { requestedBy: user.uid, requestedTo: searchResult.userID }});
            if (res.data.results.length > 0){
                setRequestSent('Request Sent')
                setAlreadySent(true)
            }
            else {
                setRequestSent('Connect')
                setAlreadySent(false)
            }
        }
        getRequested()
    }, [])
    //use useEffect to check whether searchResult is friend with user or not

    const handleClick = async () => {
        if (alreadySent){
            setRequestSent('Connect')
            setAlreadySent(false)
            const res = await axios({
                method: 'delete',
                url: `http://localhost:5000/delete/request`,
                data: {
                    requestedTo: searchResult.userID,
                    requestedBy: user.uid,
                },
            })
        }
        else {
            setRequestSent('Request Sent')
            setAlreadySent(true)
            const res = await axios({
                method: 'post',
                url: `http://localhost:5000/send/request`,
                data: {
                    requestedTo: searchResult.userID,
                    requestedBy: user.uid,
                },
            })
        }
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
                searchResult.userID !== user.uid ? (<button className='connectButton' onClick={handleClick}>{requestSent}</button>) : (
                    console.log('')
                )
            }
        </div>
    )
}

export default Card
