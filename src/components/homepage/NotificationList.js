import { useEffect, useState } from 'react';
import './NotificationList.css';
import NotificationRow from './NotificationRow';
import { useStateValue } from '../../State/StateProvider';
import axios from 'axios';
const Notifications = () => {
  const [requests, setRequests] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    async function fetchData() {
      //get the requests from backend
      const res = await axios.get(`http://localhost:5000/notif/requests`, {
        params: { userID: user.uid, email: user.email },
      });
      console.log(res);
      setRequests(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="NotificationList">
      <h4 id="h4">Notification</h4>
      {requests.length ? (
        requests.map((request) => (
          <NotificationRow
            key={request.userID}
            NotificationType={'Request'}
            NotificationData={request}
            setRequests={setRequests}
          />
        ))
      ) : (
        <h4 id="h4">Oops! looks like you dont have any notifications</h4>
      )}
    </div>
  );
};

export default Notifications;
