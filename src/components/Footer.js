import React from 'react';
import classes from './Footer.module.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__left}>
        <img
          className={classes.footer__albumLogo}
          src="https://upload.wikimedia.org/wikiped"
          alt=""
        />
        <div className={classes.footer__songInfo}>
          <h4>yeah</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className={classes.footer__center}>
        <ShuffleIcon className={classes.footer__green} />
        <SkipPreviousIcon className={classes.footer__icon} />
        <PlayCircleOutlineIcon
          fontSize="large"
          className={classes.footer__icon}
        />
        <SkipNextIcon className={classes.footer__icon} />
        <RepeatIcon className={classes.footer__green} />
      </div>
      <div className={classes.footer__right}>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider className={classes.slider} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
