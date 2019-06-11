import React, { Component } from 'react';
import { BasicLayout } from './layouts';
import { GlobalStyles } from './assets/styles'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return (
    <div className="full-height">
      <GlobalStyles />
      <BasicLayout />
    </div>
  );
}

export default App;
