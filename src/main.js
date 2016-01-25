import React from 'react';
import { render } from 'react-dom'
import { IndexRoute, Route, Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import MainLayout from 'layouts/MainLayout'

import HomePage from 'pages/Home'
import AboutPage from 'pages/About'

const history = createBrowserHistory()

render((
  <Router history={history}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage} />
    </Route>
  </Router>
), document.getElementById('root'))
