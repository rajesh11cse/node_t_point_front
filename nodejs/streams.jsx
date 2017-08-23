import React from 'react';
class Streams extends React.Component {
    render() {
        return (
            <div>
                <article>
                    <div className="col-md-12">
                        <a href="#/nodejs/callback" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        {/*<a href="#/nodejs/WebServer" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>*/}
                        <p className="totorial_question">
                            <h2>What are Streams?</h2>
                            <p>
                                In NodeJs <a target="_blank" href="https://nodejs.org/api/stream.html">Streams</a>  are objects that let you read data from a source or write data to a destination in continuous fashion.
                            </p>
                            <p>
                              There are four types of streams in NodeJs.
                            </p>
                             <ul>
                                <li><strong>Readable</strong></li>
                                <p>− Stream which is used for read operation.</p>

                                <li><strong>Writable</strong></li>
                                <p>− Stream which is used for write operation.</p>

                                <li><strong>Duplex</strong></li>
                                <p>− Stream which can be used for both read and write operation.</p>

                                <li><strong>Transform</strong></li>
                                <p>− A type of duplex stream where the output is computed based on input.</p>

                            </ul>

                             <p>
                              Each type of stream is an Event emitter instance and throws several events at different times. Following are some commonly used events:
                            </p>
                             <ul>
                                <li><strong>data</strong></li>
                                <p>− This event is fired when there is data is available to read.</p>

                                <li><strong>end</strong></li>
                                <p>− This event is fired when there is no more data to read.</p>

                                <li><strong>error</strong></li>
                                <p>− This event is fired when there is any error receiving or writing data.</p>

                                <li><strong>finish</strong></li>
                                <p>− This event is fired when all the data has been flushed to underlying system.</p>

                            </ul>
                        </p>
                        <a href="#/nodejs/callback" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        {/*<a href="#/nodejs/WebServer" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>*/}
                    </div>
                </article>
            </div>
        )
    }
}

export default Streams;