/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-18 21:32:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-20 14:18:01
 */
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './components/login';
import Main from './components/main';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" exact component={Main} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
