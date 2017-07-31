import React from 'react';
class EventLoop extends React.Component {
    render() {
        return (
            <div>
                <article>
                    <div className="col-md-12">
                        <a href="#/nodejs/debugging" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                         <a href="#/nodejs/eventEmitters" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                        <p className="totorial_question">
                            <h2>Node JS Architecture</h2>
                            <p>
                               Before starting It’s important to have an idea about Node JS architecture. 
                               We will discuss about “How Node JS works under-the-hood, 
                               How Node JS handles concurrent request with Single-Threaded model” etc. in this chapter.
                            </p>

                             <p>
                              As we have already discussed, Node JS applications uses “Single Threaded 
                              Event Loop Model” architecture to handle multiple concurrent clients
                            </p>
                            <p>
                              Node JS Platform uses “Single Threaded Event Loop” architecture to handle multiple 
                              concurrent clients. Then how it really handles concurrent client requests without using multiple threads.
                            </p>
                        </p>

                         <p className="totorial_question">
                            <h2>Node JS Architecture – Single Threaded Event Loop</h2>
                              <p>
                               What happens in event loop ?
                            </p>
                            <p>
                             Client sends request to the server, then server do some processing
                             based on clients request, prepare response and send it back to the client.
                            </p>
                             <img className="thumbnail" width="100%" src="./img/eventLoop.png" alt="Image Error" />
                            <p>
                               <strong>Diagram Description:</strong> 
                            </p>

                             <p>
                                 Let's assume we have n number of Clients Send request to Web Server, These requests are queued.
                            </p>
                            <p>
                                 Web Server pickup one request fomr then queue and send it to event loop.
                            </p>
                             <p>
                                 If request does not require any Blocking IO(Input/Output) Operations, event loop does necessary 
                                 steps and prepares response and send it back to the queue and then server.
                            </p>
                            <p>
                                 If request require any Blocking IO(Input/Output) Operations, event loop necessary 
                                 steps and pass the request to thread pull, then thread pull destributes this request to worker threads. 
                                 Now  thease worker threads are busy with Blocking IO Tasks (For example, interacting with Database, file or 
                                 external services etc.) for longer time, then remaining clients should wait longer time.
                            </p>
                             <p>
                                One most important point here, If the current request is busy with Blocking IO, immediately event loop takes another
                                request from queue and do same process. Now as soon as the previous request finished thier task, send it back 
                                to the queue and then server.  
                            </p>
                            <p>
                                So we analized that multiple request can be handeld easily without any waiting of previous request.
                            </p>

                        </p>
                        <a href="#/nodejs/debugging" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/eventEmitters" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                    </div>
                </article>
            </div>
        )
    }
}

export default EventLoop;