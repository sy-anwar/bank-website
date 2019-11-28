import React from 'react';
import './App.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
// eslint-disable-next-line
import {Popover, Button, OverlayTrigger} from 'react-bootstrap';
// eslint-disable-next-line
import Homepage from './Homepage';
import Cookies from 'universal-cookie';

/**
 * Class Login.
 */
class Login extends React.Component {
  /**
   * constructor class.
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      accountNumber: '',
      isLogin: false,
    };
    this.validateLogin = this.validateLogin.bind(this);
  }
  // popover = (
  //   <Popover id="popover-basic">
  //     <Popover.Title as="h3">!!!</Popover.Title>
  //     <Popover.Content>
  //       Wrong account number!
  //     </Popover.Content>
  //   </Popover>
  //   );

  /**
   * validateLgin method.
   */
  validateLogin() {
    const cookies = new Cookies();
    const accountNumber = this.state.accountNumber;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://localhost:8888/WebServiceBank?wsdl', true);
    cookies.set('accountNumber', accountNumber, {path: '/'});

    // SOAP REQUEST
    const soapReq =
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:kas="http://kasatukelima.wsbank/">
        <soapenv:Header/>
        <soapenv:Body>
            <kas:validateAccountNumber>
              <accountNumber>` + this.state.accountNumber + `</accountNumber>
            </kas:validateAccountNumber>
        </soapenv:Body>
      </soapenv:Envelope>`;

    xmlhttp.onreadystatechange = function(accountNumber) {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          const parser = new DOMParser();
          const xml = parser.parseFromString(xmlhttp.response, 'text/xml');
          if (xml.getElementsByTagName('return')[0].innerHTML === '200') {
            // ke homepage
            // console.log(xml.getElementsByTagName('return'));
            window.location.replace('./homepage');
          } else {
            document.getElementById('noRekening').value = '';
          }
        }
      }
    };

    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(soapReq);
  }

  /**
   * render method.
   * @return {*}
   */
  render() {
    if (this.isLogin) {
      return ( <Redirect to="/homepage"/>);
    } else {
      return (
        <div className="row">
          <header className="Login-header col-lg-4">
            <img src="logo.png" alt=""></img>
            <form>
              <input type= "text" name="noRekening" id ="noRekening"
                placeholder="Nomor Rekening" value={this.state.accountNumber}
                onChange={(evt) => this.updateInputValue(evt)} required/>
              {/* <OverlayTrigger trigger="this.validateLogin()=='FAIL'"
              placement="right" overlay={this.popover}>  */}
              <Button id = "button_login" onClick={this.validateLogin}>
                Login
              </Button>
              {/* </OverlayTrigger> */}
              {/* trigger = if wrong number, validate return */}
            </form>
          </header>
        </div>
      );
    }
  }

  /**
   * updateInputValue method.
   * @param {*} evt
   */
  updateInputValue(evt) {
    this.setState({accountNumber: evt.target.value});
  }
}

export default Login;
