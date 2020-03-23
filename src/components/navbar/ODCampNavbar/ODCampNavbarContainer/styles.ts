import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Navbar Container Width
const NAVBAR_CONTAINER_WIDTH = '100%';

// ANCHOR Navbar Container Height
const NAVBAR_CONTAINER_HEIGHT = '100%';

// ANCHOR Navbar Container Padding
const NAVBAR_CONTAINER_PADDING_SMALL = '24px';
const NAVBAR_CONTAINER_PADDING_MEDIUM = '32px';
const NAVBAR_CONTAINER_PADDING_LARGE = '32px';
const NAVBAR_CONTAINER_PADDING_XLARGE = '40px';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: NAVBAR_CONTAINER_WIDTH,
    height: NAVBAR_CONTAINER_HEIGHT,

    // ANCHOR padding on small devices
    [theme.breakpoints.down('sm')]: {
      paddingLeft: NAVBAR_CONTAINER_PADDING_SMALL,
      paddingRight: NAVBAR_CONTAINER_PADDING_SMALL,
    },

    // ANCHOR padding on medium devices
    [theme.breakpoints.up('md')]: {
      paddingLeft: NAVBAR_CONTAINER_PADDING_MEDIUM,
      paddingRight: NAVBAR_CONTAINER_PADDING_MEDIUM,
    },

    // ANCHOR padding on small devices
    [theme.breakpoints.up('lg')]: {
      paddingLeft: NAVBAR_CONTAINER_PADDING_LARGE,
      paddingRight: NAVBAR_CONTAINER_PADDING_LARGE,
    },

    // ANCHOR padding on small devices
    [theme.breakpoints.up('xl')]: {
      paddingLeft: NAVBAR_CONTAINER_PADDING_XLARGE,
      paddingRight: NAVBAR_CONTAINER_PADDING_XLARGE,
    },
  },
}));
