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
                                <li><strong>Fast in Code execution</strong></li>
                                    <p>Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in
                                         code execution.</p>
                                <li><strong>Highly scalable</strong></li>
                                     <p>Node.js uses a single threadED model with event looping. Events respond to the server without blocking other operations. This makes Node.js highly scalable. Traditional servers create limited threads to handle requests and Node.js creates a single thread that provides service to much larger numbers of requests.</p>
                                <li><strong>Event Driven and Asynchronous</strong></li>
                                    <p>All API of Node.js are asynchronous. It means that the server is moving the next API 
                                        call without waiting for returning data of previous requests.</p>
                                <li><strong>No Buffering</strong></li>
                                    <p>Node.js applications never buffer any data. These applications simply output the data in chunks.</p>
                            </ul>
                            <i><strong>Note :</strong>
                            Many of us are confused about Node.js. It is not a web server like Apache. Node.js provides a new way to execute our code. It is JavaScript runtime. Node.js provides the facility to create an HTTP server and we can host our application on the same.
                        </i>
                        </p>

                        <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>Uses of  NodeJs and Who uses NodeJS ? </h2>
                             <p>
                                Following are the uses of Node.js
                            </p>
                            <ol>
                                <li>Web Services API’s.</li>
                                <li>Real time multiplayer Games.</li>
                                <li>Backend web services.</li>
                                <li>Web applications.</li>
                            </ol>
                             <p>
                                Following are some companies who uses Node.js.
                            </p>
                            <ol>
                                <li>Microsoft</li>
                                <li>PayPal</li>
                                <li>LinkedIn</li>
                                <li>GoDaddy</li>
                                <li>eBay</li>
                                <li>Yahoo!</li>
                            </ol>
                        </p>

                        <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>NodeJs Concepts</h2>
                             <p>
                                The following diagram depicts some important parts of Node.js which we will discuss in detail in upcomming chapters.
                            </p>
                           <img src="https://www.tutorialspoint.com/nodejs/images/nodejs_concepts.jpg" alt="Image Error"/>
                        </p>

                         <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>Advantages of Node.js</h2>
                             <p>
                                The following are some advantage of NodeJs.
                            </p>
                           <ol>
                                <li>Web development is done in a dynamic language (JavaScript) on a VM that is incredibly fast (V8). It is much faster than Ruby, Python, or Perl.</li>
                                <li>Node.js is Javascript.  So the same language can be used on the backend and frontend.   This means it breaks down the boundaries between front- and back-end development.</li>
                                <li>JavaScript is perfect for event loops with first class function objects and closures. People already know how to use it this way having used it in the browser to respond to user-initiated events.</li>
                                <li>Many people already know JavaScript, even people who do not claim to be programmers. It is arguably the most popular programming language.</li>
                                <li>Using JavaScript on a web server as well as the browser reduces the impedance mismatch between the two programming environments that can communicate data structures via JSON that work the same on both sides of the equation. Duplicate form validation code can be shared between server and client and so on.</li>
                            </ol>
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