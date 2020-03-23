// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Grid from '@material-ui/core/Grid';

// ANCHOR Models
import { MobileView } from '../../../models/mobile-view/MobileView';

// ANCHOR Hooks
import { useScrollPosition } from '../../../utils/hooks/useScrollPosition';

// ANCHOR Components
import { ODCampNavbarContainer } from './ODCampNavbarContainer';

// ANCHOR Styles
import { useStyles } from './styles';

export const ODCampNavbar = React.memo(() => {
  const classes = useStyles();
  const { scrolledY } = useScrollPosition(250);

  return (
    <Grid container className={scrolledY ? classes.scrolled : classes.root}>
      <MobileView.Provider>
        <ODCampNavbarContainer />
      </MobileView.Provider>
    </Grid>
  );
});
