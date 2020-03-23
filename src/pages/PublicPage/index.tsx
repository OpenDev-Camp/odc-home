// ANCHOR React
import * as React from 'react';

// ANCHOR React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// ANCHOR Global Provider
import { GlobalProvider } from '../../components/GlobalProvider';

// ANCHOR Pages
import { HomePage } from './HomePage';

export const PublicPage = () => (
  <GlobalProvider>
    <Router>
      <Switch>
        {/** SECTION */}
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  </GlobalProvider>
);
