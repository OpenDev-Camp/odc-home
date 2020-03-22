import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Navbar link container width
const NAVBAR_LINK_CONTAINER_WIDTH = 'auto';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: NAVBAR_LINK_CONTAINER_WIDTH,
  },
}));
