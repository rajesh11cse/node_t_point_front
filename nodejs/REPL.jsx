import React from 'react';
class REPL extends React.Component {
    render() {
        return (
           <div>
                <article>
                    <div className="col-md-12">
                         <a href="#/nodejs/helloWorld" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/module" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                        <p className="totorial_question">
                            <h2>Node.js REPL</h2>
                            <p>
                               The term REPL stands for Read Eval which is a simple program that accepts the commands from user, 
                               evaluates the commands, and prints their results. It specifies a computer environment 
                               like Unix/Linux shell or a window console in which we can enter the command and the system responds with output.
                            </p>
                        </p>

                         <p className="totorial_question">
                            <h2>Node.js REPL Environment</h2>
                            <p>
                              Node.js or Node comes bundled with a REPL environment. It performs the following tasks −
                            </p>
                             <ul>
                                <li><strong>Read</strong></li>
                                <p>− Reads input from user, parses the input into JavaScript data-structure, and stores the result in memory.</p>

                                <li><strong>Eval</strong></li>
                                <p>− It takes and evaluates the data structure.</p>

                                <li><strong>Print</strong></li>
                                <p>− Prints the result.</p>

                                <li><strong>Loop</strong></li>
                                <p>− It loops all the commands which user entered until user press <code>Ctrl-c</code>  twice or <code>Ctrl+d</code> once.</p>

                            </ul>
                        </p>

                         <p className="totorial_question">
                            <h2>Start with REPL</h2>
                            <ol>
                                <li><strong>Simple expressions</strong></li>
                                <p>
                                REPL can be started by simply running node on shell/console without any arguments as follows.
                                </p>
                                <p className="text-code">$ node</p>
                                <p>You will see the REPL Command prompt <code>></code> where you can type any Node.js command </p>

                                <p>
                                Let's try a simple mathematics at the Node.js REPL command prompt −
                                </p>
                                <p className="text-code">
                                    <p>$ node</p>
                                    <p>></p>
                                    <p>>10+5</p>
                                    <p>15</p>
                                    <p>>5+(5*2)+7</p>
                                    <p>22</p>
                                </p>

                                <li><strong>Using variable</strong></li>
                                <p>
                                You can make use variables to store values and print later like any conventional script. If var keyword is not used, then the value is stored in the variable and printed. Whereas if var keyword is used, then the value is stored but not printed. You can print variables using console.log().
                                </p>

                                <p className="text-code">
                                    <p>$ node</p>
                                    <p>>x = 7</p>
                                    <p>7</p>
                                    <p>>var y = 15</p>
                                    <p>>x+y</p>
                                    <p>22</p>
                                    <p>>console.log("Hello World")</p>
                                    <p>Hello World</p>
                                    <p>undefined</p>
                                </p>

                                <li><strong>Multiline expressions</strong></li>
                                <p>
                                Node REPL supports multiline expression just similar to JavaScript. Let's check the following do-while loop.
                                </p>

                                <p className="text-code">
                                    <p>$ node</p>
                                    <p>>var x = 0</p>
                                    <p>undefined</p>
                                    <p>>do {'{'}</p>
                                    <p>... x++;</p>
                                    <p>... console.log("x: " + x);</p>
                                    <p>... } while ( x {'<'} 5 );</p>
                                    <p>x: 1</p>
                                    <p>x: 2</p>
                                    <p>x: 3</p>
                                    <p>x: 4</p>
                                    <p>x: 5</p>
                                    <p>undefined</p>
                                    <p>></p>
                                </p>

                                <li><strong>Underscore Variable</strong></li>
                                <p>
                                Underscore (_) can be used to get the last result.
                                </p>

                                <p className="text-code">
                                   <p>$ node</p>
                                    <p>>var x = 5</p>
                                    <p>undefined</p>
                                    <p>>var y = 6</p>
                                    <p>undefined</p>
                                    <p>>x+y</p>
                                    <p>11</p>
                                    <p>> var sum = _</p>
                                    <p>undefined</p>
                                    <p>>console.log(sum)</p>
                                    <p>11</p>
                                    <p>undefined</p>
                                    <p>></p>
                                </p>
                            </ol>
                        </p>

                        <p className="totorial_question">
                            <h2>Node.js REPL Commands</h2>
                            <p>
                              Following table shows the REPL commands with descriptions.
                            </p>
                            <table className="code-table">
                                <thead>
                                    <tr>
                                        <td><strong>Command</strong></td>
                                        <td><strong>Description</strong></td>
                                    </tr>
                                </thead>
                                <tbody>
                                     <tr>
                                        <td>Ctrl + c</td>
                                        <td>Terminate the current command only.</td>
                                    </tr>
                                    <tr>
                                        <td>Ctrl + c twice</td>
                                        <td>It terminates the node REPL.</td>
                                    </tr>
                                     <tr>
                                        <td>Ctrl + d once</td>
                                        <td>It terminates the node REPL.</td>
                                    </tr>
                                    <tr>
                                        <td>up/down keys</td>
                                        <td>It is used to see command history and update or modify the previous commands.</td>
                                    </tr>
                                    <tr>
                                        <td>tab keys</td>
                                        <td>It specifies the list of current command.</td>
                                    </tr>
                                    <tr>
                                        <td>.help</td>
                                        <td>It specifies the list of all commands.</td>
                                    </tr>
                                     <tr>
                                        <td>.break</td>
                                        <td>It is used to exit from multi-line expressions.</td>
                                    </tr>
                                     <tr>
                                        <td>.clear</td>
                                        <td>It is used to exit from multi-line expressions.</td>
                                    </tr>
                                     <tr>
                                        <td>.save filename</td>
                                        <td>It saves current node REPL session to a file.</td>
                                    </tr>
                                     <tr>
                                        <td>.load filename</td>
                                        <td>It is used to load file content in current node repl session.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>

                        <p className="totorial_question">
                            <h2>Exit from REPL</h2>
                            <p>
                            To exit from REPL press <code>Ctrl-c</code> twice or <code>Ctrl+d</code> once.
                            </p>
                             <p className="text-code">
                                   <p>$ node</p>
                                    <p>></p>
                                    <p>(To exit, press ^C again or type .exit)</p>
                                    <p>></p>
                                </p>
                        </p>
                         <a href="#/nodejs/helloWorld" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/module" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                    </div>
                </article>
            </div>
        )
    }
}

export default REPL;