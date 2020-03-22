import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Content area margin
const contentAreaMargin = '92px';

// ANCHOR Content area padding
const contentAreaPaddingVertical = '32px';

export const useStyles = makeStyles({
  outer: {
    display: 'block',
    marginLeft: contentAreaMargin,
    marginRight: contentAreaMargin,
  },
  inner: {
    paddingTop: contentAreaPaddingVertical,
    paddingBottom: contentAreaPaddingVertical,
  },
});
