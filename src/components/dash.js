import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Mail from './ContactUs';
import Subjects from './Subjects';
import Offer from './Offer.js';
import Tutor from './Tutor';
import mainLogo from './4.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './homecss.css';

class NavbarPage extends Component {
state = {
  isOpen: false ,
  activeItem: 'home'
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
handleClick = () => this.setState({ activeItem: "home" })
clickHome = () => this.setState({ activeItem: "home"  ,isOpen: !this.state.isOpen})
clickSubject = () => this.setState({ activeItem: "Subjects"  ,isOpen: !this.state.isOpen})
clickOffer = () => this.setState({ activeItem: "What we offer" ,isOpen: !this.state.isOpen })
clickTutor = () => this.setState({ activeItem: "Become a Tutor"  ,isOpen: !this.state.isOpen})
clickContact = () => this.setState({ activeItem: "Contact"  ,isOpen: !this.state.isOpen})


render() {
  return (
    <div>
      <div align="left" className = "bannerback" onClick={this.handleClick}>
  <Row>
    <Col><img src={mainLogo} width="400" height="150" style={{ verticalAlign: "left"}} /></Col><Col></Col><Col></Col>
  </Row>
  </div>
    <Router>
      <MDBNavbar color="grey" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">The Toppers Club</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="#!" onClick= {this.clickHome}>Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" onClick= {this.clickSubject}>Subjects</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!"onClick= {this.clickOffer}>What we Offer</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" onClick= {this.clickTutor}>Become a Tutor</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" onClick= {this.clickContact}>Contact</MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Dropdown</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    {this.state.activeItem == "home" ? (<Home/>) : (<div></div>)}
    {this.state.activeItem == "Subjects" ? (<Subjects/>): (<div></div>) }
    {this.state.activeItem == "Become a Tutor" ? (<Tutor/>): (<div></div>) }
    {this.state.activeItem == "What we offer" ? (<Offer/>): (<div></div>) }
    {this.state.activeItem == "Contact" ? (<Mail/>): (<div></div>) }
    </div>
    );
  }
}

export default NavbarPage;