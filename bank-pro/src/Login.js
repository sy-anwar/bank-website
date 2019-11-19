import React from 'react';
import './App.css';

class Login extends React.Component{
  render(){
    return (
      <div className="row">
        <header className="Login-header col-lg-4">
        <img src="logo.png"></img>
          <form>
            <input type= "text" name="noRekening" id ="noRekening"  placeholder="Nomor Rekening" required/>
            <button id = "button_login">Login</button>
          </form>
        </header>
      </div>
    );
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
