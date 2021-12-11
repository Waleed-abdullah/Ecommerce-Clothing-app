import React from 'react'
import './Comment.css'
import { useStateValue } from '../../State/StateProvider'

const Comment = () => {
    const [{user}, dispatch] = useStateValue()
    return (
        <div className='showCommentContainer'>

            <div className='commentNameImage'>
                    <img className='profilePic' src={user.photoURL} alt="pfp"></img>
                    <h4><em>Nouman Amir <span style={{fontSize: '15px'}}>commented</span></em></h4>
            </div>

            <div className='commentTextContainer'>
                <p className='commentText'>Comment</p>
            </div>

        </div>
    )
}

export default Comment
