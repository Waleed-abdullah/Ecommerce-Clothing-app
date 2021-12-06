import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NewPost from './NewPost.js';

const MultiPurpose = () => {
    return(
        <React.Fragment>
        <Routes>
          <Route path="/" element={<NewPost/>} />
          <Route path="/notifications" element={<div>Notifications</div>} />
        </Routes>
        </React.Fragment>
    )
}
export default MultiPurpose
