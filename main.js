import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import App from './App.jsx';
import Home from './home.jsx';
import NodeJSHome from './nodejs/home.jsx';
import NodeInterview from './interview/nodeInterview.jsx';
import ContactUs from './contactUs.jsx';


import NodeJsIntroduction from './nodejs/introduction.jsx';
import EnvironmentSetup from './nodejs/environmentSetup.jsx';
import HelloWorld from './nodejs/helloWorld.jsx';
import REPL from './nodejs/REPL.jsx';
import Module from './nodejs/module.jsx';
import ModuleExport from './nodejs/moduleExport.jsx';
import NPM from './nodejs/npm.jsx';
import WebServer from './nodejs/webServer.jsx';
import GlobalObject from './nodejs/globalObject.jsx';
import Debugging from './nodejs/debugging.jsx';
import EventLoop from './nodejs/eventLoop.jsx';
import EventEmitters from './nodejs/eventEmitters.jsx';
import FileSystem from './nodejs/file-system.jsx';
import Callback from './nodejs/callback.jsx';
import Buffers from './nodejs/buffers.jsx';
import Streams from './nodejs/streams.jsx';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={Home} />
      <Route path="/interview/nodeInterview" component={NodeInterview} />
      <Route path="/contactUs" component={ContactUs} />
      <Route path="/nodejs/home" component={NodeJSHome} />
      <Route path="/nodejs/introduction" component={NodeJsIntroduction} />
      <Route path="/nodejs/environmentSetup" component={EnvironmentSetup} />
      <Route path="/nodejs/helloWorld" component={HelloWorld} />
      <Route path="/nodejs/repl" component={REPL} />
      <Route path="/nodejs/module" component={Module} />
      <Route path="/nodejs/moduleExport" component={ModuleExport} />
      <Route path="/nodejs/npm" component={NPM} />
      <Route path="/nodejs/WebServer" component={WebServer} />
      <Route path="/nodejs/globalObject" component={GlobalObject} />
      <Route path="/nodejs/debugging" component={Debugging} />
      <Route path="/nodejs/eventLoop" component={EventLoop} />
      <Route path="/nodejs/eventEmitters" component={EventEmitters} />
      <Route path="/nodejs/file-system" component={FileSystem} />
      <Route path="/nodejs/callback" component={Callback} />
      <Route path="/nodejs/buffers" component={Buffers} />
      <Route path="/nodejs/streams" component={Streams} />
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