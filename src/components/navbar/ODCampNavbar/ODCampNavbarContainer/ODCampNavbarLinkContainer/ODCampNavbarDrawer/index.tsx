// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';

// ANCHOR Model
import { HamburgerToggle } from '../../../../../../models/navbar/HamburgerToggle';

// ANCHOR Components
import { ODCampNavbarDrawerItem } from './ODCampNavbarDrawerItem';
import { ODCampNavbarLogo } from '../../ODCampNavbarLogo';

// ANCHOR Styles
import { useStyles } from './styles';

// ANCHOR Contants
import { NAVBAR_LINK_CONSTANT } from '../constants';

export const ODCampNavbarDrawer = React.memo(() => {
  const classes = useStyles();

  const [open, hide] = HamburgerToggle.useSelectors((state) => [
    state.state, state.hide,
  ]);

  const paperStyle = {
    paper: classes.root,
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={hide}
      variant="temporary"
      classes={paperStyle}
    >
      <Grid className={classes.logo}>
        <ODCampNavbarLogo />
      </Grid>
      {
        NAVBAR_LINK_CONSTANT.map(({ label, href }) => (
          <ODCampNavbarDrawerItem label={label} href={href} />
        ))
      }
    </Drawer>
  );
});
