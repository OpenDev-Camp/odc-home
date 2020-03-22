// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Typography from '@material-ui/core/Typography';

// ANCHOR Styles
import { useStyles } from './styles';

export const ODCampNavbarLogo = React.memo(() => {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      OpenDev Camp
    </Typography>
  );
});
