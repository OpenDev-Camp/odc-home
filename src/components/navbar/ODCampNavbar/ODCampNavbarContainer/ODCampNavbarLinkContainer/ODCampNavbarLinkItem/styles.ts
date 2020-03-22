import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Navbar link item margin
const NAVBAR_LINK_ITEM_MARGIN = '40px';

export const useStyles = makeStyles(() => ({
  root: {
    textDecoration: 'none',
    color: 'white',
    marginLeft: NAVBAR_LINK_ITEM_MARGIN,
  },
}));
