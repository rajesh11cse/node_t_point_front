import React from 'react';
class NodeJsIntroduction extends React.Component {
    render() {
        return (
           <div>
                <article>
                    <div className="col-md-12">
                        <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>What is Node.js?</h2>
                            <p>
                                <a target="#" href="https://nodejs.org/en/">NodeJs</a> is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by 
                                Ryan Dahl in 2009.It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment
                                for building highly scalable server-side application using JavaScript.
                            </p>
                            <p>
                                Node.js is basicaly used for building applications like command line application, web application, 
                                real-time chat application, REST API server etc. However, it is mainly used to build network programs like web servers, 
                                similar to PHP, Java, or ASP.NET.
                            </p>
                            
                        </p>

                         <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>Features of Node.js</h2>
                            <p>
                                Following are some important features of Node.js
                            </p>
                            <ul>
                                <li>Fast in Code execution</li>
                                <li>Highly scalable</li>
                                <li>Event Driven and Asynchronous</li>
                                <li>No Buffering</li>
                            </ul>
                            
                        </p>


                         {/*<p className="totorial_question">
                             <h2 style={{color:'#605e5e'}}>Features of Node.js</h2>
                            <p>Following are some important features of Node.js.</p>
                                    <li><i>Fast in Code execution</i></li>
                                    <p>It is very fast in code execution. </p>

                                    
                                    <h3><i>Highly scalable</i></h3>
                                    <p>Node.js uses a single thread model for event looping. Events respond to the server without blocking other operations. This makes Node.js highly scalable. Traditional servers create limited threads to handle requests and Node.js creates a single thread that provides service to much larger numbers of requests.</p>
                                    

                                    
                                    <h3><i>Event Driven and Asynchronous</i></h3>
                                    <p>All API of Node.js are asynchronous. It means that the server is moving the next API call without waiting for returning data of previous requests.</p>
                                    

                                    
                                    <h3><i>No Buffering</i></h3>
                                    <p>Node.js never buffers any data.</p>
                                    
                                    Many of us are confused about Node.js. It is not a web server like Apache. Node.js provides a new way to execute our code. It is JavaScript runtime. Node.js provides the facility to create an HTTP server and we can host our application on the same.
                        
                                    
                        </p>*/}

                    </div>
                </article>
            </div>
        )
    }
}

export default NodeJsIntroduction;