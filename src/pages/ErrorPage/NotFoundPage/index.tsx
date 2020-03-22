// ANCHOR React
import * as React from 'react';

// ANCHOR Material
import Container from '@material-ui/core/Container';

// ANCHOR React Router
import { Link } from 'react-router-dom';

// ANCHOR Styles
import { useStyles } from './styles';

export const NotFoundPage = React.memo(() => {
  const classes = useStyles();

  return (
    <Container className={classes.container} component="main">
      <div>
        <div>
          <h1 className={classes.heading}>
            Oops!
          </h1>
          <h2 className={classes.body}>
            404 - The Page can&apos;t be found
          </h2>
        </div>
        <Link className={classes.button} to="/">
          Go To Homepage
        </Link>
      </div>
    </Container>
  );
});
