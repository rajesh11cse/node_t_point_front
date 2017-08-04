import React from 'react';
class NPM extends React.Component {
    render() {
        return (
           <div>
                <article>
                    <div className="col-md-12">
                        <a href="#/nodejs/webServer" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/debugging" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                        <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>Node.js Global Objects</h2>
                            <p>
                             Node.js global objects are global in nature and they are available in all modules. 
                             We do not need to include these objects in our application and we do not need to install 
                             them explicitly using NPM or whatever, rather we can use them directly in the application.
                             These objects are modules, functions, 
                             strings and object itself.
                            </p>
                            <p>
                                Some of these global objects are explained below.
                            </p>
                        </p>

                        <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>__dirname</h2>
                            <p>
                             The __dirname object is the global object in Node.js. It is a string. 
                             It represents the name of the directory that currently contains the code.

                            </p>
                             <p><i style={{ backgroundColor: '#e8e8e8' }}>app.js</i></p>
                             <p className="text-code">
                                <p><span style={{color:'green'}}>// print the value of __dirname</span></p>
                                <p>console.log(__dirname)</p>
                            </p>
                            <p>
                                Open command window and use the following command.
                            </p>
                             <p className="text-code">
                                <p>$node node app.js </p>
                                <p>/home/rajeshkumarverma/nodetpoint</p>
                            </p>
                             <p>
                                We see that it will print current directory/folder path as '/home/rajeshkumarverma/nodetpoint'.
                                So this the directory where you have the all files.
                            </p>
                        </p>

                        <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>__filename</h2>
                            <p>
                             
                            This represents the name of the proper directory that currently contains the code.
                            This is the resolved absolute path of this code file.The value inside a module is the path to that module file.

                            </p>
                             <p><i style={{ backgroundColor: '#e8e8e8' }}>app.js</i></p>
                             <p className="text-code">
                                <p><span style={{color:'green'}}>// print the value of __filename</span></p>
                                <p>console.log(__filename)</p>
                            </p>
                            <p>
                                Open commad window and use the following command.
                            </p>
                             <p className="text-code">
                                <p>$node node app.js </p>
                                <p>/home/rajeshkumarverma/nodetpoint/app.js</p>
                            </p>
                             <p>
                                We see that it will print current directory/folder along with the file name as 
                                '/home/rajeshkumarverma/nodetpoint/app.js'.
                            </p>
                        </p>

                         <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>List of Global Objects</h2>
                            <p>
                                A list of Node.js global objects are given below:
                            </p>
                             <table className="code-table">
                                <thead>
                                    <tr>
                                        <td><strong>Global Object</strong></td>
                                    </tr>
                                </thead>
                                <tbody>
                                     <tr>
                                        <td>__dirname</td>
                                    </tr>
                                    <tr>
                                        <td>__filename</td>
                                    </tr>
                                     <tr>
                                        <td>Console</td>
                                    </tr>
                                    <tr>
                                        <td>Process</td>
                                    </tr>
                                    <tr>
                                        <td>Buffer</td>
                                    </tr>
                                    <tr>
                                        <td>setImmediate(callback[, arg][, ...])</td>
                                    </tr>
                                     <tr>
                                        <td>setInterval(callback, delay[, arg][, ...])</td>
                                    </tr>
                                     <tr>
                                        <td>setTimeout(callback, delay[, arg][, ...])</td>
                                    </tr>
                                     <tr>
                                        <td>clearImmediate(immediateObject)</td>
                                    </tr>
                                     <tr>
                                        <td>clearInterval(intervalObject)</td>
                                    </tr>
                                     <tr>
                                        <td>clearTimeout(timeoutObject)</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br></br>
                            <p>
                                Don't worry, We will learn more about global objects like Console, Buffer, Timers etc. in upcoming chepters.
                            </p>
                        </p>

                        <a href="#/nodejs/webServer" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                       <a href="#/nodejs/debugging" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                    </div>
                </article>
            </div>
        )
    }
}

export default NPM;