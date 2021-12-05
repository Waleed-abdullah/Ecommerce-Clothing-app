import SideBarRow from './SideBarRow';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

const SideBar = () => {
  return (
    <div>
      <SideBarRow Icon={FeedOutlinedIcon} title="Feed" />
      <SideBarRow Icon={NotificationsOutlinedIcon} title="Notifications" />
      <SideBarRow Icon={ChatOutlinedIcon} title="Messages" />
      <SideBarRow Icon={PersonOutlineIcon} title="Profile" />
    </div>
  );
};

export default SideBar;