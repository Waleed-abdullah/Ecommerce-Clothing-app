import React, {useState} from 'react'
import './NewPost.css'
import axios from 'axios';

const NewPost = () => {
    const [postText, setPostText] = useState("");
    const [postImg, setPostImg] = useState(null);

    const handlePostText = (event) => {
        setPostText(event.target.value)
    }

    const handlePostImage = (event) => {
        console.log('Entered handlePostImage')
        if (event.target.files[0]){
            setPostImg(event.target.files[0])
            console.log(event.target.files[0])
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Entered Submit')
        
        if (postImg){
            const imgForm = new FormData()
            imgForm.append('file', postImg)
            imgForm.append('fileName', postImg.name)

            try {
                const res = await axios.post(
                  "http://localhost:5000/upload",
                  imgForm
                );
                console.log(res);
            } 
            catch (e) {
                console.log(e);
            }
        }

        setPostImg(null)
        event.target.postImg.value = null
    }

        return (
        <div className='createPost'>
            <h4 id='h4'>Create New Post</h4>
            <form onSubmit={handleSubmit}>
                <input value={postText} className='postTextField' type='text' placeholder="What's is on your mind?" onChange={handlePostText}></input>
                <input name='postImg' className='fileField' type='file' onChange={handlePostImage}></input>
                <button type="submit" className='uploadButton'><b>U P L O A D</b></button>
            </form>
        </div>
    )
}

export default NewPost
