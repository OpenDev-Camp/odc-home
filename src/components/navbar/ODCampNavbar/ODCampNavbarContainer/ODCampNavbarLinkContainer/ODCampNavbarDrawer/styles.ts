import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Navbar drawer width
const NAVBAR_DRAWER_WIDTH = '280px';

export const useStyles = makeStyles(() => ({
  root: {
    width: NAVBAR_DRAWER_WIDTH,
    backgroundColor: 'white',
  },
}));
