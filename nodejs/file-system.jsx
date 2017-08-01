import React from 'react';
class FileSystem extends React.Component {
    render() {
        return (
            <div>
                <article>
                    <div className="col-md-12">
                        <a href="#/nodejs/eventEmitters" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        {/*<a href="#/nodejs/eventEmitters" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>*/}
                        <p className="totorial_question">
                            <h2>Node.js File System (FS)</h2>
                            <p>
                                Node implements File I/O using simple wrappers around standard POSIX functions.
                               The Node File System (fs) module can be imported using the following syntax −
                            </p>
                            <p className="text-code">
                                <p><span style={{ color: 'blue' }}>var</span> http = require("<span style={{ color: 'red' }}>fs</span>");</p>
                            </p>
                            <p>
                                Before going in fs deeply, Once Let's look at on the differences Synchronous vs Asynchronous in nodejs
                            </p>
                        </p>

                        <p className="totorial_question">
                            <h2>Synchronous vs Asynchronous</h2>
                            <p>
                                Every method in the fs module may be a synchronous or asynchronous forms. Asynchronous
                              methods take the last parameter as the completion function callback and the first parameter
                              of the callback function as error. So It is always bettehttps://nodejs.org/api/fs.htmlr to use an asynchronous method instead
                              of a synchronous method, becouse asynchronous mothod never blocks a program during its execution,
                              whereas synchronous does.
                            </p>
                            <p>
                                To understand it deeply, Let's' look at the example, create file main.js and address.txt with the following code
                            </p>
                            <p><i style={{ backgroundColor: '#e8e8e8' }}>main.js</i></p>
                            <p>
                                <img className="thumbnail" width="100%" src="./img/fs1.png" alt="Image Error" />
                            </p>
                            <p>
                                Now its time to run the file using the following command and see the output in terminal
                            </p>
                            <p>
                                <img className="thumbnail" width="100%" src="./img/fs2.png" alt="Image Error" />
                            </p>
                            <p>
                                Ok, look around the output, we see that there are three consoles at line no. 8, 13 and 16 respectively in main.js file.
                              function fs.readFile at line no. 4 is executing asynchronously so this will never blocks the program and will print first console. whereas
                             function fs.readFileSync at line no. 12 is executing synchronously so this will blocks the program and will print third console before second console.
                            </p>

                            <p>
                                Notice that first function fs.readFile treats as a <a href="">callback function</a> , which is the cause of avoing the blocking condition in program.
                            </p>
                        </p>
                        <p className="totorial_question">
                            <h2>Open a File</h2>
                            <p>
                                The following method is used to open a file in asynchronous mode.
                            </p>
                            <p className="text-code">
                                <p>fs.open(path, flags[, mode], callback)</p>
                            </p>
                            <p>
                                The description of the parameters are explained here.
                            </p>
                            <ul>
                                <li><strong>path</strong></li>
                                <p>− This is string which includes the file path in the current directory.</p>

                                <li><strong>flags</strong></li>
                                <p>− Flags specify the behavior of the file</p>

                                <li><strong>mode</strong></li>
                                <p>− It sets the file mode (permission and sticky bits), but only if the file was created.
                                    It defaults to 0666, readable and writeable..</p>

                                <li><strong>callback</strong></li>
                                <p>− Callback is a function which gets two arguments (err, function_data).</p>
                            </ul>
                            <p>
                                Let's' look at the example, create file main.js with the following code and run it by 'node main.js' commnd
                        </p>

                            <p>
                                <img className="thumbnail" width="100%" src="./img/fs3.png" alt="Image Error" />
                            </p>
                            <p>
                                In above file 'r+' specify that open a file for reading and writing.
                            An exception occurs if the file does not exist. So the output will be as following.
                        </p>
                            <p className="text-code">
                                <p>Open file!</p>
                                <p>File opened successfully!</p>
                            </p>
                             <p>To read out more about fs please visit official <a href="https://nodejs.org/api/fs.html">Website</a></p>
                        </p>
                    </div>
                </article>
            </div>
        )
    }
}

export default FileSystem;