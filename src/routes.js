import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import LoginReturn from './components/Auth/LoginReturn';
import Logout from './components/Auth/Logout';
import PlacesPage from './components/PlacesPage/PlacesPage';
import AboutPage from './components/AboutPage/AboutPage';
import require_auth from './components/Auth/require_auth';
import PrivatePage from './components/PrivatePage/PrivatePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/login/return" component={LoginReturn}/>
    <Route path="/logout" component={Logout}/>
    <Route path="/places" component={PlacesPage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/private" component={require_auth(PrivatePage)}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
