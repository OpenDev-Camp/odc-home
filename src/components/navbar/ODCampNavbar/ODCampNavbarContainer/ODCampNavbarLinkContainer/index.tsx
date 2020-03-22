// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Grid from '@material-ui/core/Grid';

// ANCHOR Model
import { MobileView } from '../../../../../models/mobile-view/MobileView';

// ANCHOR Component
import { ODCampNavbarLinkItem } from './ODCampNavbarLinkItem';
import { ODCampNavbarHamburger } from './ODCampNavbarHamburger';

// ANCHOR Styles
import { useStyles } from './styles';

// ANCHOR Constants
import { NAVBAR_LINK_CONSTANT } from './constants';

export const ODCampNavbarLinkContainer = React.memo(() => {
  const classes = useStyles();

  const isMobile = MobileView.useSelector((state) => state.isMobile);

  return (
    <Grid container className={classes.root}>
      {isMobile ? (
        <ODCampNavbarHamburger />
      ) : (
        NAVBAR_LINK_CONSTANT.map(({ label, href }) => (
          <ODCampNavbarLinkItem label={label} href={href} />
        ))
      )}
    </Grid>
  );
});
