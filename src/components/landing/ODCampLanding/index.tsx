// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Grid from '@material-ui/core/Grid';

// ANCHOR Models
import { MobileView } from '../../../models/mobile-view/MobileView';

// ANCHOR Components
import { ODCampLandingContainer } from './ODCampLandingContainer';

// ANCHOR Styles
import { useStyles } from './styles';

export const ODCampLanding = React.memo(() => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <MobileView.Provider>
        <ODCampLandingContainer />
      </MobileView.Provider>
    </Grid>
  );
});
