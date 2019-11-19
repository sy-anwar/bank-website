import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';
import { Popover, Button, OverlayTrigger } from 'react-bootstrap';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = { inputValue: ''};
    this.validateLogin = this.validateLogin.bind(this);
  }
  popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">!!!</Popover.Title>
      <Popover.Content>
        Wrong account number!
      </Popover.Content>
    </Popover>
    );
 
  validateLogin(){
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET','http://localhost:8080/BankWebService/',true);

        //SOAP REQUEST
        var soapReq = 
          '<?xml version="1.0" encoding="UTF-8"?>' + 
          '<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">'
          +'<SOAP-ENV:Header/>'
          +'<S:Body xmlns:ns2="http://BankWebService/">'
            +  '<ns2:validateAccountNumber>'
            +'<accountNumber>' + this.state.inputValue + '</accountNumber>'
              +'</ns2:validateAccountNumber>'
        +'</S:Body>'
        +'</S:Envelope>';

        xmlhttp.onreadystatechange = function(){
          if(xmlhttp.readyState === 4){
            if (xmlhttp.status === 200){
              alert('Response: ' + xmlhttp.response);
              // result: xmlhttp.response.text;
                // return true;
              // <Link to="/homepage"></Link>;
            }
            else{
              return("FAIL");
            }
          }
        }
        xmlhttp.setRequestHeader('Content-Type','text/xml');
        // xmlhttp.send(soapReq);
    // if (result == 200){
    //   <Link to="/homepage"></Link>
    // }else{
    //   render()
    // }
  }
  render(){
    return (
      <div className="row">
        <header className="Login-header col-lg-4">
        <img src="logo.png" alt=""></img>
          <form>
            <input type= "text" name="noRekening" id ="noRekening"  placeholder="Nomor Rekening" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} required/>
            {/* <OverlayTrigger trigger="this.validateLogin()=='FAIL'" placement="right" overlay={this.popover}>  */}
              <Button id = "button_login" onClick={this.validateLogin()}>Login</Button>
            {/* </OverlayTrigger> */}
            {/* trigger = if wrong number, validate return */}
          </form>
        </header>
      </div>
    );
  }
  updateInputValue(evt){
    this.setState({inputValue: evt.target.value});
  }
}
  
  // SOAP Request
  // <?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
  //     <SOAP-ENV:Header/>
  //     <S:Body xmlns:ns2="http://BankWebService/">
  //         <ns2:validateAccountNumber>
  //             <accountNumber>30244228930887</accountNumber>
  //         </ns2:validateAccountNumber>
  //     </S:Body>
  // </S:Envelope>
  
  // SOAP Response
  // <?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
  //     <SOAP-ENV:Header/>
  //     <S:Body xmlns:ns2="http://BankWebService/">
  //         <ns2:validateAccountNumberResponse>
  //             <return>200</return>
  //         </ns2:validateAccountNumberResponse>
  //     </S:Body>
  // </S:Envelope>

  

export default Login;
