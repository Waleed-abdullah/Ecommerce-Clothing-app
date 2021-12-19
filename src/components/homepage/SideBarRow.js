import React from 'react';
import './SideBarRow.css';

const SideBarRow = ({ Icon, title, selected, setSelected }) => {
  //route to the component once the user clicks the button
  let isSelected = 'noStyle';

  const setStyle = () => {
    setSelected((prevState) => {
      const keys = Object.keys(prevState);
      const newState = {};
      for (const key of keys) {
        if (key === title) newState[key] = true;
        else newState[key] = false;
      }
      return newState;
    });
  };

  if (selected[title]) {
    isSelected = 'selected';
  }

  return (
    <div className={`sideBarRow ${isSelected}`} onClick={setStyle}>
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SideBarRow;
