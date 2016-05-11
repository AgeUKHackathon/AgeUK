import React from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import Topic from './Topic.jsx'
import App from './App.jsx'

export default class Routes extends React.Component {
    render () {
      return (
        <div>
          <Router history={browserHistory}>
            <Route path='/' component={App}>
              <IndexRoute component={Topic} />
            </Route>
          </Router>
        </div>
      )
    }
}
