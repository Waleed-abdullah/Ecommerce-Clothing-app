import React from 'react'
import { Link } from 'react-router-dom';
import './SideBarRow.css';

const SideBarRow = ({ Icon, title }) => {
  //route to the component once the user clicks the button

  const loadPage = () => {
    console.log(title);
  };

  return (
    <div className="sideBarRow" onClick={loadPage}>
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SideBarRow;