/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-18 21:32:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-21 15:10:24
 */
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './components/login';
import Main from './components/main';
import StatisticalGraph from "./components/statisticalGraph";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" exact component={Main} />
        <Route path="/statisticalGraph"  component={StatisticalGraph}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
