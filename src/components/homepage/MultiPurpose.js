import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NewPost from './NewPost.js';
import SearchResults from './SearchResults.js';

const MultiPurpose = ({posts, setPosts, search}) => {
    return(
        <React.Fragment>
        <Routes>
          <Route path="/" element={<NewPost posts={posts} setPosts={setPosts}/>} />
          <Route path="/search" element={<SearchResults search={search}/>} />
        </Routes>
        </React.Fragment>
    )
}
export default MultiPurpose
