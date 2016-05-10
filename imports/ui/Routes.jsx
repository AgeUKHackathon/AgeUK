import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Theme from './Theme/Theme';
import App from './App';

const Routes = () =>
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Theme} />
      </Route>
    </Router>
  </div>;

export default Routes;
