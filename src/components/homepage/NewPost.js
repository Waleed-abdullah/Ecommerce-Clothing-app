import React, {useState} from 'react'
import './NewPost.css'
import { useStateValue } from '../../State/StateProvider';
import { savePost } from '../../Controllers/apiCalls';

const NewPost = ({posts, setPosts}) => {
    const [postText, setPostText] = useState("");
    const [postImage, setPostImage] = useState(null);
    const [{ user }, dispatch] = useStateValue()

    const handlePostText = (event) => {
        setPostText(event.target.value)
    }

    const handlePostImage = (event) => {
        console.log('Entered handlePostImage')
        if (event.target.files[0]){
            setPostImage(event.target.files[0])
            console.log(event.target.files[0])
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Entered Submit')
        
        savePost(postImage, postText, user, posts, setPosts)

        setPostImage(null)
        setPostText('')
        event.target.postImage.value = null
    }

        return (
        <div className='createPost'>
            <h4 id='h4'>Create New Post</h4>
            <form onSubmit={handleSubmit}>
                <input value={postText} className='postTextField' type='text' placeholder="What's is on your mind?" onChange={handlePostText}></input>
                <input name='postImage' className='fileField' type='file' onChange={handlePostImage}></input>
                <button type="submit" className='uploadButton'><b>U P L O A D</b></button>
            </form>
        </div>
    )
}

export default NewPost
