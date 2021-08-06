import Sidbar from './Sidebar';
import Body from './Body';
import classes from './Player.module.css';
import Footer from './Footer';

export const Player = ({ spotify }) => {
  return (
    <div className={classes.player}>
      <div className={classes.player__body}>
        <Sidbar />
        <Body />
      </div>

      <Footer />
    </div>
  );
};

export default Player;
