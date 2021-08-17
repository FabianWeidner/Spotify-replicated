import React from 'react';
import classes from './Body.module.css';
import Header from './Header';

const Body = ({ spotify }) => {
  return (
    <div className={classes.body}>
      <Header spotify={spotify} />
    </div>
  );
};

export default Body;
