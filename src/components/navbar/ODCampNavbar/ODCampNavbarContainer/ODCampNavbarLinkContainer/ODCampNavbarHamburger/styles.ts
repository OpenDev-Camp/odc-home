import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Navbar hamburger margin
const NAVBAR_HAMBURGER_MARGIN = '-8px';

export const useStyles = makeStyles(() => ({
  root: {
    color: 'inherit',
    marginRight: NAVBAR_HAMBURGER_MARGIN,
  },
}));
