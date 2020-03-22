// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Grid from '@material-ui/core/Grid';

// ANCHOR Component
import { ODCampNavbarLinkItem } from './ODCampNavbarLinkItem';

// ANCHOR Styles
import { useStyles } from './styles';

export const ODCampNavbarLinkContainer = React.memo(() => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <ODCampNavbarLinkItem label="Home" href="/" />
    </Grid>
  );
});
