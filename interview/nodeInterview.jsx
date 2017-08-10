import React from 'react';
class NodeInterview extends React.Component {
    render() {
        $('a.someclass').click(function (e) {
            // Special stuff to do when this link is clicked...

            // Cancel the default action
            e.preventDefault();
        });
        return (
            <div>
                <article>
                    <div className="col-md-12">
                        <p className="totorial_question">
                            <h2>Top 100 Node.js Interview Questions & Answers</h2>
                            <p>
                                Frequently asked Node.JS interview questions and best answers for freshers and experienced
                                nodejs developers. In this post I am sharing with you top Interview Questions on
                                Nodejs.
                            </p>
                            <p>
                                If you are a Web Developer or MEAN stack developer and you are looking to know some of the best
                                interview questions on Node.js, You are on the right place. These interview questions would be very
                                helpful while facing the interview. So please read the given interview quesitons and answers carefuly,
                            </p>
                            <br />
                            <p className="interview_question">
                                <span>(1) What is Node.js?</span>
                                <p>
                                    Node.js is a Server side scripting which is used to build scalable programs which is built
                                    on Google Chrome's JavaScript V8 Engine.It provides an event driven, non-blocking (asynchronous)
                                    I/O and cross-platform runtime environment for building highly scalable server-side application using JavaScript
                                </p>
                                <p>You can read more here : <a href="#/nodejs/introduction">NodeJs Introduction</a></p>
                            </p>

                            <p className="interview_question">
                                <span>(2) How node.js works?</span>
                                <p>
                                    Node.js works on a v8 environment, It contains built-in asynchronous I/O library for file, socket and HTTP communication.
                                   Node.js encapsulates libuv to handle asynchronous events. it is a virtual machine that utilizes JavaScript as its scripting
                                   language and achieves high output via non-blocking I/O and single threaded event loop.
                                </p>
                                <p>You can read more here : <a >Event loop architecture</a></p>
                            </p>

                            <p className="interview_question">
                                <span>(3) Where can we use node.js?</span>
                                <p>
                                    Node.js can be used for the following purposes:
                                   <ol>
                                        <li>Web applications (especially real-time web apps)</li>
                                        <li>Network applications</li>
                                        <li>Distributed systems</li>
                                        <li>General purpose applications</li>
                                    </ol>
                                </p>
                            </p>

                            <p className="interview_question">
                                <span>(4) What is the advantage of using node.js?</span>
                                <p>
                                    The following are some advantage of NodeJs.
                                   <ol>
                                        <li>Node.js is an open source, cross-platform runtime environment for server-side and networking applications</li>
                                        <li>Easy to install and run locally</li>
                                        <li>Generally fast</li>
                                        <li>Asynchronous everything</li>
                                    </ol>
                                    <p>You can read more here : <a href="#/nodejs/introduction">NodeJs Introduction</a></p>
                                </p>
                            </p>

                            <p className="interview_question">
                                <span>(5) What is REPL in context of Node?</span>
                                <p>
                                    REPL stands for Read Eval Print Loop. Node.js comes
                                   with bundled REPL environment which is a simple program that accepts the commands,
                                   evaluates the commands, and prints their results.
                                   <ol>
                                        <li>Read</li>
                                        <li>Eval</li>
                                        <li>Print</li>
                                        <li>Loop</li>
                                    </ol>
                                    <p>You can read more here : <a href="#/nodejs/repl">Node.js REPL</a></p>
                                </p>
                            </p>

                            <p className="interview_question">
                                <span>(6) What are the two types of API functions in Node.js?</span>
                                <p>
                                    Two types of API functions in Node.js are
                                   <ol>
                                        <li>Asynchronous, non-blocking functions</li>
                                        <li>Synchronous, blocking functions</li>
                                    </ol>
                                </p>
                            </p>

                            <p className="interview_question">
                                <span>(7) What is control flow function?</span>
                                <p>
                                    A control flow function is a lightweight, generic piece of code which
                                   runs in between several asynchronous function calls and which take care of the necessary housekeeping to.
                                </p>
                            </p>

                            <p className="interview_question">
                                <span>(8) Explain the steps how “Control Flow” controls the functions calls?</span>
                                <p>
                                    <ol>
                                        <li>Control the order of execution</li>
                                        <li>Collect data</li>
                                        <li>Limit concurrency</li>
                                        <li>Call the next step in program</li>
                                    </ol>
                                </p>

                            </p>

                            <p className="interview_question">
                                <span>(9) Why Node.js is single threaded?</span>
                                <p>
                                    For async processing, Node.js was created explicitly as an experiment. It
                               is believed that more performance and scalability can be achieved by doing async processing on a
                               single thread under typical web loads than the typical thread based implementation.
                               </p>
                            </p>
                            <p className="interview_question">
                                <span>(10) What is difference between synchronous and asynchronous method of fs module?</span>
                                <p>
                                    Every method in the fs module may be a synchronous or asynchronous forms. Asynchronous
                              methods take the last parameter as the completion function callback and the first parameter
                              of the callback function as error. So It is always better to use an asynchronous method instead
                              of a synchronous method, becouse asynchronous mothod never blocks a program during its execution,
                              whereas synchronous does.
                               </p>
                                <p>You can read more here : <a href="#/nodejs/file-system">Node.js file-system(fs) module</a></p>
                            </p>

                            <p className="interview_question">
                                <span>(11) What is a blocking code?</span>
                                <p>
                                    Blocking means hold the current task untill it completes or Blocking refers to operations that block further execution until that operation finishes.
                               </p>
                                <p>You can read more here : <a href="#/nodejs/callback">Node.js Callbacks</a></p>
                            </p>

                            <p className="interview_question">
                                <span>(12) What does it mean “non-blocking” in node.js?</span>
                                <p>
                                    Non-blocking refers to code that doesn't block execution or we can say a non-blocking operation does not wait for I/O to complete any task.
                               </p>
                                <p>You can read more here : <a href="#/nodejs/callback">Node.js Callbacks</a></p>
                            </p>

                            <p className="interview_question">
                                <span>(13) What is an event loop in Node.js?</span>
                                <p>
                                    The Node.js event loop runs under a single thread, this means the application code you write is evaluated on a single thread. Nodejs itself uses many threads underneath through libuv, but you never have to deal with with those when writing nodejs code.
                                </p>
                                <p>You can read more here : <a href="#/nodejs/eventLoop">Node JS Architecture</a></p>
                            </p>

                            <p className="interview_question">
                                <span>(14) What is the difference between Node.js vs Ajax?</span>
                                <p>
                                    NodeJS is a server-side platform for developing client-server applications while Ajax is a client-side scripting technique
                                </p>
                            </p>

                            <p className="interview_question">
                                <span>(15) What is ‘Callback’ in node.js?</span>
                                <p>
                                    A callback is a function to be executed after another function is executed. Callback is called once the asynchronous operation has been completed
                                </p>
                                <p>You can read more here : <a href="#/nodejs/callback">Node JS Callbacks</a></p>
                            </p>

                            <p className="interview_question">
                                <span>(16) What are Error First Callbacks in Node.js?</span>
                                <p>
                                    Node.js core modules follow a standard signature for its callback handlers and usually the first argument is an optional error object. And if there is no error, then the argument defaults to null or undefined, So the first argument is always an error object, where the user needs to check if something is wrong. See in the below given code.
                                </p>
                                <p>
                                    <img className="thumbnail" width="100%" src="./img/callback3.png" alt="Image Error" />
                                </p>
                            </p>

                            <p className="interview_question">
                                <span>(17) What is callback hell?</span>
                                <p>
                                    In nodejs callback hell is heavily nested callbacks which make the code unreadable, not understandable and difficult to maintain
                                </p>
                                <p>You can read more here : <a href="#/nodejs/callback">Node JS Callbacks</a></p>
                            </p>

                            <p className="interview_question">
                                <span>(18) What is the biggest drawback of Node.js? </span>
                                <p>
                                    The biggest drawback is the fact that it is challenging to have one process with a single thread to scale up on multi core servers.
                                </p>
                            </p>

                            <p className="interview_question">
                                <span>(19) How Does Node Differ From Other Frameworks?js? </span>
                                <p>
                                    One major difference between Node and other server-side technologies is Node’s use of a single thread and asynchronous architecture. Many other server-side technologies are multi-threaded and synchronous, meaning that threads can be blocked while waiting for replies from the database. In NodeSJ each request creates a new thread from a limited pool based on system RAM usage. Node’s asynchronous design allows it to handle a large number of concurrent connections with high throughput on a single-thread, which makes it highly scalable. Node is not meant as a replacement for other technology stacks, but it can provide scalability and increased performance to applications which fit its purpose. Some examples of application types which can benefit from using Node are REST APIs, Chat applications and Real-Time Tracking applications (Brokerage trading dashboards, real-time user statistics, etc.) Node’s homepage describes it as “lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.” The applications above fit that description well and can take advantage of Node’s features.
                                </p>
                            </p>
                            <p className="interview_question">
                                <span>(20) What is Globals in Nodejs?</span>
                                <p>
                                    Node.js global objects are global in nature and they are available in all modules.
                                    We do not need to include these objects in our application and we do not need to install
                                    them explicitly using NPM or whatever, rather we can use them directly in the application.
                                    These objects are modules, functions,
                                    strings and object itself.
                                </p>
                                <p>You can read more here : <a href="#/nodejs/globalObject">Node JS Global Objects</a></p>
                            </p>

                            <p className="interview_question">
                                <span>(21) What is Buffer class in Node?</span>
                                <p>
                                    The Buffer class is a global class in Node.js which can be accessed in an application without importing the buffer module.
                                   <p className="text-code">
                                        <p><span style={{ color: 'blue' }}>var</span> buffer = <span style={{ color: 'blue' }}>new</span> Buffer(<span style={{ color: 'red' }}>10</span>);</p>
                                    </p>
                                </p>
                                <p>You can read more here : <a href="#/nodejs/buffers">Node JS buffers</a></p>
                            </p>

                            <p className="interview_question">
                                <span>(22) What is environmental variables in node.js?</span>
                                <p>
                                    Environment variables are being used to pass credentials to your application. USER_ID and USER_KEY can both be accessed from process.env.USER_ID and process.env.USER_KEY respectively. You don't need to edit them, just access their contents.
                                   <p className="text-code">
                                        <p>process.env.ENV_VARIABLE</p>
                                    </p>
                                    <p>Where ENV_VARIABLE is the name of the variable you wish to access.</p>
                                </p>
                                <p>
                                    <b>Example :</b> Let's run our application on Development/Production mode respectively.
                                </p>
                                <p>
                                    Before running your app, you can do this in console,
                                   <p className="text-code">
                                        <p><span style={{ color: 'blue' }}>export</span> NODE_ENV=production</p>
                                    </p>


                                    <p>
                                        or you can run your app like this:
                                   <p className="text-code">
                                            <p>NODE_ENV=production node app.js</p>
                                        </p>
                                    </p>
                                    <p>
                                        You can also set it in your js file:
                                   <p className="text-code">
                                            <p>process.env.NODE_ENV = 'production';</p>
                                        </p>
                                    </p>

                                    <p>
                                        Now using console see the output of the following line of code.
                                   <p className="text-code">
                                            <p>console.log(app.get('env'))</p>
                                        </p>
                                    </p>
                                    <p>
                                        <b>Output :</b>
                                    </p>
                                    <p className="text-code">
                                        <p>production</p>
                                    </p>


                                </p>

                                <p>You can read more here : <a href="https://nodejs.org/api/process.html#process_process_env">Node.js docs</a></p>
                            </p>

                            <p className="interview_question">
                                <span>(23) What is the Use of underscore in Nodejs?</span>
                                <p>
                                    This post will help you to understand the use of Underscore (_) in Nodejs. To access the last expression, we have to use the (_) underscore/underline character.
                                </p>
                                <p>
                                    <b>Example1 :</b> Open terminal and type node.
                                   <p className="text-code">
                                        <p>node</p>
                                        <p>></p>
                                        <p>> num = 10;</p>
                                        <p>10</p>
                                        <p>>_-6</p>
                                        <p>>4</p>
                                    </p>
                                    <p>
                                        In the above code we have first assigned 10 to 'num' and then we have used ' _ -6 ' to actually get the last expression and decremented it by 6.
                                </p>
                                </p>

                                <p>
                                    <b>Example2 :</b>
                                    <p className="text-code">
                                        <p>> var num = 10;</p>
                                        <p>undefined</p>
                                        <p>>_-6</p>
                                        <p>>NaN</p>
                                    </p>
                                    <p>
                                        You will get NaN because the result of 'var num = 10' expression is undefined as a variable assignment doesn't return a result when evaluated. So when you are accessing the last expression you will get NaN.
                                </p>
                                </p>
                            </p>

                            <p className="interview_question">
                                <span>(24) How to load HTML in Nodejs?</span>
                                <p>
                                  To load HTML in Nodejs we have to change the Content-type from text/plain to text/html
                                </p>
                            </p>

                            <ol>
                                <li> What is Event Loop and Event Emitter? </li>
                                <li>What are Event listeners?</li>
                                <li>What is npm?</li>
                                <li>What is Package.json?  </li>
                                <li>What is file-system or fs in Node?  </li>
                                <li>What are streams?  and types of streams?</li>
                                <li>What is Chaining in Node?  </li>
                                <li>What is the difference between setTimeout and setInterval function?  </li>
                                <li>Can you create Http Server in Node.js, explain with code?</li>
                                <li>Can you create Http Server in Node.js, explain with code?</li>
                                <li>How to load HTML in Nodejs?</li>
                                <li>What is the difference between process.nextTick() and setImmediate()?</li>
                                <li>What do you mean by the term I/O?</li>
                                <li>Explain Web Server?</li>

                                {/*http://www.lazyquestion.com/interview-questions-and-answer/nodejs?page=5*/}
                                {/*http://a4academics.com/interview-questions/79-web/802-nodejs-interview?showall=&start=3*/}
                            </ol>
                        </p>

                        <p className="totorial_question">
                            If you have any dougths and you have any interview question, please free to share your descution in the below comment box.
                        </p>
                    </div>
                </article>
            </div>
        )
    }
}

export default NodeInterview;