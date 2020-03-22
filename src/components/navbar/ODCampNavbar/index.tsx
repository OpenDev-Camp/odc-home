// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Grid from '@material-ui/core/Grid';

// ANCHOR Components
import { ODCampNavbarContainer } from './ODCampNavbarContainer';

// ANCHOR Styles
import { useStyles } from './styles';

export const ODCampNavbar = React.memo(() => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <ODCampNavbarContainer />
    </Grid>
  );
});
