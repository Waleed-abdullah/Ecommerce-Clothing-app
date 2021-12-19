import { useEffect, useState } from 'react';
import './FriendsList.css';
import FriendRow from './FriendRow';
import { getFriendsList } from '../../Controllers/apiCalls';
import { useStateValue } from '../../State/StateProvider';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    async function fetchData() {
      //load the users into state
      const friendList = getFriendsList(user);
      setFriends(friendList);
    }
    fetchData();
  }, []);

  return (
    <div className="FriendsList">
      <h4 id="h4">Friends</h4>
      {friends.length ? (
        friends.map((friend) => (
          <FriendRow key={friend.id} friendName={friend.userName} />
        ))
      ) : (
        <p id="h4">Oops! looks like you have no friends</p>
      )}
    </div>
  );
};

export default FriendsList;
