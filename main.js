import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import App from './App.jsx';
import Home from './home.jsx';
import NodeJSHome from './nodejs/home.jsx';


import NodeJsIntroduction from './nodejs/introduction.jsx';
import EnvironmentSetup from './nodejs/environmentSetup.jsx';
import HelloWorld from './nodejs/helloWorld.jsx';
import REPL from './nodejs/REPL.jsx';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={Home} />
      <Route path="/nodejs/home" component={NodeJSHome}/>
      <Route path="/nodejs/introduction" component={NodeJsIntroduction} />
      <Route path="/nodejs/environmentSetup" component={EnvironmentSetup} />
      <Route path="/nodejs/helloWorld" component={HelloWorld} />
      <Route path="/nodejs/repl" component={REPL} />
    </Route>
  </Router>

), document.getElementById('app'))


// https://pocotan001.github.io/react-styleguide-generator/#!.

/*
 ReactDOM.render((
   <Router history = {hashHistory}>
      <Route path = "/" component = {Header}>
         <IndexRoute component = {Home} />
         <Route path = "/home" component = {Home} />
        
      </Route>
      
       <Route path = "/nodejs/introduction" component = {NodeJsIntroduction} />
   </Router>
*/