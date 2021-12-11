import React from 'react'
import './Comment.css'
import { useStateValue } from '../../State/StateProvider'

const Comment = ({comment}) => {
    return (
        <div className='showCommentContainer'>

            <div className='commentNameImage'>
                <img className='profilePicInComment' src={comment.photoURL} alt="pfp"></img>
                <h5><em>{comment.name} <span style={{fontSize: '12px'}}>commented</span></em></h5>
            </div>

            <div className='commentTextContainer'>
                <p className='commentText'>{comment.commentText}</p>
            </div>

        </div>
    )
}

export default Comment
