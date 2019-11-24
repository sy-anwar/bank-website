import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

/**
 * Class Header.
 */
class Header extends React.Component {
  /**
   * render method.
   * @return {*} component.
   */
  render() {
    return (
      <div className="Header">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/homepage">
            <Link to="/homepage"><img src="tesuto.png"></img></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/transfer">Transfer</Nav.Link>
              <Nav.Link href="/transaction">Transaction History</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
