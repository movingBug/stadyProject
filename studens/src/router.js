import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Stuexamsta from "./components/stueaxmsta"
import StatisticalGraph from "./components/statisticalGraph"

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact  component={IndexPage} />
        <Route path="/stuexamsta"  component={Stuexamsta}/>
        <Route path="/statisticalGraph"  component={StatisticalGraph}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
