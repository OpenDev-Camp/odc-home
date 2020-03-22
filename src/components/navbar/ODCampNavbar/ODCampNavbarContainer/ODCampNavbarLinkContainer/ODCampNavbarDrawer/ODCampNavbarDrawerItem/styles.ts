import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Colors
import * as COLORS from '@material-ui/core/colors';

// ANCHOR Navbar link item padding
const NAVBAR_LINK_ITEM_PADDING_VERTICAL = '20px';
const NAVBAR_LINK_ITEM_PADDING_HORIZONTAL = '56px';

export const useStyles = makeStyles(() => ({
  root: {
    textDecoration: 'none',
    color: 'inherit',
    paddingTop: NAVBAR_LINK_ITEM_PADDING_VERTICAL,
    paddingBottom: NAVBAR_LINK_ITEM_PADDING_VERTICAL,
    paddingLeft: NAVBAR_LINK_ITEM_PADDING_HORIZONTAL,
    '&:active': {
      color: COLORS.purple[900],
      backgroundColor: COLORS.purple[50],
    },
  },
}));
