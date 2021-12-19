import { useEffect, useState } from 'react';
import './FriendsList.css';
import FriendRow from './FriendRow';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //load the users into state
      setFriends([
        {
          id: 'gibberish',
          userName: 'Waleed',
        },
      ]);
      console.log('uwu');
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
