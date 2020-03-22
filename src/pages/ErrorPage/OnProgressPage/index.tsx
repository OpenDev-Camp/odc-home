// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Container from '@material-ui/core/Container';

// ANCHOR React Router
import { Link } from 'react-router-dom';

// ANCHOR Styles
import { useStyles } from './styles';

export const OnProgressPage = React.memo(() => {
  const classes = useStyles();

  return (
    <Container className={classes.container} component="main">
      <div>
        <div>
          <h1 className={classes.heading}>
            Sorry!
          </h1>
          <h2 className={classes.body}>
            Page is still in progress, Come back later
          </h2>
        </div>
        <Link className={classes.button} to="/">
          Go To Homepage
        </Link>
      </div>
    </Container>
  );
});
