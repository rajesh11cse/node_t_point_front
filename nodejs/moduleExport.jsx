import React from 'react';
class ModuleExport extends React.Component {
    render() {
        return (
            <div>
                <article>
                    <a href="#/nodejs/module" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                    {/*<a href="_" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>*/}
                    <div className="col-md-12">
                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Node.js module.exports</h2>
                            <p>You learned that how to write a local module using module.exports in the previous section. 
                                In this section, you will learn how to expose different types as a module using module.exports.</p>

                            <p>The <strong>module.exports</strong> or <strong>exports</strong> is a special object which is included 
                            in every JS or 
                                javascript file in the Node.js application by 
                                default. module is a variable that specifies current module and exports is an object that will 
                                be exposed as a module. So, whatever you assign to module.exports or exports, will be exposed as a module.</p>
                        </p>

                        <p className="totorial_question">
                            <h2>Exporting a Module</h2>
                            <p>
                                As we disscused above exports is an object. So it exposes whatever you assigned 
                                to it as a module. For example, if you assign a string literal then it will expose that string literal as a module.
                            </p>
                              <p>
                                Let's implement a small examples to understand exports or module.export.
                               Have a look at the following example.
                             </p>
                            <p>create a file in notepade and save it as greetings.js</p>
                            <p><i style={{ backgroundColor: '#e8e8e8' }}>greetings.js</i></p>
                            <p className="text-code">
                                <p><span style={{ color: 'blue' }}>var</span> exports = module.exports = {'{ }'}</p>
                            </p>
                            <p>
                                Now we have to assign any expression in greetings.js file  that we want to become available in other 
                                files like app.js to the exports object.
                            </p>

                             <p className="text-code">
                                <p><span style={{ color: 'blue' }}>var</span> exports = module.exports = {'{ }'}</p>
                            
                                <p><span style={{ color: 'blue' }}>var</span> exports = module.exports = {'{ }'}</p>
                                
                                <p>exports.hello = <span style={{ color: 'blue' }}>function()</span>&nbsp;{'{'}</p>
                                <p><span style={{ color: 'blue' }}>&nbsp;&nbsp;return </span>'Hello'</p>
                                <p>};</p>

                            </p>
                            Continue...............................
                        </p>

                        <a href="#/nodejs/repl" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="_" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                    </div>
                </article>
            </div>
        )
    }
}

export default ModuleExport;