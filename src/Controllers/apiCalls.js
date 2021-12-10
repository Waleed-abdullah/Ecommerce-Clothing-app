import axios from 'axios';
import { actionTypes } from '../State/Reducer';

const baseURL = 'http://localhost:5000'


const checkIfUserExists = (userData, dispatch, setGoToProfile) => {  
  axios({
        method: 'post',
        url: `${baseURL}/signin`,
        data: {
          ...userData,
        },
      })
        .then((res) => {
          const returnedUser = res.data.user
          if (returnedUser) {
            dispatch({
              type: actionTypes.SET_USER_EXISTS,
              userExists: true,
            });
          }
          else{
            setGoToProfile(true)
          }
        });
}

const saveProfileInfo = (userData, dispatch) => {
    axios({
        method: 'post',
        url: `${baseURL}/saveProfile`,
        data: userData,
      })
        .then((res) => {
          const returnedUid = res.data.uid
          if (returnedUid) {
            //if user then change the route to saveProfile
            dispatch({
              type: actionTypes.SET_USER_EXISTS,
              userExists: true,
            });
            console.log(returnedUid);
          }
        });
}

const savePost = async (postImage, postText, user, posts, setPosts) => {
    let postID;
    const imgForm = new FormData()
    imgForm.append('file', postImage)
    imgForm.append('fileName', postImage.name)

    try {
        const resData = await axios.post(
          "http://localhost:5000/upload/postImage",
          imgForm
        );
        console.log(resData.data);

        await axios({
            method: 'post',
            url: `http://localhost:5000/upload/post`,
            data: {
            userID: user.uid,
            postText: postText,
            postImage: resData.data
            },
        })
        .then(res => {
            console.log("Saved Post in Database")
            postID = res.data.postID
            setPosts(posts.concat({
              name: user.name,
              postID: res.data.postID,
              userID: user.uid,
              postText: postText,
              postImage: resData.data
            }))
        })
    } 
    catch (e) {
        console.log(e);
    }

    return postID
}

export {
    checkIfUserExists,
    saveProfileInfo,
    savePost,
}