import React from 'react';
import Header from './Header.js';
import './App.css';
import Cookies from 'universal-cookie';
import {InputGroup, FormControl, Modal, Button, ButtonToolbar}
  from 'react-bootstrap';
import { number } from 'prop-types';

/**
 * Class Homepage.
 */
class Homepage extends React.Component {
  /**
   * Constructor class.
   * @param {*} props 
   */
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      accountNumber: 0,
      balance: 0,
    }
  }
  /**
   * componentDidMount method.
   */
  componentDidMount() {
    // get cookie?
    var cookies = new Cookies();
    var accNum = 0;

    accNum = cookies.get('accountNumber');
    console.log(accNum);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST','http://localhost:8888/WebServiceBank?wsdl',true);
    var uName = '';
    var bal = 0;
    // SOAP REQUEST
    var soapReq = 
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:kas="http://kasatukelima.wsbank/">
        <soapenv:Header/>
        <soapenv:Body>
            <kas:getAccountDetail>
              <accountNumber>` + accNum + `</accountNumber>
            </kas:getAccountDetail>
        </soapenv:Body>
      </soapenv:Envelope>`;

    xmlhttp.onreadystatechange = function(){
      if(xmlhttp.readyState === 4){
        if (xmlhttp.status === 200){
          var parser = new DOMParser();
          var xml = parser.parseFromString(xmlhttp.response, 'text/xml');
          console.log(xml.getElementsByTagName('return'));
          var detail = xml.getElementsByTagName('return')[0];
          if (detail) {
            // ke homepage
            document.getElementById('username').innerHTML = detail.getElementsByTagName('userName')[0].innerHTML;
            document.getElementById('no-rekening').value = detail.getElementsByTagName('accountNumber')[0].innerHTML;
            document.getElementById('balance').value = 'Rp ' + detail.getElementsByTagName('balance')[0].innerHTML;
          } 
        }
      }
    }

    xmlhttp.setRequestHeader('Content-Type','text/xml');
    xmlhttp.send(soapReq); 
  }

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
                Hello, <span id="username">{this.state.userName}</span>
              </p>
              <hr></hr>
              <div className="box">
                <label htmlFor ="no-rekening">Account Number </label>
                <FormControl id="no-rekening" className="showForm" disabled value={this.state.accountNumber}/>
                <label htmlFor ="saldo">Balance </label>
                <FormControl id="balance" className="showForm" disabled value={this.state.balance}/>
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
