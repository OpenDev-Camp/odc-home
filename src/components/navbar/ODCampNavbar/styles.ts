import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Navbar width
const NAVBAR_WIDTH = '100%';

// ANCHOR Navbar Height
const NAVBAR_HEIGHT = '96px';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    position: 'fixed',
    width: NAVBAR_WIDTH,
    height: NAVBAR_HEIGHT,
    backgroundColor: 'inherit',
    color: 'inherit',
  },
  scrolled: {
    display: 'grid',
    position: 'fixed',
    width: NAVBAR_WIDTH,
    height: NAVBAR_HEIGHT,
    backgroundColor: '#57038D',
    color: 'white',
  },
}));
