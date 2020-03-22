// ANCHOR React
import * as React from 'react';

// ANCHOR React Router

// ANCHOR Material UI
import { Typography } from '@material-ui/core';

// ANCHOR Models

// ANCHOR Components
import { ODCampPage } from '../../../components/ODCampPage';
import { ODCampContentArea } from '../../../components/content/ODCampContentArea';

export const HomePage = () => (
  <ODCampPage>
    <ODCampContentArea>
      <Typography>
        Home Page
      </Typography>
    </ODCampContentArea>
  </ODCampPage>
);
