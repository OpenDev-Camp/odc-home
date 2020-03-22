// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Grid from '@material-ui/core/Grid';

// ANCHOR Component
import { ODCampNavbarLinkItem } from './ODCampNavbarLinkItem';

// ANCHOR Styles
import { useStyles } from './styles';

// ANCHOR Constants
import { NAVBAR_CONSTANT } from './ODCampNavbarLinkItem/constants';

export const ODCampNavbarLinkContainer = React.memo(() => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {
        NAVBAR_CONSTANT.map(({ label, href }) => (
          <ODCampNavbarLinkItem label={label} href={href} />
        ))
      }
    </Grid>
  );
});
