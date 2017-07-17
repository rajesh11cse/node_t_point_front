import React from 'react';
class NodeJSHome extends React.Component {
    render() {
        return (
            <div>
                    <article className="col-md-9">
                        <div className="col-md-12">
                        <header>
                            <h1 style={{color:'#605e5e'}}>NodeJs Tutorial<span className="pull-right" style={{color:'grey', fontSize:'15px'}}>Updated on : 17 July 2017</span> </h1>
                        </header>
                        <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a target="#" href="https://nodejs.org/en/" 
                        style={{color:'green'}}>NodeJs</a> is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.

 This tutorial will help you learn the all topics of Node.js such as Node.js installations, exapmles, REPL, 
 nodejs modules, NPM, web servers, global objects, nodejs debuggers, EventEmitter,  database conection with mongodb and many more.<br />
                        <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/07/1436439824nodejs-logo.png" 
                        alt="NodeJS-large" width="383" height="160" className="" /><br />
                        Curernt version of Node.js <code>Nodejs 8.1.4</code>.</p>
                        <hr/>

                        <p className="totorial_heading">
                            <a target="_black" href="#/nodejs/introduction">NodeJs Introduction</a><br />
                        What is NodeJs and how is it useful for us.</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Environment Setup</a><br />
                        Install and setup an environment for on defferent platforms</p>

                         <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Hello World Example</a><br />
                       Classic Hello World with NodeJS.</p>

                       <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Console(REPL)</a><br />
                       Classic methods like console.log(), console.error(), console.warn() and Read Eval Print and Loop.</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Module</a><br />
                       Node.js includes three types of modules Core Modules, Local Modules and Third Party Modules</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js module.exports</a><br />
                       How module.exports works in NodeJs</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node Package Manager (NPM)</a><br />
                       What is the NPM and What is the need of NPM in Node.js</p>

                       <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Web Server</a><br />
                        What is Node.js web server and How to handle HTTP requests in NodeJs</p>

                         <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Global Objects</a><br />
                        What are Node.js global objects and Why we eeded of these variables.</p>

                           <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Debugger</a><br />
                        How to debug a nodejs application and tools to debug the application.</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js EventEmitter</a><br />
                        EventEmitter Object in NodeJS.</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">MongoDB in Node.js</a><br />
                        Use MongoDb database in your NodeJS application</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Useful Resources</a><br />
                        Node.js Useful Resources</p>

                        </div>
                    </article>
            </div>
        )
    }
}

export default NodeJSHome;