import React, { useState, useEffect } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Post.css';
import Comment from './Comment.js';
import { saveComment } from '../../Controllers/apiCalls';
import { useStateValue } from '../../State/StateProvider';
import axios from 'axios';

const Post = React.memo(({ post }) => {
  const [{ user }, dispatch] = useStateValue();
  const [colorOfHeart, setColorOfHeart] = useState('#EEE5EE');
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   async function fetchdata() {
  //     console.log('Inside post useffect');
  //     const res = await axios.get(
  //       `http://localhost:5000/get/comment/${post.postID}`
  //     );
  //     if (comments.length === 0) {
  //       setComments(comments.concat(res.data.results));
  //     }
  //   }
  //   fetchdata();
  // }, []);

  const handleChangeHeartColor = () => {
    console.log('in heart handle');
    if (colorOfHeart === '#EEE5EE') {
      setColorOfHeart('#804FC0');
    } else {
      setColorOfHeart('#EEE5EE');
    }
  };

  const handleChangeInViewComments = () => {
    console.log('in view comments');
    showComments ? setShowComments(false) : setShowComments(true);
  };

  const handleCommentText = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    console.log('In here');
    saveComment(user, post.postID, commentText, comments, setComments);

    setCommentText('');
  };

  return (
    <div className="postContainer">
      <div className="upperArea">
        <div className="nameImageTime">
          <img className="profilePic" src={post.photoURL} alt="pfp"></img>
          <h4 style={{ paddingLeft: 5, color: '#4E4E4E' }}>
            {post.name}{' '}
            <span style={{ fontSize: '10px' }}>
              <em>
                posted at{' '}
                {new Date(
                  new Date(post.postTimestamp).setHours(
                    new Date(post.postTimestamp).getHours() + 5
                  )
                ).toUTCString()}
              </em>
            </span>
          </h4>
        </div>
        <div>
          <MoreHorizIcon fontSize="large"></MoreHorizIcon>
        </div>
      </div>

      <div className="postTextContainer">
        <p className="postText">{post.postText}</p>
      </div>

      {post.postImage ? (
        <div className="postImageContainer">
          <img
            className="postImage"
            src={`http://localhost:5000/retrieve/${post.postImage}`}
            width="500px"
            alt="postImage"
          ></img>
        </div>
      ) : (
        console.log('')
      )}

      <form onSubmit={handleCommentSubmit}>
        <div className="cLContainer">
          <FavoriteIcon
            onClick={handleChangeHeartColor}
            fontSize="large"
            sx={{ color: colorOfHeart }}
          ></FavoriteIcon>
          <input
            onChange={handleCommentText}
            value={commentText}
            className="commentField"
            type="text"
            placeholder="Write your Comment"
          ></input>
        </div>

        <div className="commentButtonContainer">
          <button
            type="button"
            onClick={handleChangeInViewComments}
            className="commentButton"
          >
            View Comments
          </button>
          <button type="submit" className="commentButton" type="submit">
            <b>Comment</b>
          </button>
        </div>
      </form>

      {showComments
        ? comments.map((comment) => (
            <Comment key={comments.commentID} comment={comment} />
          ))
        : console.log('')}
    </div>
  );
});

export default Post;

// #e5d9b7
// #804FC0
// userID, postID, liked
