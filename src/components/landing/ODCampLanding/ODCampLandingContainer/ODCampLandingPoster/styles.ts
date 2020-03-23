import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Navbar Container Width
const LANDING_POSTER_WIDTH = '45%';

// ANCHOR Navbar Container Height
const LANDING_POSTER_HEIGHT = 'auto';

export const useStyles = makeStyles(() => ({
  root: {
    width: LANDING_POSTER_WIDTH,
    height: LANDING_POSTER_HEIGHT,
  },
}));
