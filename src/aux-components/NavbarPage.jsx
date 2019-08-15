import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

import './Navbar.css'

class NavbarPage extends Component {
state = {
  isOpen: false,
  active: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

onChangeClass = () =>{
  this.setState({ active: !this.state.active});
}



render() {
  return (
    <Router>
      <MDBNavbar color="elegant-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Optica</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem onClick={this.onChangeClass}>
              <MDBNavLink className={this.state.active ? "active" : "disactive" } to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink  to="/productos">Productos</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink  to="/contacto">Contacto</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Anteojos</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Sol</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Receta</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Marcas</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
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
    );
  }
}

export default NavbarPage;