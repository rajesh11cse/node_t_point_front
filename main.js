import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import App from './App.jsx';
import Home from './home.jsx';
import NodeJSHome from './nodejs/home.jsx';


import NodeJsIntroduction from './nodejs/introduction.jsx';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={Home} />
      <Route path="/nodejs/home" component={NodeJSHome}/>
      <Route path="/nodejs/introduction" component={NodeJsIntroduction} />
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