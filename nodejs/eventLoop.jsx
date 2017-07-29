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
                               Before starting It’s important to have an idea about Node JS architecture. 
                               We will discuss about “How Node JS works under-the-hood, 
                               How Node JS handles concurrent request with Single-Threaded model” etc. in this chapter.
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