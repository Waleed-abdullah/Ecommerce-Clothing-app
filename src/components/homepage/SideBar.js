import { useState } from 'react';
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
  const [selected, setSelected] = useState({
    Feed: false,
    Notifications: false,
    Messages: false,
    Friends: false,
  });

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
  };

  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <SideBarRow
          Icon={FeedOutlinedIcon}
          title="Feed"
          selected={selected}
          setSelected={setSelected}
        />
      </Link>
      <Link to="/notifications" style={{ textDecoration: 'none' }}>
        <SideBarRow
          Icon={NotificationsOutlinedIcon}
          title="Notifications"
          selected={selected}
          setSelected={setSelected}
        />
      </Link>
      <Link to="/messages" style={{ textDecoration: 'none' }}>
        <SideBarRow
          Icon={ChatOutlinedIcon}
          title="Messages"
          selected={selected}
          setSelected={setSelected}
        />
      </Link>
      <Link to="/profile" style={{ textDecoration: 'none' }}>
        <SideBarRow
          Icon={PeopleOutlineIcon}
          title="Friends"
          selected={selected}
          setSelected={setSelected}
        />
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
