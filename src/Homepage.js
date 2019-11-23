import React from 'react';
import Header from './Header.js';
import './App.css';
import {InputGroup, FormControl, Modal, Button, ButtonToolbar}
  from 'react-bootstrap';

/**
 * Class Homepage.
 */
class Homepage extends React.Component {
  /**
   * render method.
   * @return {*} component.
   */
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-2">

            </div>
            <div className="col-md-auto">
              <p className="greetings">
                Hello, <span id="username">user!</span>
              </p>
              <hr></hr>
              <div className="box">
                <label htmlFor ="no-rekening">Account Number </label>
                <FormControl id="no-rekening" className="showForm" />
                <label htmlFor ="saldo">Balance </label>
                <FormControl id="balance" className="showForm" />
              </div>
            </div>
            <div className="col col-lg-2">
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Homepage;
