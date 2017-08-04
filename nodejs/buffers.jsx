import React from 'react';
class Buffers extends React.Component {
    render() {
        return (
            <div>
                <article>
                    <div className="col-md-12">
                        <a href="#/nodejs/environmentSetup" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/repl" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                        <p className="totorial_question">
                            <h2>Node.js Buffers</h2>
                            <p>
                                We know that pure javaScript works on Unicode friendly and not on the binary data. Therefore, when we are dealing with TCP streams for files, it is necessary to handle octet streams. So Node.js provides the Buffer class that provides instances with which we can store raw data in the similar way when we deal with arrays. But here the raw data storage corresponds to a raw memory allocation which is outside the V8 heap
                            </p>
                            <p>
                                Buffer class is a global class. So it can be accessed in an application without importing the buffer module.
                            </p>
                        </p>
                        

                        <a href="#/nodejs/environmentSetup" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/repl" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                    </div>
                </article>
            </div>
        )
    }
}

export default Buffers;