import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Colors
import * as COLORS from '@material-ui/core/colors';

// ANCHOR Navbar link item margin
const NAVBAR_LINK_ITEM_MARGIN = '40px';

export const useStyles = makeStyles(() => ({
  root: {
    textDecoration: 'none',
    color: 'inherit',
    marginLeft: NAVBAR_LINK_ITEM_MARGIN,
    '&:hover': {
      color: COLORS.purple[700],
    },
  },
}));
