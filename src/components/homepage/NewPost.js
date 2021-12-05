import React from 'react'
import './NewPost.css'

const NewPost = () => {
    return (
        <div className='createPost'>
            <h4 id='h4'>Create New Post</h4>
            <input className='postTextField' type='text' placeholder="What's is on your mind?"></input>
            <input className='fileField' type='file'></input>
            <button className='uploadButton'><b>U P L O A D</b></button>
        </div>
    )
}

export default NewPost
