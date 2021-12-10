import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NewPost from './NewPost.js';

const MultiPurpose = ({posts, setPosts}) => {
    return(
        <React.Fragment>
        <Routes>
          <Route path="/" element={<NewPost posts={posts} setPosts={setPosts}/>} />
          <Route path="/notifications" element={<div>Notifications</div>} />
        </Routes>
        </React.Fragment>
    )
}
export default MultiPurpose
