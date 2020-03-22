// ANCHOR React
import * as React from 'react';

// ANCHOR React Router
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// ANCHOR Provider
import { GlobalProvider } from './components/GlobalProvider';

// ANCHOR Pages
import { NotFoundPage } from './pages/ErrorPage/NotFoundPage';
import { OnProgressPage } from './pages/ErrorPage/OnProgressPage';
import { HomePage } from './pages/PublicPage/HomePage';

export const App = React.memo(() => (
  <GlobalProvider>
    <Router>
      <Switch>
        {/* SECTION: Sign In Page  */}
        <Route exact path="/" component={HomePage} />
        {/** SECTION About Page */}
        <Route exact path="/about" component={OnProgressPage} />
        {/** SECTION Team Page */}
        <Route exact path="/team" component={OnProgressPage} />
        {/** SECTION Project Page */}
        <Route exact path="/project" component={OnProgressPage} />
        {/* SECTION: 404 Page  */}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </GlobalProvider>
));
