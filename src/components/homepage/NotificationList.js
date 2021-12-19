import { useEffect, useState } from 'react';
import './NotificationList.css';
import NotificationRow from './NotificationRow';

const Notifications = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //get the requests from backend
      setRequests([
        {
          id: 'gibberish',
          userName: 'Tobey Mguire',
        },
      ]);
    }
    fetchData();
  }, []);

  return (
    <div className="NotificationList">
      <h4 id="h4">Notification</h4>
      {requests.length ? (
        requests.map((request) => (
          <NotificationRow
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
