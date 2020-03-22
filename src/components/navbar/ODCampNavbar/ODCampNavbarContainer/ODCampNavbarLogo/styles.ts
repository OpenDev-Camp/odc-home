import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Brand Font Size
const NAVBAR_LOGO_FONT_SIZE = '22px';

export const useStyles = makeStyles(() => ({
  root: {
    fontSize: NAVBAR_LOGO_FONT_SIZE,
    fontWeight: 500,
  },
}));
