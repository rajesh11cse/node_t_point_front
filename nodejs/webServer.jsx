import React from 'react';
class NPM extends React.Component {
    render() {
        return (
           <div>
                <article>
                    <div className="col-md-12">
                        <a href="#/nodejs/npm" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/globalObject" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                        <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>Node.js Web Server</h2>
                            <p>
                               We learned console-baseb application with an exmaple in previous section, In this section, 
                               we will learn to create a Node.js web server and handle HTTP requests.
                               This is the same as web-based application. Here, we will be able to see the the output on brower as well. 
                            </p>
                            <p>
                                A Web Server is a software application which handles HTTP requests sent by the HTTP client, 
                                like web browsers, and returns web pages in response to the clients
                            </p>
                        </p>

                         <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>Create Node.js Web Server</h2>
                            <p>
                               In node.js easily we can create a simple web server that processes incoming requests asynchronously.
                            </p>
                            <p>create a file server.js in your application</p>
                            <p><i style={{backgroundColor:'#e8e8e8'}}>server.js</i></p>
                             <p className="text-code">
                                <p><span style={{ color: 'blue' }}>var</span> http = require("<span style={{ color: 'red' }}>http</span>");</p>
                                <p><span style={{ color: 'blue' }}>var</span> server = http.createServer(<span style={{ color: 'blue' }}>function</span>(req, res)&nbsp;{'{'}</p>
                                <p><span>&nbsp;&nbsp;&nbsp;console.log(<span style={{ color: 'red' }}>"Server is running at port %s"</span>, server.<span style={{ color: 'blue' }}>address()</span>.port);</span></p>
                                <p>});</p>
                                <p>server.listen(3000); </p>
                            </p>
                            <p>
                              In the above example, we import the http module using require() function.The http module is a 
                              core module of Node.js, so no need to install it using <a href="#/nodejs/npm">NPM</a>.
                            </p>
                            <p>
                              To run the above web server put  node server.js command 
                              in command prompt or terminal and it will display message as shown below.
                            </p>
                            <p className="text-code">
                                <p>$node node server.js</p>
                                <p>Server is running at port 3000</p>
                            </p>

                             <p>
                              This is how you create a Node.js web server using simple steps. Now, 
                              Now let's see how to handle HTTP request and how to send response in Node.js web server.
                            </p>
                        </p>

                         <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>Handle HTTP Request and Send Response</h2>
                            <p>
                               The createServer() 
                               takes a callback function as an argument. This callback function is executed each time the 
                               server receives a new request. </p>

                            <p> The callback function takes two arguments, request and response. The request object contains 
                            information regarding the client’s request, such as the URL, HTTP headers, and much 
                            more. Similarly, the response object is used to return data back to the client. </p>

                             <p>The call to listen() causes the server to bind to a port and listen for incoming connections. 
                            Here we have defined port to be 3000.
                            </p>

                             <p>
                            <img className="thumbnail" width="100%" src="./img/server.png" alt="Image Error" />
                        </p>

                        <p>
                           In the above example, req.url is used to check the url of the current request and based on that it sends the response. To send a response, first it sets the response header using writeHead() method and then 
                           writes a string as a response body using write() method. Finally, Node.js web server sends the response using end() method.
                        </p>

                        <p>
                          Now, run the above web server as shown below
                        </p>

                        <p className="text-code">
                            <p>$node node server.js</p>
                            <p>Server running at port 3000</p>
                        </p>
                        <p>
                         Now open your brower and point your browser to http://localhost:3000 and see the following result.
                        </p>
                         <img className="thumbnail" width="100%" src="./img/server2.png" alt="Image Error" />

                          <p>
                         Now point your browser to http://localhost:3000/welcome and see the following result.
                        </p>
                         <img className="thumbnail" width="100%" src="./img/server3.png" alt="Image Error" />
                        </p>
                        <p>
                         It will display "Not a valid request" for all requests other than the above URLs.
                        </p>

                        <a href="#/nodejs/npm" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                       <a href="#/nodejs/globalObject" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                    </div>
                </article>
            </div>
        )
    }
}

export default NPM;