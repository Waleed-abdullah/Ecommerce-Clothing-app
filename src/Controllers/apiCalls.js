import axios from 'axios';
import { actionTypes } from '../State/Reducer';

const baseURL = 'http://localhost:5000'


const checkIfUserExists = (userData, history, dispatch) => {  
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
            history('/homePage')
          }
          else {
            history('/profileInfo')
          }
        });
}

const saveProfileInfo = (userData) => {
    axios({
        method: 'post',
        url: `${baseURL}/saveProfile`,
        data: userData,
      })
        .then((res) => {
          const returnedUid = res.data.uid
          if (returnedUid) {
            //if user then change the route to saveProfile
            console.log(returnedUid);
          }
        });
}

export {
    checkIfUserExists,
    saveProfileInfo,
}