import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Margin for both sides
const CONTENT_MARGIN = '0px';

export const useStyles = makeStyles({
  root: {
    marginLeft: CONTENT_MARGIN,
    marginRight: CONTENT_MARGIN,
  },
});
