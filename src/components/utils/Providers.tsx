// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { MobileView } from '../../models/mobile-view/MobileView';

export const makeProviders = () => [
  /**
 * ANCHOR Provider for the MobileView
 *
 * NOTE Used for monitoring orientation changes
 */
  <MobileView.Provider key="MobileView" />,
];
