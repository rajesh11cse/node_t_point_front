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

                        <p className="totorial_question">
                            <h2>Buffer Class</h2>
                            <p>
                                The Buffer class is a global class in Node.js which can be accessed in an application without importing the buffer module. We can create node buffers in the following ways.
                            </p>
                            <ol>
                                <li>
                                    <p>The following syntax represents a buffer in Node.js n octets. Where n is a number say 10.</p>
                                    <p className="text-code">
                                        <p><span style={{ color: 'blue' }}>var</span> buffer = <span style={{ color: 'blue' }}>new</span> Buffer(<span style={{ color: 'red' }}>10</span>);</p>
                                    </p>
                                </li>
                                <li>
                                    <p>The following is the syntax to create a buffer from a given array.</p>
                                    <p className="text-code">
                                        <p><span style={{ color: 'blue' }}>var</span> buffer = <span style={{ color: 'blue' }}>new</span> Buffer(<span style={{ color: 'red' }}>[100, 200, 300, 400, 500]</span>);</p>
                                    </p>
                                </li>
                                <li>
                                    <p>The following is the syntax to create a buffer from a given string.</p>
                                    <p className="text-code">
                                        <p><span style={{ color: 'blue' }}>var</span> buffer = <span style={{ color: 'blue' }}>new</span> Buffer(<span style={{ color: 'green' }}>"Welcome!", "utf-8"</span>);</p>
                                    </p>
                                </li>
                            </ol>
                        </p>
                        <p className="totorial_question">
                            <h2>Writing to Buffer</h2>
                            <p>
                                Following is the syntax of the method which is used to write into a Node Buffer.
                            </p>
                            <p className="text-code">
                                <p><span style={{ color: 'blue' }}>buffer</span>
                                    <span style={{ color: 'green' }}>.toString</span>(
                                <span style={{ color: 'blue' }}>string[, offset][, length][, encoding]</span>)</p>
                            </p>
                            <p>
                                The description of the parameters are explained here.
                            </p>
                            <ul>
                                <li><strong>string</strong></li>
                                <p>− This represents the string data to be written to buffer.</p>

                                <li><strong>offset</strong></li>
                                <p>− This represents the index of the buffer to start writing at. Default value of offset is 0.</p>

                                <li><strong>length</strong></li>
                                <p>− This represents the number of bytes to write. Defaults to buffer.length.</p>

                                <li><strong>encoding</strong></li>
                                <p>− This represents the encoding type to use. 'utf8' is the default encoding..</p>
                            </ul>
                            <p><strong>Return Value</strong></p>
                            <p>
                                This above method decodes and returns a string from buffer data which is encoded as specified in the character set encoding.
                            </p>

                            <p><strong>Example</strong></p>
                            <p className="text-code">
                                <p><span style={{ color: 'blue' }}>var</span> buffer = <span style={{ color: 'blue' }}>new</span> Buffer(<span style={{ color: 'red' }}>256</span>);</p>
                                <p><span style={{ color: 'blue' }}>var</span> ln = buffer.write(<span style={{ color: 'green' }}>"You are welcome!"</span>);</p>
                                <p>console.log(<span style={{ color: 'green' }}>"Octets : "</span>+ln);</p>
                            </p>

                            <p><strong>Output : </strong></p>
                            <p className="text-code">
                                <p>Octets : 16</p>
                            </p>
                        </p>
                        <p className="totorial_question">
                            <h2>Reading from Buffers</h2>
                            <p>
                                Following is the syntax of the method which is used to read data from a Node Buffer.
                            </p>
                            <p className="text-code">
                                <p><span style={{ color: 'blue' }}>buffer</span>
                                    <span style={{ color: 'green' }}>.toString</span>(
                                <span style={{ color: 'blue' }}>[encoding][, start][, end]</span>)</p>
                            </p>
                            <p>
                                The description of the parameters are explained here.
                            </p>
                            <ul>
                                <li><strong>encoding</strong></li>
                                <p>− This represents the encoding type to use. 'utf8' is the default encoding..</p>

                                <li><strong>start</strong></li>
                                <p>− This represents the beginning index to start reading. The defaults value is 0.</p>

                                <li><strong>end</strong></li>
                                <p>− This represents the end index to end reading. The default value is the complete buffer</p>
                              
                            </ul>
                            <p><strong>Return Value</strong></p>
                            <p>
                                This above method decodes and returns a string from buffer data which is encoded as specified in the character set encoding.
                            </p>

                            <p><strong>Example</strong></p>
                            <p className="text-code">
                                <p><span style={{ color: 'blue' }}>var</span> buffer = <span style={{ color: 'blue' }}>new</span> Buffer(<span style={{ color: 'red' }}>256</span>);</p>
                                <p><span style={{ color: 'blue' }}>var</span> ln = buffer.write(<span style={{ color: 'green' }}>"You are welcome!"</span>);</p>
                                <p>console.log(<span style={{ color: 'green' }}>"Octets : "</span>+ln);</p>
                            </p>

                            <p><strong>Output : </strong></p>
                            <p className="text-code">
                                <p>Octets : 16</p>
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