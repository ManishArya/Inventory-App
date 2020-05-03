import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Notfound from './components/notFound';
import Dashboard from './components/dashboard';
import Workspace from './components/workspace';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/Workspace" component={Workspace} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
