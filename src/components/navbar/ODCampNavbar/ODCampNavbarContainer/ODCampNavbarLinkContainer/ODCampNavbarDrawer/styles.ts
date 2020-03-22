import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Navbar drawer width
const NAVBAR_DRAWER_WIDTH = '280px';

// ANCHOR Navbar drawer padding
const NAVBAR_DRAWER_PADDING = '32px';

// ANCHOR Navbar drawer logo padding
const NAVBAR_DRAWER_LOGO_PADDING_VERTICAL = '16px';
const NAVBAR_DRAWER_LOGO_PADDING_HORIZONTAL = '24px';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: NAVBAR_DRAWER_WIDTH,
    paddingTop: NAVBAR_DRAWER_PADDING,
    backgroundColor: 'white',
  },
  logo: {
    paddingBottom: NAVBAR_DRAWER_LOGO_PADDING_VERTICAL,
    paddingLeft: NAVBAR_DRAWER_LOGO_PADDING_HORIZONTAL,
  },
}));
