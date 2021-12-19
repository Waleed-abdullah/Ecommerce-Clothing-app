import './NotificationRow.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import axios from 'axios';
import { useStateValue } from '../../State/StateProvider';

const NotificationRow = ({ NotificationType, NotificationData }) => {
  const [{user}] = useStateValue()
  const acceptRequest = async () => {
    await axios({
      method: 'post',
      url: `http://localhost:5000/accept`,
      data: {
        loggedInUserID: user.uid,
        notifUserID: NotificationData.userID
      }
    })
  };
  const rejectRequest = async () => {
    await axios({
      method: 'delete',
      url: `http://localhost:5000/reject`,
      data: {
        userID: user.uid,
        requestSentByID: NotificationData.userID
      }
    })
  };

  switch (NotificationType) {
    case 'Request':
      return (
        <div class="card">
          <div class="container">
            <AccountCircleIcon />
            <h4>{`${NotificationData.userName} sent you a friend request`}</h4>
          </div>
          <div class="buttonContainer">
            <Button
              variant="contained"
              style={{
                borderRadius: 10,
                boxShadow: 10,
              }}
              sx={{
                backgroundColor: '#804fc0 !important',
                '&:hover': {
                  backgroundColor: '#6c3da9 !important',
                  color: '#fff',
                },
              }}
              onClick={acceptRequest}
            >
              Accept
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: 20,
                boxShadow: 10,
              }}
              sx={{
                backgroundColor: '#804fc0 !important',
                '&:hover': {
                  backgroundColor: '#6c3da9 !important',
                  color: '#fff',
                },
              }}
              onClick={rejectRequest}
            >
              Reject
            </Button>
          </div>
        </div>
      );
    default:
      return <p>You don't have any notifications</p>;
  }
};

export default NotificationRow;
