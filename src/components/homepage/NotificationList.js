import { useEffect, useState } from 'react';
import './NotificationList.css';
import NotificationRow from './NotificationRow';
import { useStateValue } from '../../State/StateProvider';
import { getRequestNotifs } from '../../Controllers/apiCalls';

const Notifications = () => {
  const [requests, setRequests] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    async function fetchData() {
      //get the requests from backend
      const reqNotifs = getRequestNotifs(user);
      setRequests(reqNotifs);
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
          />
        ))
      ) : (
        <h4 id="h4">Oops! looks like you dont have any notifications</h4>
      )}
    </div>
  );
};

export default Notifications;
