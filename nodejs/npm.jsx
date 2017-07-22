import React from 'react';
class NPM extends React.Component {
    render() {
        return (
            <div>
                <article>
                    <div className="col-md-12">
                        <a href="#/nodejs/moduleExport" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/WebServer" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Node Package Manager (NPM)</h2>
                            <p>
                                NPM stands for Node.js Package Management. It is a Command line utility. It comes with Node.js platform and allows us to install various packages
                                for Node.js. This package manages and supports various commands to install and remove the modules
                            </p>
                            <p>
                                Node Package Manager (NPM) provides two main functionalities
                            </p>
                            <ul>
                                <li>This provides online repositories for node.js packages or modules .This are searchable on <a target="_black" href="https://search.nodejs.org/en/">search.nodejs.org</a></li>
                                <li>This also provides command line utility to install Node.js packages, do version management and dependency management of Node.js packages</li>
                            </ul>
                            <p>
                                One important point here, the npm alredy comes bundled with Node.js installables, No need it install it explicitly.
                                You can check the version by opening Node.js command prompt and typing the following command:
                            </p>
                            <p className="text-code">
                                <p>npm --version</p>
                                <p>4.2.0</p>
                            </p>
                        </p>
                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Installing Modules using npm</h2>
                            <p>
                                For example, If you want to install <strong>express</strong> framework.
                               Following is the command to install <strong>express</strong> or whatever you want to install thats your choice.
                            </p>
                            <p>
                                <img className="thumbnail" width="100%" src="./img/npminstall.png" alt="Image Error" />
                            </p>
                        </p>

                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Global vs Local Installation</h2>
                            <p>
                                One of the best things about npm is that it locally stores all dependencies. Locally means It install dependencies in a folder and the
                               folder is available where your application is. The folder name is <strong>node_modules</strong>
                            </p>

                            <p>
                                Globally installed packages/dependencies are stored in system directory. To install globally you must have the permission from administrator.
                                Packages/Dependencies can be installed using the following command.
                            </p>
                            <p className="text-code">
                                <p>npm install express -g</p>
                            </p>
                        </p>


                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Uninstalling a Module</h2>
                            <p>
                                To uninstall a Node.js module, use the following command:
                            </p>
                            <p className="text-code">
                                <p>$ npm uninstall express</p>
                            </p>
                            <p>
                                Once NPM uninstalls the package, you can verify it by looking at
                              the content of /node_modules/ directory or in package.json or type the following command −
                            </p>
                            <p className="text-code">
                                <p>$ npm ls</p>
                            </p>
                        </p>

                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Updating a Module</h2>
                            <p>
                                There two ways to update module.
                               Update package.json and change the version of the dependency to be updated and run the following command.
                            </p>
                            <p>
                                <li>Update package.json and change the version of the dependency to be updated and run the following command.</li>
                            </p>
                            <p className="text-code">
                                <p>$ npm update express</p>
                            </p>

                            <p>
                                <li>or direct put the version of module along with name using @ symoble, shown in following command</li>
                            </p>
                            <p className="text-code">
                                <p>$ npm install express@4.25.0</p>
                            </p>
                        </p>

                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Search a Module</h2>
                            <p>
                                You can search a package in application using following command
                            </p>
                            <p className="text-code">
                                <p>$ npm search express</p>
                            </p>
                        </p>

                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Need of npm package</h2>
                            <p>
                                While working on a real node.js application you will be encountered many instances where
                                you needed to write a few libraries. Instead of writing, you can directly get these libraries form official
                                 website of <a href="https://www.npmjs.com/">NPM</a>.
                                 These libraries could be useful
                                 in your application. There are many libraries available on official website.
                            </p>
                        </p>

                        <a href="#/nodejs/moduleExport" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/WebServer" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                    </div>
                </article>
            </div>
        )
    }
}

export default NPM;