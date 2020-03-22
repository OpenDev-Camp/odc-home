// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Drawer from '@material-ui/core/Drawer';

// ANCHOR Model
import { HamburgerToggle } from '../../../../../../models/navbar/HamburgerToggle';

// ANCHOR Styles
import { useStyles } from './styles';

export const ODCampNavbarDrawer = React.memo(() => {
  const classes = useStyles();

  const [open, hide] = HamburgerToggle.useSelectors((state) => [
    state.state, state.hide,
  ]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={hide}
      variant="temporary"
      classes={{
        paper: classes.root,
      }}
    >
      Hello ced
    </Drawer>
  );
});
