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
                              Every method in the fs module has synchronous as well as asynchronous forms. Asynchronous 
                              methods take the last parameter as the completion function callback and the first parameter 
                              of the callback function as error. It is better to use an asynchronous method instead of a synchronous method, 
                              as the former never blocks a program during its execution, whereas the second one does.
                            </p>
                             <p className="text-code">
                                <p><span style={{ color: 'blue' }}>var</span> http = require("<span style={{ color: 'red' }}>fs</span>");</p>
                            </p>
                            <p>
                              Before going in fs deeply, Once Let's look at on the differences Synchronous vs Asynchronous in nodejs
                            </p>
                        </p>
                    </div>
                </article>
            </div>
        )
    }
}

export default FileSystem;