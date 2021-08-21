import {
  FavoriteOutlined,
  MoreHorizOutlined,
  PlayCircleFilled,
} from '@material-ui/icons';
import React from 'react';
import { useDataLayerValue } from '../DataLayer';
import classes from './Body.module.css';
import Header from './Header';
import SongRow from './SongRow';

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className={classes.body}>
      <Header spotify={spotify} />

      <div className={classes.body__info}>
        <img src={discover_weekly?.images[0]} alt="" />
        <div className={classes.body__infoText}>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className={classes.body__songs}>
        <div className={classes.body__icons}>
          <PlayCircleFilled className={classes.body__shuffle} />
          <FavoriteOutlined fontSize="large" />
          <MoreHorizOutlined />
        </div>
        {discover_weekly?.tracks.items.map((item) => {
          <SongRow track={item.track} />;
        })}
      </div>
    </div>
  );
};

export default Body;
