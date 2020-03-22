import { makeStyles } from '@material-ui/core/styles';

// ANCHOR: Layout width
export const WIDTH = '100vw';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    width: WIDTH,
  },
}));
