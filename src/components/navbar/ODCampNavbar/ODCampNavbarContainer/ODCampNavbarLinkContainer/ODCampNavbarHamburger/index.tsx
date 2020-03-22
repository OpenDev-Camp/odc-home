// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import IconButton from '@material-ui/core/IconButton';

// ANCHOR Icons
import MenuIcon from '@material-ui/icons/Menu';

// ANCHOR Model
import { HamburgerToggle } from '../../../../../../models/navbar/HamburgerToggle';

// ANCHOR Hooks
import { useConstant } from '../../../../../../utils/hooks/useConstant';

// ANCHOR Styles
import { useStyles } from './styles';

export const ODCampNavbarHamburger = React.memo(() => {
  const classes = useStyles();

  const show = HamburgerToggle.useSelector((state) => state.show);

  const menuIcon = useConstant(() => <MenuIcon />);

  return (
    <IconButton className={classes.root} onClick={show}>
      {menuIcon}
    </IconButton>
  );
});
