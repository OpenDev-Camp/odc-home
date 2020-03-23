// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Typography from '@material-ui/core/Typography';

// ANCHOR Styles
import { useStyles } from './styles';

// ANCHOR Constants
import { LANDING_SLOGAN_CONSTANT } from './constants';

export const ODCampLandingSlogan = React.memo(() => {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      {LANDING_SLOGAN_CONSTANT}
    </Typography>
  );
});
