import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Navbar Container Width
const NAVBAR_CONTAINER_WIDTH = '100%';

// ANCHOR Navbar Container Height
const NAVBAR_CONTAINER_HEIGHT = '100%';

// ANCHOR Navbar Container Padding
const NAVBAR_CONTAINER_PADDING = '40px';

// ANCHOR Brand Font Size
const BRAND_FONT_SIZE = '22px';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: NAVBAR_CONTAINER_WIDTH,
    height: NAVBAR_CONTAINER_HEIGHT,
    paddingLeft: NAVBAR_CONTAINER_PADDING,
    paddingRight: NAVBAR_CONTAINER_PADDING,
  },
  logo: {
    fontSize: BRAND_FONT_SIZE,
    fontWeight: 500,
  },
}));
