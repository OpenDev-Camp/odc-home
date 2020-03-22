// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Grid from '@material-ui/core/Grid';

// ANCHOR Model
import { MobileView } from '../../../../models/mobile-view/MobileView';

// ANCHOR Component
import { ODCampNavbarLogo } from './ODCampNavbarLogo';
import { ODCampNavbarLinkContainer } from './ODCampNavbarLinkContainer';

// ANCHOR Styles
import { useStyles } from './styles';

export const ODCampNavbarContainer = React.memo(() => {
  const classes = useStyles();

  const isMobile = MobileView.useSelector((state) => state.isMobile);

  return (
    <Grid container className={classes.root}>
      { !isMobile && <ODCampNavbarLogo /> }
      <ODCampNavbarLinkContainer />
    </Grid>
  );
});
