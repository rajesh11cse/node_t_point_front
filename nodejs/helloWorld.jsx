import React from 'react';
class HelloWorld extends React.Component {
    render() {
        return (
           <div>
                <article>
                    <div className="col-md-12">
                        <a href="#/nodejs/environmentSetup" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/repl" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                        <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>Node.js Hello World Example</h2>
                            <p>
                                Lets create our first simple hello world application using node.js,
                                There are two type of node.js applications.
                            </p>
                             <ul>
                                <li><strong>Console-Based</strong></li>
                                <p>create a file in notepade and save it as node-example.js</p>
                                <p><i style={{backgroundColor:'#e8e8e8'}}>node-example.js</i></p>
                                <p className="text-code">console.log("<span style={{color:'red'}}>Hello World</span>");</p>
                                 <p>Now execute the code by the following command and see the result in command prompt.</p>
                                <img width="80%" src="./img/result1.png" alt="Image Error"/>
                                <p>Now execute the code by the following command and see the result in command prompt.</p>
                                <p>This is the another way to verify the node.js installation on system. If the file execution is successed then it says that nodejs have been
                                    successfully installed.
                                </p>

                                 <li><strong>Web-Based</strong></li>
                                <p>Web-based application we will create in upcomming chepter <i>Node web server</i></p>

                            </ul>
                        </p>

                        <a href="#/nodejs/environmentSetup" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/repl" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                    </div>
                </article>
            </div>
        )
    }
}

export default HelloWorld;