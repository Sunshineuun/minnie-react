/*
   Root, Router 配置
   路由配置
*/
import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import history from '../containers/history';

import App from './../containers/App';
import Home from './../containers/Home';
import Login from '../containers/Login';
import NoMatch from '../containers/404';

export default class Root extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/app' component={App}/>
          <Route path='/login' component={Login}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    );
  }
}
