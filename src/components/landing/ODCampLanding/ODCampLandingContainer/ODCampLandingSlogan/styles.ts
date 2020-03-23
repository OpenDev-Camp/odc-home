import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Slogan Max Width
const LANDING_SLOGAN_MAX_WIDTH_MEDIUM = '40%';
const LANDING_SLOGAN_MAX_WIDTH_SMALL = '80%';

// ANCHOR Slogan Font Size
const LANDING_SLOGAN_FONT_SIZE = '40px';

export const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: LANDING_SLOGAN_FONT_SIZE,
    fontWeight: 700,

    // ANCHOR maxWidth for small and down
    [theme.breakpoints.down('sm')]: {
      maxWidth: LANDING_SLOGAN_MAX_WIDTH_SMALL,
    },

    // ANCHOR maxWidth for medium and up
    [theme.breakpoints.up('md')]: {
      maxWidth: LANDING_SLOGAN_MAX_WIDTH_MEDIUM,
    },
  },
}));
