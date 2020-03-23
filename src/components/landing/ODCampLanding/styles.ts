import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Landing width
const LANDING_WIDTH = '100%';

// ANCHOR Landing Height
const LANDING_HEIGHT = '100vh';

export const useStyles = makeStyles(() => ({
  root: {
    width: LANDING_WIDTH,
    height: LANDING_HEIGHT,
  },
}));
