import React from 'react';
class EnvironmentSetup extends React.Component {
    render() {
        return (
            <div>
                <article>
                    <div className="col-md-12">
                        <a href="#/nodejs/introduction" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/helloWorld" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                        <p className="totorial_question">
                            <h2>Node.js Installation and Setup Environment</h2>
                            <p>
                                Node.js installation and setup environment can be setup in Windows, Mac, Linux and Solaris. The following tools/SDK are
                                required for developing a Node.js application on any platform.
                            </p>
                            <ol>
                                <li>Node.js</li>
                                <li>Node Package Manager (NPM)</li>
                                <li>IDE (Integrated Development Environment) or TextEditor</li>
                            </ol>
                            <p>
                                NPM (Node Package Manager) is included in Node.js installation since Node version 0.6.0., so there is no need to install it separately.
                            </p>
                        </p>

                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Install Node.js on Windows</h2>
                            <p>
                                Download the latest version of Node.js installable archive file from <a target="_black" href="https://nodejs.org/en/">https://nodejs.org/en/</a>
                            </p>
                            <p>
                                NPM (Node Package Manager) is included in Node.js installation since Node version 0.6.0., so there is no need to install it separately.
                            </p>
                            <div className="col-md-12">
                                <img className="thumbnail" width="60%" src="./img/install1.png" alt="Image Error" />
                            </div>
                            <p>
                                Download node MSI for windows by clicking on Other Downloads then Windows Installer.
                             After you download the MSI, double-click on it to start the installation as shown below.
                            </p>
                            <div className="col-md-12">
                                <img className="thumbnail" width="60%" src="./img/install2.png" alt="Image Error" />
                            </div>
                            <p>
                                Click Next and Next untill you able to see the following sceenshot. Finally, click finish to complete the installation.So now Node.js has been installed on your system completely.
                            </p>
                            <div className="col-md-12">
                                <img className="thumbnail" width="60%" src="./img/install3.png" alt="Image Error" />
                            </div>
                            <p>
                                <strong>Varify Installtion</strong>
                            </p>
                            <p>
                                Once you install Node.js on your computer, we can verify it by opening the command prompt and type node --version.
                               If Node.js is installed successfully then it will display the version of the Node.js installed on your machine, as shown below.
                            </p>
                            <div className="col-md-12">
                                <img className="thumbnail" width="60%" src="./img/install4.png" alt="Image Error" />
                            </div>

                            <p>
                                <strong>Installtions on other OS</strong>
                            </p>
                            <p>
                                To Install Node.js on other operating systems like Linux, Ubuntu, Fedora and Mac OS, Please visit official <a href="https://nodejs.org/en/download/package-manager/">Website</a>
                            </p>

                        </p>
                        <a href="#/nodejs/introduction" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        <a href="#/nodejs/helloWorld" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>
                    </div>
                </article>
            </div>
        )
    }
}

export default EnvironmentSetup;