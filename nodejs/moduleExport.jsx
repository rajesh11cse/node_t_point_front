import React from 'react';
class ModuleExport extends React.Component {
    render() {
        return (
            <div>
                <article>
                    <a href="#/nodejs/module" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                    <a href="#/nodejs/npm" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
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
                            <h2>Exporting and Importing a Module</h2>
                            <p>
                                As we disscused above exports is an object. So it exposes whatever you assigned 
                                to it as a module. For example, if you assign a string literal then it will expose that string literal as a module.
                            </p>
                              <p>
                                Let's implement a small examples to understand exports or module.export.
                               Have a look at the following example.
                             </p>
                            <p>
                            Create two files greetings.js and main.js. Make greetings.js file empty and 
                            few line of code in main.js file as shown in below fig.
                            <img className="thumbnail" width="100%" src="./img/Selection_013.png" alt="Image Error" />
                             <img className="thumbnail" width="100%" src="./img/Selection_014.png" alt="Image Error" />
                            </p>
                            <p>
                            Run command node main.js in CMD, we see the output an empty object only. 
                            It means that we can access the data of type object only in main.js file.
                            Now Let's do one thing as shown below fig.
                           <img className="thumbnail" width="100%" src="./img/Selection_015.png" alt="Image Error" />
                           <img className="thumbnail" width="100%" src="./img/Selection_016.png" alt="Image Error" />
                            </p>
                            <p>
                            Initially, exports and module.exports point at the same empty object. 
                            Name is varible, We can't access it in main.js. We can access the data of type object only
                            in main.js. That's why we see the output as undefined. Update greetings.js file as shown below fig.
                            <img className="thumbnail" width="100%" src="./img/Selection_017.png" alt="Image Error" />
                            <img className="thumbnail" width="100%" src="./img/Selection_018.png" alt="Image Error" />
                            </p>
                             <p>
                            Hey, Look at the output, we are able to get right output now. Because now the name is
                            treating as object type in greetings.js file. For that we have two deffrent ways to get object type
                            exports.name and module.exports.name.
                            </p>

                            <p>
                            So same procedure can be applied on methods or function as shown in below fig.
                            </p>
                            <img className="thumbnail" width="100%" src="./img/Selection_019.png" alt="Image Error" />
                            <img className="thumbnail" width="100%" src="./img/Selection_020.png" alt="Image Error" />
                            <p> 
                                Same output we can get by the folowing procedure. But module.exports is essential,
                                because exports is never exported in this case. Only exports will 
                                expose an error.
                                <img className="thumbnail" width="100%" src="./img/Selection_021.png" alt="Image Error" />
                            <img className="thumbnail" width="100%" src="./img/Selection_020.png" alt="Image Error" />
                            </p>
                        </p>
                        
                            <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>The difference between module.exports and exports</h2>
                            <p>
                             <li>Module.exports is a object reference that gets returned from the require()</li>
                            <li>exports is just a convenience variable which help module to write less code that can not get returned from the require()</li>
                            </p>
                           
                            <p>If the relationship between exports and module.exports seems like confusion to you, 
                                ignore exports and only use module.exports.
                            </p>
                        </p>
                        <a href="#/nodejs/module" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/npm" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                    </div>
                </article>
            </div>
        )
    }
}

export default ModuleExport;