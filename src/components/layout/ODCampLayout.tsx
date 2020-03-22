// ANCHOR React
import * as React from 'react';

// ANCHOR Styles
import { useStyles } from './styles';

// ANCHOR Interface
import { IChildrenProps } from '../../utils/typescript/interfaces/Children';

export const ODCampLayout = ({ children }: IChildrenProps) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};
