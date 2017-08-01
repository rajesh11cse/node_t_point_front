import React from 'react';
class Callback extends React.Component {
    render() {
        return (
            <div>
                <article>
                    <div className="col-md-12">
                        <a href="#/nodejs/environmentSetup" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/repl" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                        <p className="totorial_question">
                            <h2>Node.js Callbacks</h2>
                            <p>
                                A callback is a function to be executed after another function is executed. Callback is
                                called once the asynchronous operation has been completed. Node.js heavily uses
                                callbacks and all API’s of Node.js are written to support callbacks.
                            </p>
                            <p>
                                Let's' look at the example, create file main.js with the following code and run it by command 'node main.js'.
                            </p>
                            <p>
                                <img className="thumbnail" width="100%" src="./img/callback1.png" alt="Image Error" />
                            </p>
                            <p>Output : </p>
                            <p className="text-code">
                                <p>callback1: this comes out first</p>
                                <p>callback2: this comes out later</p>
                            </p>

                            <p>
                                However we konw that javascript is an event driven language. If callback1 takes longer
                                than callback2, the result of callback2 comes out first than callback1;
                            </p>
                        </p>
                        <p className="totorial_question">
                            <h2>Node.js Blocking</h2>
                            <p>
                                Bloacking means hold the current task untill it completes or Blocking
                                refers to operations that block further execution until that operation finishes. Let's' look at the example, update file main.js with the following code and run it by command 'node main.js'.
                            </p>
                            <p>
                                <img className="thumbnail" width="100%" src="./img/callback2.png" alt="Image Error" />
                            </p>
                            <p>Output : </p>
                            <p className="text-code">
                                <p>File data: Address : #155 Udyog Vihar Phase V Gurugram 122016</p>
                                <p>Program Ended.</p>
                            </p>

                            <p>
                                Where data 'A'ddress : #155 Udyog Vihar Phase V Gurugram 12201' comes from address.txt file. Here we found
                               that 'Program Ended' will never printed untill the file data executes completely means your expected output
                               'Program Ended' is blocked.
                            </p>
                        </p>

                        <p className="totorial_question">
                            <h2>Node.js Non-Blocking</h2>
                            <p>
                                Non-blocking refers to code that doesn't block execution. Let's' look at the example, update file main.js with the following code and run it by command 'node main.js'.
                            </p>
                            <p>
                                <img className="thumbnail" width="100%" src="./img/callback3.png" alt="Image Error" />
                            </p>
                            <p>Output : </p>
                            <p className="text-code">
                                <p>Program Ended.</p>
                                <p>File data: Address : #155 Udyog Vihar Phase V Gurugram 122016</p>
                            </p>

                            <p>
                                Here, we found that 'Program Ended' is printed without waiting for file data, So 
                               'Program Ended' is not blocked.
                            </p>
                        </p>

                        <p className="totorial_question">
                            <h2>Node.js Callback hell</h2>
                            <p>
                                Nesting of asynchronous functions in nodejs is called callback hell.
                            </p>
                            <p>
                                Callback hell is the eventual state of any complex callback oriented asynchronous program 
                                where the management of callbacks gets so hard that the performance benefits of callbacks 
                                notwithstanding, your code becomes extremely hard to understand, reason about and maintain.
                            </p>
                            <p>
                                When you have lots of callback functions in your code! It gets harder to work with them the 
                                more of them you have in your code and it gets particularly bad when you need to do loops, try-catch 
                                blocks and things like that.
                            </p>
                            <p>
                                <p>To read out more about callback hell <a href="http://callbackhell.com/">click here</a></p>
                            </p>
                            <p>
                                <img className="thumbnail" width="100%" src="./img/callback4.png" alt="Image Error" />
                            </p>
                             <p>
                                We have three functions as shown in above figure, The result of getMoreData() is dependes on the 
                                result of getSomeData() and
                                the result of getSomeData() is dependes on http.createServer() method and so on. It's look like a
                                pyramid shape at all. So this is affectionately known as callback hell.
                            </p>
                              <p>
                                 But how to avoid long nesting of asynchronous functions in Node.js. Ok, To do so we have the following code. 
                            </p>
                            <p>
                                <img className="thumbnail" width="100%" src="./img/callback5.png" alt="Image Error" />
                            </p>
                        </p>

                        <a href="#/nodejs/environmentSetup" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/repl" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                    </div>
                </article>
            </div>
        )
    }
}

export default Callback;