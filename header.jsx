import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Comment from './comment.jsx';
import Footer from './footer.jsx'

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            activateKey: localStorage.getItem('activeLink') ? localStorage.getItem('activeLink') : 0,
        }
    }

    componentDidMount() {
        window.onscroll = function () {
            if ($(this).scrollTop() > 300) {
                $('#myBtn').fadeIn(3000);
            } else {
                $('#myBtn').fadeOut(3000);
            }
        };

        $('#myBtn').bind('click', function (e) {
            e.preventDefault();
            $('body,html').animate({ scrollTop: 0 }, 200);
        });
    }

    activeLink(eventKey, location) {
        if (eventKey == 1) {
            window.location.href = '#/';
        } else if (eventKey == 2) {
            window.location.href = '#/nodejs/home';
        } else if (eventKey == 3) {
            window.open('https://javacodepoint.com');
        } else if (eventKey == 4) {
            window.location.href = '#/interview/nodeInterview';
        } else if (eventKey == 5) {
            window.location.href = '#/contactUs';
        } else {
            window.location.href = "#/";
        }

        if (eventKey !== 3) {
            this.setState({ activateKey: eventKey })
            localStorage.setItem('activeLink', eventKey)
        }

    }

    isAcivated(activeKey) {

        $('body,html').animate({ scrollTop: 0 }, 100);

        if (activeKey == localStorage.getItem('activeLink')) {
            return 'activeLink';
        } else {
            return '';
        }
    }
    render() {


        return (
            <div>
                <button id="myBtn" title="Go to top">Top</button>
                <section>
                    <div style={{ backgroundColor: "white", marginTop: '0px', padding: '10px' }}>
                        {/*<p style={{fontSize: "75px", fontWeight: "bold", 
                fontFamily: "Arial", color: "#fff", textShadow: '1px 1px #b2b0b0'}}>NodeTPoint</p>
                <center style={{color:'#3d3f3f', fontSize: "15px", fontStyle:'italic', textShadow: 'none', marginTop:'-15px', 
                fontWeight: "normal"}} >raise your khowledge</center>*/}
                        <img className="" width="25%" src="./img/logo.png" alt="Image Error" />
                        <div className="pull-right" style={{ fontSize: '20px', filter: 'grayscale(10%)' }}>
                            <span>Follow us </span>
                            <a href=""><img className="" src="./img/facebook.png" alt="Image Error" /></a>
                            <a href=""><img className="" src="./img/twitter.png" alt="Image Error" /></a>
                            <a href=""><img className="" src="./img/linkedin.png" alt="Image Error" /></a>
                            <a href=""><img className="" src="./img/google.png" alt="Image Error" /></a>
                        </div>
                    </div>
                    <Navbar default collapseOnSelect style={{
                        background: '#000', border: 'none',
                        borderTopRightRadius: '0px', borderTopLeftRadius: '0px',
                        borderBottomRightRadius: '0px', borderBottomLeftRadius: '0px', boxShadow: 'none'
                    }}>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <span style={{ color: "white" }}>NODETPOINT</span>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav onSelect={this.activeLink.bind(this)}>
                                <NavItem eventKey={1} value="ggg" href="#" className={`${this.isAcivated(1)}`}>
                                    <span>Home</span>
                                </NavItem>

                                <NavItem eventKey={2} href="#" className={`${this.isAcivated(2)}`}>
                                    <span>NodeJs</span>
                                </NavItem>
                                <NavItem eventKey={3} target="_blank" href="#" className={`${this.isAcivated(3)}`}>
                                    <span>Java</span>
                                </NavItem>

                                <NavItem eventKey={4} href="#" className={`${this.isAcivated(4)}`}>
                                    <span>NodeJs Interview</span>
                                </NavItem>
                            </Nav>
                            <Nav pullRight onSelect={this.activeLink.bind(this)}>
                                <NavItem eventKey={5} href="#" className={`${this.isAcivated(5)}`}>
                                    <span>Contact Us</span>
                                </NavItem>
                                {/* <div className="col-md-3 pull-right headerSearch">
                        <div className="form-group">
                            <div className="input-group">
                                <input type="text" className="form-control header-text-box" placeholder="Search" id="inputGroup"/>
                                <span className="input-group-addon header-search-icon">
                                    <i className="glyphicon glyphicon-search "></i>
                                </span>
                            </div>
                        </div>
                    </div>*/}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </section>

                <section className="row">
                    <div className="col-md-12">
                        <div className="col-md-9 homePage">
                            {this.props.children}
                        </div>
                        <div className="col-md-3" style={{ marginTop: '20px' }}>
                            {/*Ads here..*/}
                            {/*<img className="col-md-12" src="http://webneel.com/sites/default/files/images/project/Creative%20Christmas%20Ads%20(8).jpg" alt="Ads not found"/>*/}
                        </div>
                    </div>
                    {/*Comments*/}
                    {this.state.activateKey == 1 || this.state.activateKey == 4 ? '' : <Comment />}
                </section>

                {/*Footer*/}
                <Footer />
            </div>
        )
    }
}
export default Header;














/*

import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'


class Header extends React.Component {

    constructor(){
        super();
        this.state = {
            activateKey : 0
        }
    }

    componentDidMount() {
       (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://www-nodetpoint-com.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();


    window.onscroll = function() {
         if($(this).scrollTop() > 200) {
            $('#myBtn').fadeIn(3000);
        } else {
            $('#myBtn').fadeOut(3000);
        }
    };

    $('#myBtn').bind('click', function(e) {
            e.preventDefault();
            $('body,html').animate({scrollTop:0},200);
        });
    }



    activeLink(eventKey){
        this.setState({activateKey : eventKey})
    }

    isAcivated(activeKey){
        if(activeKey == this.state.activateKey){
            return 'activeLink';
        }else{
            return '';
        }
    }
  render() {

      
    return (
      <div>
          <button id="myBtn" title="Go to top">Top</button>

          <section>
            <Navbar default collapseOnSelect style={{background : 'black', border:'none', 
            borderTopRightRadius:'0px', borderTopLeftRadius:'0px', 
            borderBottomRightRadius:'0px', borderBottomLeftRadius:'0px', boxShadow: 'none' 
            }}>
                <Navbar.Header>
                <Navbar.Brand>
                    <span>NODETPOINT</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav onSelect={this.activeLink.bind(this)}>
                    <NavItem eventKey={1} href="#" className={`${this.isAcivated(1)}`}>
                        <span>HOME</span>
                    </NavItem>

                    <NavItem eventKey={2} href="#" className={`${this.isAcivated(2)}`}>
                        <span>NODEJS</span>
                    </NavItem>

                    <NavItem eventKey={3} href="#" className={`${this.isAcivated(3)}`}>
                        <span>REACTJS</span>
                    </NavItem>

                    <NavItem eventKey={4} href="#" className={`${this.isAcivated(4)}`}>
                        <span>ANGULARJS</span>
                    </NavItem>

                    <NavItem eventKey={5} className={`${this.isAcivated(5)}`}>
                        <a>MONGODB</a>
                    </NavItem>

                    <NavDropdown eventKey={6} title="INTERVIEW QUESTINS" noCaret id="basic-nav-dropdown ">
                        <MenuItem eventKey={6.1}>Javascript interview questions</MenuItem>
                        <MenuItem eventKey={6.2}>Nodejs interview questions</MenuItem>
                        <MenuItem eventKey={6.3}>AngularJs interview questions</MenuItem>
                        <MenuItem eventKey={6.4}>ReactJs interview questions</MenuItem>
                        <MenuItem eventKey={6.5}>MongoDb interview questions</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={6.6}>Others</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <div className="col-md-3 pull-right headerSearch">
                        <div className="form-group">
                            <div className="input-group">
                                <input type="text" className="form-control header-text-box" placeholder="Search" id="inputGroup"/>
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-search header-search-icon"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div style={{ backgroundColor: "grey", marginTop:'-20px', padding:'10px'}}>
                <center style={{fontSize: "75px", fontWeight: "bold", 
                fontFamily: "Arial", color: "#fff", textShadow: '1px 1px #b2b0b0'}}>NodeTPoint</center>
                <center style={{color:'#3d3f3f', fontSize: "15px", fontStyle:'italic', textShadow: 'none', marginTop:'-15px', 
                fontWeight: "normal"}} >raise your khowledge</center>
            </div>
        </section>

        <section className="row">
                <div className="col-md-12">
                    <article className="col-md-9" style={{backgroundColor:'white'}}>
                        <div className="col-md-12">
                        <header>
                            <h1 style={{color:'#605e5e'}}>NodeJs Tutorial<span className="pull-right" style={{color:'grey', fontSize:'15px'}}>Updated on : 17 July 2017</span> </h1>
                        </header>
                        <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a target="#" href="https://nodejs.org/en/" 
                        style={{color:'green'}}>NodeJs</a> Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.

 This tutorial will help you learn the all topics of Node.js such as Node.js installations, exapmles, REPL, 
 nodejs modules, NPM, web servers, global objects, nodejs debuggers, EventEmitter,  database conection with mongodb and many more.<br />
                        <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/07/1436439824nodejs-logo.png" 
                        alt="NodeJS-large" width="383" height="160" className="" /><br />
                        Curernt version of Node.js <code>Nodejs 8.1.4</code>.</p>
                        <hr/>



                        <p className="totorial_heading">
                            <a target="_black" href="#/nodejs/introduction">NodeJs Introduction</a><br />
                        What is NodeJs and how is it useful for us.</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Environment Setup</a><br />
                        Install and setup an environment for on defferent platforms</p>

                         <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Hello World Example</a><br />
                       Classic Hello World with NodeJS.</p>

                       <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Console(REPL)</a><br />
                       Classic methods like console.log(), console.error(), console.warn() and Read Eval Print and Loop.</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Module</a><br />
                       Node.js includes three types of modules Core Modules, Local Modules and Third Party Modules</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js module.exports</a><br />
                       How module.exports works in NodeJs</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node Package Manager (NPM)</a><br />
                       What is the NPM and What is the need of NPM in Node.js</p>

                       <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Web Server</a><br />
                        What is Node.js web server and How to handle HTTP requests in NodeJs</p>

                         <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Global Objects</a><br />
                        What are Node.js global objects and Why we eeded of these variables.</p>

                           <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Debugger</a><br />
                        How to debug a nodejs application and tools to debug the application.</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js EventEmitter</a><br />
                        EventEmitter Object in NodeJS.</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">MongoDB in Node.js</a><br />
                        Use MongoDb database in your NodeJS application</p>

                        <p className="totorial_heading">
                            <a style={{color:'green'}} href="">Node.js Useful Resources</a><br />
                        Node.js Useful Resources</p>

                        </div>
                    </article>
                    
                    <div className="col-md-3" style={{marginTop:'20px'}}>
                    <img className="col-md-12" src="http://webneel.com/sites/default/files/images/project/Creative%20Christmas%20Ads%20(8).jpg" alt="Ads not found"/>
                    <img className="col-md-12" src="http://webneel.com/sites/default/files/images/project/Creative%20Christmas%20Ads%20(8).jpg" alt="Ads not found"/>
                    </div>
                </div>
                <div className="col-md-12">
                    <hr/>
                    <div className="col-md-12">
                        <div id="disqus_thread"></div>
                        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                    </div>
                </div>
        </section>



    <section>
        <div style={{backgroundColor: "grey", padding:'40px'}}>
            <center style={{fontSize: "15px", color: "#fff"}}>Copyright © 2017-2017 nodetpoint.com. All rights reserved.</center>
        </div>
    </section>
{this.props.children}



      </div>
    )
  }
}
export default Header;


*/