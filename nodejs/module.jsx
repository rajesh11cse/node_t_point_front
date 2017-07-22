import React from 'react';
class Module extends React.Component {
    render() {
        return (
            <div>
                <article>
                    <div className="col-md-12">
                        <a href="#/nodejs/repl" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/moduleExport" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Node.js Module</h2>
                            <p>Module in Node.js is a simple or complex functionality which encapsulates encapsulates related code into a single unit of code
                                 or multiple JavaScript files which can be reused throughout the Node.js application.</p>

                            <p>Node modules run in their own scope so that they do not conflict with other modules or pollute
                                global scope. Also, each module can be placed in a separate .js file under a separate folder.</p>

                            <p>Node.js implements <a target="#" href="http://requirejs.org/docs/commonjs.html"
                                style={{ color: 'green' }}>CommonJS modules standard.</a>  CommonJS modules enables you to include javascript
                        modules within the current scope and effectively keeps the global scope from being polluted.</p>
                        </p>

                        <p className="totorial_question">
                            <h2>Module Types</h2>
                            <p>
                                Node.js includes three types of modules:
                            </p>
                            <ol>
                                <li>Core Modules</li>
                                <li>Local Modules</li>
                                <li>Third Party Modules</li>
                            </ol>
                        </p>

                        <p className="totorial_question">
                            <h2>Core Modules</h2>
                            <p>
                                The core modules are defined in node's "lib" folder.
                            </p>
                            <ul>
                                <li>Node has several module compiled into the binary.</li>
                                <li>Core modules are loaded if their identifier is passed to require().</li>
                            </ul>
                            <p>
                                The following table lists some of the important core modules which are ever used in Node.js application.
                            </p>
                            <table className="code-table">
                                <thead>
                                    <tr>
                                        <td><strong>Core Module Name</strong></td>
                                        <td><strong>Description</strong></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a target="_black" href="https://nodejs.org/api/http.html">http</a></td>
                                        <td>http module includes classes, methods and events to create Node.js http server.</td>
                                    </tr>
                                    <tr>
                                        <td><a target="_black" href="https://nodejs.org/api/url.html">url</a></td>
                                        <td>url module includes methods for URL resolution and parsing.</td>
                                    </tr>
                                    <tr>
                                        <td><a target="_black" href="https://nodejs.org/api/querystring.html">querystring</a></td>
                                        <td>querystring module includes methods to deal with query string.</td>
                                    </tr>
                                    <tr>
                                        <td><a target="_black" href="https://nodejs.org/api/path.html">path</a></td>
                                        <td>path module includes methods to deal with file paths.</td>
                                    </tr>
                                    <tr>
                                        <td><a target="_black" href="https://nodejs.org/api/fs.html">fs</a></td>
                                        <td>fs module includes classes, methods, and events to work with file I/O.</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <p>
                                Let's implement a small examples to understand how the core module works with node.js.
                               Have a look at the following example.
                             </p>
                            <p>create a file in notepade and save it as http-server.js</p>
                            <p><i style={{ backgroundColor: '#e8e8e8' }}>http-server.js</i></p>
                            <p className="text-code">
                                <p><span style={{ color: 'blue' }}>var</span> http = require("<span style={{ color: 'red' }}>http</span>");</p>
                                <p><span style={{ color: 'blue' }}>var</span> server = http.createServer(<span style={{ color: 'blue' }}>function</span>(req, res)&nbsp;{'{'}</p>
                                <p><span style={{ color: 'green' }}>&nbsp;&nbsp;&nbsp;// write your code here</span></p>
                                <p>});</p>
                                <p>server.listen(3000); </p>
                            </p>
                            <p>
                                You first need to import it using require() function as shown in first line.In the above example, require() function returns an object because http module returns its
                               functionality as an object, you can then use its properties and methods using dot notation e.g. http.createServer().
                             </p>
                            <p>
                                In this way, you can load and use Node.js core modules in your application. We will be using core modules throughout these tutorials.
                             </p>
                        </p>


                        <p className="totorial_question">
                            <h2>Local Modules</h2>
                            <p>
                                Local modules are created locally in your Node.js application. These modules include different functionalities
                                of your application in separate files and folders. You can also package it and distribute it via NPM, so that Node.js community
                                can use it. For example, if you need to
                                connect to MongoDB database and fetch data from database then you can create a module for it, which can be reused in your application.
                                We will learn about mondodb connection with nodejs in upcomming chepters.
                            </p>
                            <p>
                                Let's implement a small examples to understand how the local module works with node.js.
                               Have a look at the following example.
                             </p>
                            <p>create a file in notepade and save it as local-log.js</p>
                            <p><i style={{ backgroundColor: '#e8e8e8' }}>local-log.js</i></p>
                            <p className="text-code">
                                <p><span style={{ color: 'blue' }}>var</span> log = {'{'}</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fun1:<span style={{ color: 'blue' }}>function</span>(info1){'{'}</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    console.log(<span style={{ color: 'red' }}>'Hello: '</span> + info1);</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fun2:<span style={{ color: 'blue' }}>function</span>(info2){'{'}</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    console.log(<span style={{ color: 'red' }}>'Hello: '</span> + info2);</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>
                                <p>&nbsp;&nbsp;};</p>
                                <p>module.exports = log</p>
                            </p>
                            <p>
                                In the above example of logging module, we have created an object with two functions - fun1()
                               and fun2(). At the end, we have assigned this object to module.exports. The module.exports in the
                               above example exposes a log object as a module.
                             </p>
                            <p>
                                The module.exports is a special object which is included in every JS file in the Node.js application
                               by default. Use module.exports or exports to expose a function, object or variable as a module in Node.js.
                             </p>
                            <p>
                                I Hope till now everything looks good. Now, let's see how to use the above logging module in our application.
                             </p>

                            <p><strong>Loading Local Module:</strong></p>
                            <p>
                                Now we have to use local modules in your application, for that you need to load it using require() function
                                in the same way as core module. However, uou have to specify the path of JavaScript file(app-local.js) of the module.
                             </p>
                            <p>
                                The following example demonstrates how to use the above logging module contained in local-log.js.
                             </p>
                            <p><i style={{ backgroundColor: '#e8e8e8' }}>app.js</i></p>
                            <p className="text-code">
                                <p><span style={{ color: 'blue' }}>var</span> mylocalLogModule = require(<span style={{ color: 'red' }}>'./local-log.js'</span>);</p>
                                <p>mylocalLogModule.fun1(<span style={{ color: 'red' }}>'Application is working.'</span>);</p>
                            </p>
                            <p>
                                Run the above example using command prompt (in Windows) as shown below.
                             </p>

                            <p className="text-code">
                                <p>C:\> node app.js </p>
                                <p>Hello, Application is working.</p>
                            </p>

                            <p>
                                The require() function returns a log object because logging module exposes an object in local-log.js
                              using module.exports. So now you can use logging module as an object and call any of
                              its function using dot notation e.g mylocalLogModule.fun1() or myLogModule.fun2().Here we are calling mylocalLogModule.fun1().
                             </p>
                            <p>
                                Thus, It is so easy to create a local module using module.exports and can be used in the application.
                             </p>
                        </p>

                        <a href="#/nodejs/repl" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/moduleExport" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                    </div>
                </article>
            </div>
        )
    }
}

export default Module;