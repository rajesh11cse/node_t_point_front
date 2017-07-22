import React from 'react';
class Debugging extends React.Component {
    render() {
        return (
            <div>
                <article>
                    <div className="terminal" >
                        <div className="terminal-header">
                        rajeshkumar@T38B:~/nodetpoint
                        </div>
                        <div className="terminal-body">
                            <p>
                                <span className="user-name">rajeshkumar@T38B</span>:
                                <span className="path">~/nodetpoint</span>
                                <span>$ node-inspector --web-port=5500</span>
                            </p>
                            <p>(node:13873) DeprecationWarning: node --debug is deprecated. Please use node --inspect instead.
</p>
<p>Debugger listening on 127.0.0.1:5858</p>
                        </div>
                    </div>
                    
                    <div className="col-md-12">
                        <a href="#/nodejs/globalObject" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        {/* <a href="#/nodejs/globalObject" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>*/}
                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Node.js Debugging</h2>
                            <p>
                                Debugging, in computer programming is a multistep process that involves identifying a problem, isolating the source of the problem,
                             and then either correcting the problem or determining a way to work around it called Debugging. Check the description for
                             debugging guide at <a href="https://nodejs.org/en/docs/guides/debugging-getting-started/">here.</a>
                            </p>
                            <p>
                                Here, we will use <strong>node inspector tool</strong> to debug a simple Node.js application.
                               Install Node Inspector using NPM in the global mode by writing the following command in the terminal window.
                            </p>
                            <p className="text-code">
                                <p>npm install -g node-inspector</p>
                            </p>

                            <p>Let's' look at a file server.js with the folowing code.</p>
                            <p><i style={{ backgroundColor: '#e8e8e8' }}>server.js</i></p>
                            <p>
                                <img className="thumbnail" width="100%" src="./img/debugger3.png" alt="Image Error" />
                            </p>
                             <p>
                                We have to debug above code using node-inspector. So for that run the folowing command.
                            </p>
                             <p>
                                <img className="thumbnail" width="100%" src="./img/debugger1.png" alt="Image Error" />
                            </p>
                             <p>
                                Here you see in above fig. This will display a URL somthing like http://127.0.0.1:5500/?ws=127.0.0.1:8080&port=5858, So point your browser
                                to this URL, Sometimes, port 5500 might not be available on your computer. So you will get the error like 'Cannot start the server at 0.0.0.0:5500. Error: listen EACCES.'.
                                So in that case run node-inspector on defferent port.
                            </p>
                             <p>
                                Now open a new termical by short cut Ctrl+t and run the the following comand. 
                            </p>
                            <p>
                                <img className="thumbnail" width="100%" src="./img/debugger2.png" alt="Image Error" />
                            </p>
                             <p>
                                Refresh the browser. And then you will be able to see something like.
                            </p>
                            <p>
                                <img className="thumbnail" width="100%" src="./img/debugger4.png" alt="Image Error" />
                            </p>
                            <p>
                                Now, debug the program by clicking the uper arrow in right pane. Also, use watch expression
                                 on the right pane or hover the cursor on the variable to see the value as shown in above fig.
                                 Here, I put data in watch expression and put hover on console and Got the same result on both the places
                            </p>
                            
                        </p>

                        <a href="#/nodejs/globalObject" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        {/*<a href="#/nodejs/globalObject" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>*/}
                    </div>
                </article>
            </div>
        )
    }
}

export default Debugging;