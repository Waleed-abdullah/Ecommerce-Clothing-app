import SideBarRow from './SideBarRow';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import SignOutButton from './SignOutButton';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../State/StateProvider';
import { actionTypes } from '../../State/Reducer';

const SideBar = () => {
  const dispatch = useStateValue()[1];

  const signOut = () => {
    //remove the user

    dispatch({
      type: actionTypes.SET_USER,
      user: null,
    });

    //set userExists to false
    dispatch({
      type: actionTypes.SET_USER_EXISTS,
      userExists: false,
    });

    console.log('signedOut');
  };

  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <SideBarRow Icon={FeedOutlinedIcon} title="Feed" />
      </Link>
      <Link to="/notifications" style={{ textDecoration: 'none' }}>
        <SideBarRow Icon={NotificationsOutlinedIcon} title="Notifications" />
      </Link>
      <Link to="/messages" style={{ textDecoration: 'none' }}>
        <SideBarRow Icon={ChatOutlinedIcon} title="Messages" />
      </Link>
      <Link to="/profile" style={{ textDecoration: 'none' }}>
        <SideBarRow Icon={PeopleOutlineIcon} title="Friends" />
      </Link>
      <div
        style={{
          position: 'fixed',
          top: '90%',
          padding: '5px',
        }}
      >
        <SignOutButton handleClick={signOut} />
      </div>
    </div>
  );
};

export default SideBar;
