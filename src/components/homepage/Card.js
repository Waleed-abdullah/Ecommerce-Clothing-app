import React, {useState, useEffect} from 'react'
import { useStateValue } from '../../State/StateProvider'
import './Card.css'
import axios from 'axios'

const Card = ({searchResult, interests}) => {
    const [{ user }, dispatch] = useStateValue()
    const [buttonMsg, setButtonMsg] = useState('')

    //use useEffect to check whether searchResult has been requested or not
    useEffect(() => {
        async function getRequested() {
            const res = await axios.get(`http://localhost:5000/get/requested`, {params: { requestedBy: user.uid, requestedTo: searchResult.userID }});
            if (res.data.results.length > 0){
                setButtonMsg('Request Sent')
            }
            else {
                const res = await axios.get(`http://localhost:5000/friends`, {params: { userID: user.uid, email: user.email }});
                let flag = res.data.find(result => result.userID === searchResult.userID)
                if (flag){
                    setButtonMsg('Unfriend')
                }
                else {
                    setButtonMsg('Connect')
                }
            }
        }
        getRequested()
    }, [])

    const handleClick = async () => {
        if (buttonMsg === 'Request Sent'){
            setButtonMsg('Connect')
            const res = await axios({
                method: 'delete',
                url: `http://localhost:5000/delete/request`,
                data: {
                    requestedTo: searchResult.userID,
                    requestedBy: user.uid,
                },
            })
        }
        else if (buttonMsg === 'Connect') {
            setButtonMsg('Request Sent')
            const res = await axios({
                method: 'post',
                url: `http://localhost:5000/send/request`,
                data: {
                    requestedTo: searchResult.userID,
                    requestedBy: user.uid,
                },
            })
        }
        else if (buttonMsg === 'Unfriend') {
            setButtonMsg('Connect')
            const res = await axios({
                method: 'delete',
                url: `http://localhost:5000/delete/friend`,
                data: {
                    userID: user.uid,
                    friendID: searchResult.userID
                }
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
                searchResult.userID !== user.uid ? (<button className='connectButton' onClick={handleClick}>{buttonMsg}</button>) : (
                    console.log('')
                )
            }
        </div>
    )
}

export default Card
