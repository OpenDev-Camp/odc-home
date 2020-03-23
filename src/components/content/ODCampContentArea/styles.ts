import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Content area margin
const CONTENT_AREA_MARGIN_SMALL = '32px';
const CONTENT_AREA_MARGIN_MEDIUM = '88px';
const CONTENT_AREA_MARGIN_LARGE = '96px';
const CONTENT_AREA_MARGIN_XLARGE = '120px';

export const useStyles = makeStyles((theme) => ({
  outer: {
    display: 'block',

    // ANCHOR margin on small devices
    [theme.breakpoints.down('sm')]: {
      marginLeft: CONTENT_AREA_MARGIN_SMALL,
      marginRight: CONTENT_AREA_MARGIN_SMALL,
    },

    // ANCHOR margin on medium devices
    [theme.breakpoints.up('md')]: {
      marginLeft: CONTENT_AREA_MARGIN_MEDIUM,
      marginRight: CONTENT_AREA_MARGIN_MEDIUM,
    },

    // ANCHOR margin on small devices
    [theme.breakpoints.up('lg')]: {
      marginLeft: CONTENT_AREA_MARGIN_LARGE,
      marginRight: CONTENT_AREA_MARGIN_LARGE,
    },

    // ANCHOR margin on small devices
    [theme.breakpoints.up('xl')]: {
      marginLeft: CONTENT_AREA_MARGIN_XLARGE,
      marginRight: CONTENT_AREA_MARGIN_XLARGE,
    },
  },
  inner: {},
}));
