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
            <Navbar default collapseOnSelect style={{background : '#3d3f3f', border:'none', 
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
                    <article className="col-md-9">
                        <header>
                            <h1>AngularJS Tutorial</h1>
                        </header>
                        <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a href="https://angularjs.org/" style={{color:'green'}}>AngularJS</a> is the insanely popular Javascript MVC/MVVM framework developed by Misko Hevery at Google. It has changed the way we develop client side applications, by providing the possibilities to apply the best practices usually applied on server side like modular programming, separation of concerns, testability and many more, on  client side. Advantages are many fold increase in productivity, smooth learning curve for the developers, plain HTML to work with for Designers and finally, possibility to easily integrating with other popular libraries.<br />
                        <img src="http://websystique.com/wp-content/uploads/2015/09/AngularJS-large.png" alt="AngularJS-large" width="383" height="108" className="aligncenter size-full wp-image-1939" /><br />
                        This AngularJS Tutorial series is based on <code>AngularJS 1.4.4</code>.</p>
                        <hr/>
                        <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-introduction/">AngularJS Introduction</a><br />
                        What is AngularJS and what can it do for us.</p>
                        <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>
                         <p style={{color:'grey', fontFamily:'Arial', wordSpacing:'5px'}}><a style={{color:'green'}} href="http://websystique.com/angularjs/angularjs-hello-world-example/">AngularJS Hello World Example</a><br />
                        Classic Hello World with AngularJS.</p>

                    </article>
                    <div className="col-md-3">
                    Ads..
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




      </div>
    )
  }
}
export default Header;