import './NotificationRow.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

const NotificationRow = ({ NotificationType, NotificationData }) => {
  const acceptRequest = async () => {
    console.log('accept');
  };
  const rejectRequest = async () => {
    console.log('reject');
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
