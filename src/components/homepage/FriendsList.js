import { useEffect, useState } from 'react';
import './FriendsList.css';
import FriendRow from './FriendRow';
import { useStateValue } from '../../State/StateProvider';
import axios from 'axios';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    async function fetchData() {
      //load the users into state
      const res = await axios.get(`http://localhost:5000/friends`, {
        params: { userID: user.uid, email: user.email },
      });
      console.log(res);
      setFriends(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="FriendsList">
      <h4 id="h4">Friends</h4>
      {friends.length ? (
        friends.map((friend) => (
          <FriendRow key={friend.userID} friendName={friend.name} />
        ))
      ) : (
        <p id="h4">Oops! looks like you have no friends</p>
      )}
    </div>
  );
};

export default FriendsList;
