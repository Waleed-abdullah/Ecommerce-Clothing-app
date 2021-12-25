import React, { useEffect, useState, useRef } from 'react';
import Navbar from './NavBar';
import Post from './Post';
import SideBar from './SideBar';
import MultiPurpose from './MultiPurpose';
import './HomePage.css';
import { useStateValue } from '../../State/StateProvider';
import axios from 'axios';

const HomePage = () => {
  const [{ user }] = useStateValue();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchUsersPosts() {
      let temp = [];
      const res = await axios.get(`http://localhost:5000/get/post/${user.uid}`);
      temp = temp.concat(res.data.results);
      const resForFriends = await axios.get(`http://localhost:5000/friends`, {
        params: { userID: user.uid, email: user.email },
      });

      for (const friend of resForFriends.data) {
        const x = await axios.get(
          `http://localhost:5000/get/post/${friend.userID}`
        );
        temp = temp.concat(x.data.results);
      }

      if (posts.length === 0) {
        temp.sort((a, b) => {
          return b.postID - a.postID;
        });
        setPosts(posts.concat(temp));
      }
    }
    fetchUsersPosts();
  }, []);

  return (
    <React.Fragment>
      <Navbar search={search} setSearch={setSearch} />
      <div style={{ backgroundColor: '#F8F2FF', height: '100%' }}>
        <div className="main">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="posts">
            {posts.map((post) => (
              <Post key={post.postID} post={post} />
            ))}
          </div>
          <div className="multi">
            <MultiPurpose posts={posts} setPosts={setPosts} search={search} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;

// #F8F2FF
