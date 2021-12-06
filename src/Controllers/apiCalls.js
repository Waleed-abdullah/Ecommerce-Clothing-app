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

export {
    checkIfUserExists,
    saveProfileInfo,
}