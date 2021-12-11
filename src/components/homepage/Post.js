import React from 'react'
import Profile from '../../assets/HomeAssets/unnamed.png'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Temp from '../../assets/HomeAssets/temp.jpg'
import './Post.css'

const Post = ({post}) => {
    console.log(post.photoURL)
    return (
        <div className='postContainer'>
            <div className='upperArea'>
                <div className='nameImageTime'>
                    <img className='profilePic' src={post.photoURL} alt="pfp"></img>
                    <h4 style={{paddingLeft: 5, color: "#4E4E4E"}}>{post.name} <span style={{fontSize: '10px'}}><em>posted at {(new Date(new Date(post.postTimestamp).setHours(new Date(post.postTimestamp).getHours() +  5))).toUTCString()}</em></span></h4>
                </div>
                <div>
                    <MoreHorizIcon fontSize='large'></MoreHorizIcon>
                </div>
            </div>

            <div className='postTextContainer'>
                <p className='postText'>{post.postText}</p>
            </div>

            <div className='postImageContainer'>
                <img className='postImage' src={`http://localhost:5000/retrieve/${post.postImage}`} width='500px' alt='postImage'></img>
            </div>

            <div className='cLContainer'>
                <FavoriteIcon fontSize='large' sx={{color: '#804FC0'}}></FavoriteIcon>
                <input className='commentField' type='text' placeholder='Write your Comment'></input>
            </div>

            <div className='commentButtonContainer'>
                <button className='commentButton' type='submit'><b>Comment</b></button>
            </div>
        </div>
    )
}

export default Post

// #e5d9b7
// #804FC0