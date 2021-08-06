import React from 'react';
import classes from './SidebarOption.module.css';

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className={classes.sidebarOption}>
      <p>{title}</p>
    </div>
  );
};

export default SidebarOption;
