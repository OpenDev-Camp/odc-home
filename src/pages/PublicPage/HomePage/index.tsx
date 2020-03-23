// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ODCampPage } from '../../../components/ODCampPage';
import { ODCampContentArea } from '../../../components/content/ODCampContentArea';
import { ODCampLanding } from '../../../components/landing/ODCampLanding';

export const HomePage = () => (
  <ODCampPage>
    <ODCampContentArea>
      <ODCampLanding />
    </ODCampContentArea>
  </ODCampPage>
);
