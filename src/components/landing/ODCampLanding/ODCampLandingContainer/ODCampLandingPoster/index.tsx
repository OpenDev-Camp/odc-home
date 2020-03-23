// ANCHOR React
import * as React from 'react';

// ANCHOR Component
import { ReactComponent as Poster } from './landing-poster.svg';

// ANCHOR Styles
import { useStyles } from './styles';

export const ODCampLandingPoster = React.memo(() => {
  const classes = useStyles();

  return (
    <Poster className={classes.root} />
  );
});
