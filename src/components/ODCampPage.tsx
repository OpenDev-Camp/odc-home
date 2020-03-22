// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ODCampLayout } from './layout/ODCampLayout';
import { ODCampContent } from './content/ODCampContent';
import { ODCampContentArea } from './content/ODCampContentArea';

// ANCHOR Inteface
import { IChildrenProps } from '../utils/typescript/interfaces/Children';

export const ODCampPage = ({ children }: IChildrenProps) => (
  <ODCampLayout>
    <ODCampContent>
      <ODCampContentArea>
        {children}
      </ODCampContentArea>
    </ODCampContent>
  </ODCampLayout>
);
