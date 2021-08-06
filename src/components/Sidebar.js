import React from 'react';
import classes from './Sidebar.module.css';
import SidebarOption from './SidebarOption';

const Sidbar = () => {
  return (
    <div className={classes.sidebar}>
      <img
        className={classes.sidebar__logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" />
      <SidebarOption title="Search" />
      <SidebarOption title="Your Library" />
    </div>
  );
};

export default Sidbar;
