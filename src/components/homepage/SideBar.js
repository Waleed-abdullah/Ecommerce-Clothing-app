import SideBarRow from './SideBarRow';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
      <Link to='/' style={{textDecoration: 'none'}}><SideBarRow Icon={FeedOutlinedIcon} title="Feed" /></Link>
      <Link to='/notifications' style={{textDecoration: 'none'}}><SideBarRow Icon={NotificationsOutlinedIcon} title="Notifications" /></Link>
      <Link to='/messages' style={{textDecoration: 'none'}}><SideBarRow Icon={ChatOutlinedIcon} title="Messages" /></Link>
      <Link to='/profile' style={{textDecoration: 'none'}}><SideBarRow Icon={PersonOutlineIcon} title="Profile" /></Link>
    </div>
  );
};

export default SideBar;