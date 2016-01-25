import React from 'react';
import { render } from 'react-dom'
import { IndexRoute, Route, Router, browserHistory } from 'react-router'

// Layouts
import MainLayout from 'layouts/MainLayout'

// Pages
import HomePage from 'pages/Home'
import AboutPage from 'pages/About'

// Render to html
render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage} />
    </Route>
  </Router>, 
  document.getElementById('root')
)
