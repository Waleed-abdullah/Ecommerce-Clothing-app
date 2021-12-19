import axios from 'axios';
import { actionTypes } from '../State/Reducer';

const baseURL = 'http://localhost:5000';

const checkIfUserExists = (userData, dispatch, setGoToProfile) => {
  axios({
    method: 'post',
    url: `${baseURL}/signin`,
    data: {
      ...userData,
    },
  }).then((res) => {
    const returnedUser = res.data.user;
    if (returnedUser) {
      dispatch({
        type: actionTypes.SET_USER_EXISTS,
        userExists: true,
      });
    } else {
      setGoToProfile(true);
    }
  });
};

const saveProfileInfo = (userData, dispatch) => {
  axios({
    method: 'post',
    url: `${baseURL}/saveProfile`,
    data: userData,
  }).then((res) => {
    const returnedUid = res.data.uid;
    if (returnedUid) {
      //if user then change the route to saveProfile
      dispatch({
        type: actionTypes.SET_USER_EXISTS,
        userExists: true,
      });
      console.log(returnedUid);
    }
  });
};

const savePost = async (postImage, postText, user, posts, setPosts) => {
  const imgForm = new FormData();
  if (postImage) {
    imgForm.append('file', postImage);
    imgForm.append('fileName', postImage.name);
  }

  try {
    let resData;
    if (postImage) {
      resData = await axios.post(
        'http://localhost:5000/upload/postImage',
        imgForm
      );
    }

    console.log(resData);

    await axios({
      method: 'post',
      url: `http://localhost:5000/upload/post`,
      data: {
        userID: user.uid,
        postText: postText,
        postImage: resData ? resData.data : null,
      },
    }).then((res) => {
      console.log('Saved Post in Database');
      console.log(res);

      const temp = posts.concat({
        name: user.name,
        postID: res.data.postID,
        userID: user.uid,
        postText: postText,
        postImage: resData ? resData.data : null,
        photoURL: user.photoURL,
        postTimestamp: res.data.postTimestamp,
      });
      temp.sort((a, b) => {
        return b.postID - a.postID;
      });

      setPosts(temp);
    });
  } catch (e) {
    console.log(e);
  }
};

const saveComment = async (
  user,
  postID,
  commentText,
  comments,
  setComments
) => {
  await axios({
    method: 'post',
    url: `http://localhost:5000/upload/comment`,
    data: {
      userID: user.uid,
      postID: postID,
      commentText: commentText,
    },
  }).then((res) => {
    console.log('Saved comment in database');
    console.log(res);

    const temp = comments.concat({
      commentID: res.data.commentID,
      userID: user.uid,
      commentText: commentText,
      postID: postID,
      name: user.name,
      photoURL: user.photoURL,
    });
    temp.sort((a, b) => {
      return b.commentID - a.commentID;
    });

    setComments(temp);
  });
};

const getFriendsList = async (user) => {
  axios({
    method: 'get',
    url: `${baseURL}/friends`,
    data: {
      userID: user.uid,
      email: user.email,
    },
  }).then((res) => {
    if (res.data) {
      return res.data;
    }
  });
};

export {
  checkIfUserExists,
  saveProfileInfo,
  savePost,
  saveComment,
  getFriendsList,
};
