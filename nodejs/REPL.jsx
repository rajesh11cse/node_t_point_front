import React from 'react';
class REPL extends React.Component {
    render() {
        return (
           <div>
                <article>
                    <div className="col-md-12">
                        <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>Node.js REPL</h2>
                            <p>
                               The term REPL stands for Read Eval Print and Loop. It specifies a computer environment like a window console or a Unix/Linux shell where 
                               you can enter the commands and the system responds with an output in an interactive mode.
                            </p>
                        </p>

                         <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>Node.js REPL Environment</h2>
                            <p>
                              Node.js or Node comes bundled with a REPL environment. It performs the following tasks −
                            </p>
                             <ul>
                                <li><strong>Read</strong></li>
                                <p>− Reads user's input, parses the input into JavaScript data-structure, and stores in memory.</p>

                                <li><strong>Eval</strong></li>
                                <p>− It takes and evaluates the data structure.</p>

                                <li><strong>Print</strong></li>
                                <p>− Prints the result.</p>

                                <li><strong>Read</strong></li>
                                <p>− Loop</p>

                            </ul>
                        </p>

                         <p className="totorial_question">
                            <h2 style={{color:'#605e5e'}}>Start with REPL</h2>
                            <ol>
                                <li><strong>Simple expressions</strong></li>
                                <p>
                                REPL can be started by simply running node on shell/console without any arguments as follows.
                                </p>
                                <p style={{opacity:'0.9' ,color:'black', fontSize:'15px', borderLeft:'1px solid green', 
                                    padding:'10px'}}>$ node</p>
                                <p>You will see the REPL Command prompt <strong>></strong> where you can type any Node.js command </p>

                                <p>
                                Let's try a simple mathematics at the Node.js REPL command prompt −
                                </p>
                                <p style={{opacity:'0.9' ,color:'black', fontSize:'15px', borderLeft:'1px solid green', 
                                    padding:'10px'}}>
                                    <p>$ node</p>
                                    <p>></p>
                                    <p>>10+5</p>
                                    <p>15</p>
                                    <p>>5+(5*2)+7</p>
                                    <p>22</p>
                                </p>

                                <li><strong>Using variable</strong></li>
                                <p>
                                You can make use variables to store values and print later like any conventional script. If var keyword is not used, then the value is stored in the variable and printed. Whereas if var keyword is used, then the value is stored but not printed. You can print variables using console.log().
                                </p>

                                <p style={{opacity:'0.9' ,color:'black', fontSize:'15px', borderLeft:'1px solid green', 
                                    padding:'10px'}}>
                                    <p>$ node</p>
                                    <p>>x = 7</p>
                                    <p>7</p>
                                    <p>>var y = 15</p>
                                    <p>>x+y</p>
                                    <p>22</p>
                                    <p>>console.log("Hello World")</p>
                                    <p>Hello World</p>
                                    <p>undefined</p>
                                </p>

                                <li><strong>Multiline expressions</strong></li>
                                <p>
                                Node REPL supports multiline expression similar to JavaScript. Let's check the following do-while loop in action −
                                </p>

                                <p style={{opacity:'0.9' ,color:'black', fontSize:'15px', borderLeft:'1px solid green', 
                                    padding:'10px'}}>
                                    <p>$ node</p>
                                    <p>>var x = 0</p>
                                    <p>undefined</p>
                                    <p>>do {'{'}</p>
                                    <p>... x++;</p>
                                    <p>... console.log("x: " + x);</p>
                                    <p>... } while ( x {'<'} 5 );</p>
                                    <p>x: 1</p>
                                    <p>x: 2</p>
                                    <p>x: 3</p>
                                    <p>x: 4</p>
                                    <p>x: 5</p>
                                    <p>undefined</p>
                                    <p>></p>
                                </p>

                                <li><strong>Underscore Variable</strong></li>
                                <p>
                                You can use underscore (_) to get the last result −
                                </p>

                                <p style={{opacity:'0.9' ,color:'black', fontSize:'15px', borderLeft:'1px solid green', 
                                    padding:'10px'}}>
                                   <p>$ node</p>
                                    <p>>var x = 5</p>
                                    <p>undefined</p>
                                    <p>>var y = 6</p>
                                    <p>undefined</p>
                                    <p>>x+y</p>
                                    <p>11</p>
                                    <p>> var sum = _</p>
                                    <p>undefined</p>
                                    <p>>console.log(sum)</p>
                                    <p>11</p>
                                    <p>undefined</p>
                                    <p>></p>
                                </p>

                            </ol>
                            

                            

                        </p>



                        <button className="pull-right btn btn-default ">Next Page <span className="glyphicon glyphicon-circle-arrow-right"></span></button>
                    </div>
                </article>
            </div>
        )
    }
}

export default REPL;