// ANCHOR React
import * as React from 'react';

// ANCHOR React Router
import { Link } from 'react-router-dom';

// ANCHOR Material
import Typography from '@material-ui/core/Typography';

// ANCHOR Styles
import { useStyles } from './styles';

// ANCHOR Interface
import { ILinkProps } from '../../../../../../../utils/typescript/interfaces/Link';

export const ODCampNavbarDrawerItem = React.memo(({ label, href }: ILinkProps) => {
  const classes = useStyles();

  return (
    <Link to={href} className={classes.root}>
      <Typography>
        {label}
      </Typography>
    </Link>
  );
});
