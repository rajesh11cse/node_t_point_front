import React from 'react';
class NodeInterview extends React.Component {
    render() {
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


                            <ol>
                                <li>What is Node.js?</li>
                                <li>How node.js works?</li>
                                <li>Where can we use node.js?</li>
                                <li>What is the advantage of using node.js?</li>
                                <li>What is REPL in context of Node?  </li>
                                <li>What are the two types of API functions in Node.js?</li>
                                <li>What is control flow function?</li>
                                <li>Explain the steps how “Control Flow” controls the functions calls?</li>
                                <li>Why Node.js is single threaded?</li>
                                <li>What is difference between synchronous and asynchronous method of fs module? </li>
                                <li>What does it mean “non-blocking” in node.js?  </li>
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