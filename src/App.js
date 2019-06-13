import React, { Component } from 'react';
import { BasicLayout } from './layouts';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home, About } from './pages'

const App = () => {
  return (
    <Router>
          <BasicLayout>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/about' component={About} />
            </Switch>
          </BasicLayout>
    </Router>
  );
}

export default App;

