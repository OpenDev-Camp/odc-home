import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Content area margin
const CONTENT_AREA_MARGIN = '92px';

// ANCHOR Content area padding
const CONTENT_AREA_PADDING_VERTICAL = '32px';

export const useStyles = makeStyles({
  outer: {
    display: 'block',
    marginLeft: CONTENT_AREA_MARGIN,
    marginRight: CONTENT_AREA_MARGIN,
  },
  inner: {
    paddingTop: CONTENT_AREA_PADDING_VERTICAL,
    paddingBottom: CONTENT_AREA_PADDING_VERTICAL,
  },
});
