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


                            <ol>
                                <li>What is an event loop in Node.js ? </li>
                                <li>What is the difference between Node.js vs Ajax?  </li>
                                <li> What is ‘Callback’ in node.js?  </li>
                                <li> What are Error First Callbacks in Node.js  </li>
                                <li> What is callback hell?    </li>
                                <li> What is a blocking code?    </li>
                                <li>How Does Node Differ From Other Frameworks?  </li>
                                <li>What is Globals in Nodejs?</li>
                                <li>What is Buffer class in Node?  </li>
                                <li>What is environmental variables in node.js?</li>
                                <li>What is the Use of underscore in Nodejs? </li>
                                <li>How to load HTML in Nodejs?  </li>
                                <li>How to load HTML in Nodejs?  </li>
                                <li> What is Event Loop and Event Emitter ? </li>
                                <li>What are Event listeners ?</li>
                                <li>What is npm?</li>
                                <li>What is Package.json?  </li>
                                <li>What is Package.json?  </li>
                                <li>What is file-system or fs in Node?  </li>
                                <li>What are streams?  and types of streams ?</li>
                                <li>What is Chaining in Node?  </li>
                                <li>What is the difference between setTimeout and setInterval function?  </li>
                                <li>Can you create Http Server in Node.js, explain with code ?</li>
                                <li>Can you create Http Server in Node.js, explain with code ?</li>
                                <li>How to load HTML in Nodejs ?</li>
                                <li>What is the difference between process.nextTick() and setImmediate() ?</li>
                                <li>What do you mean by the term I/O ?</li>
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