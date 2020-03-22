import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Navbar width
const NAVBAR_LINK_CONTAINER_WIDTH = 'auto';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    width: NAVBAR_LINK_CONTAINER_WIDTH,
  },
}));
