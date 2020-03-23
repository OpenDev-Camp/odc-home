import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Landing Container Width
const LANDING_CONTAINER_WIDTH = '100%';

// ANCHOR Landing Container Height
const LANDING_CONTAINER_HEIGHT = '100%';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: LANDING_CONTAINER_WIDTH,
    height: LANDING_CONTAINER_HEIGHT,
  },
}));
