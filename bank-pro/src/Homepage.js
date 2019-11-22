import React from 'react';
import Header from './Header.js';
import './App.css';
import { InputGroup, FormControl, Modal, Button, ButtonToolbar } from 'react-bootstrap';
class Homepage extends React.Component{
    render(){
      return (
        <div>
          <Header />
          <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2">
                        
                    </div>
                    <div class="col-md-auto">
                      <p class="greetings">Hello, <span id="username">user!</span></p>
                      <hr></hr>
                      <div class="box">
                        <label for ="no-rekening">Account Number </label>
                        <FormControl id="no-rekening" className="showForm" />
                        <label for ="saldo">Balance </label>
                        <FormControl id="balance" className="showForm" />
                      </div>
                    </div>
                    <div class="col col-lg-2">     
                    </div>
                </div>
            </div>
                
        </div>
      );
    }
}

export default Homepage;
