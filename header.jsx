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
                    <a href=""className="navItem">MONGODB</a>
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
            </Navbar.Collapse>
        </Navbar>
        <div style={{ backgroundColor: "grey", marginTop:'-20px', padding:'10px'}}>
            <center style={{fontSize: "75px", fontWeight: "bold", 
        fontFamily: "Arial", color: "#fff", textShadow: '1px 1px #b2b0b0'}}>nodeTpoint</center>
         <center style={{color:'#3d3f3f', fontSize: "15px", fontStyle:'italic', textShadow: 'none', marginTop:'-15px', 
         fontWeight: "normal"}} >test your khowledge</center>
        </div>
        {this.props.children}
      </div>
    )
  }
}
export default Header;