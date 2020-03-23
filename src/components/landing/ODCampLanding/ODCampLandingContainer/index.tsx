// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Grid from '@material-ui/core/Grid';

// ANCHOR Model
import { MobileView } from '../../../../models/mobile-view/MobileView';

// ANCHOR Component
import { ODCampLandingSlogan } from './ODCampLandingSlogan';
import { ODCampLandingPoster } from './ODCampLandingPoster';

// ANCHOR Styles
import { useStyles } from './styles';

export const ODCampLandingContainer = React.memo(() => {
  const classes = useStyles();

  const isMobile = MobileView.useSelector((state) => state.isMobile);

  return (
    <Grid container direction="row" className={classes.root}>
      <ODCampLandingSlogan />
      {!isMobile && <ODCampLandingPoster />}
    </Grid>
  );
});
