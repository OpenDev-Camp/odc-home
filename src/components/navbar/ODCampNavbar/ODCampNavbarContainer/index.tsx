// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Grid from '@material-ui/core/Grid';

// ANCHOR Component
import { ODCampNavbarLogo } from './ODCampNavbarLogo';
import { ODCampNavbarLinkContainer } from './ODCampNavbarLinkContainer';

// ANCHOR Styles
import { useStyles } from './styles';

export const ODCampNavbarContainer = React.memo(() => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <ODCampNavbarLogo />
      <ODCampNavbarLinkContainer />
    </Grid>
  );
});
