import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Margin for both sides
const contentMargin = '47px';

export const useStyles = makeStyles({
  root: {
    marginLeft: contentMargin,
    marginRight: contentMargin,
  },
});
