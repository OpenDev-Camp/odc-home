import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalProvider } from './components/GlobalProvider';
import { NotFoundPage } from './pages/ErrorPage/NotFoundPage';
import { PublicPage } from './pages/PublicPage';

export const App = React.memo(() => (
  <GlobalProvider>
    <Router>
      <Switch>
        {/* SECTION: Sign In Page  */}
        <Route exact path="/" component={PublicPage} />
        {/* SECTION: 404 Page  */}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </GlobalProvider>
));
