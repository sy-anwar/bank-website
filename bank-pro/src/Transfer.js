import React from 'react';
import Header from './Header.js';
import './App.css';

function Transfer(props) {
  // SOAP Request
  // <?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
  //     <SOAP-ENV:Header/>
  //     <S:Body xmlns:ns2="http://BankWebService/">
  //         <ns2:transfer>
  //             <senderAccountNumber>3541086930457931</senderAccountNumber>
  //             <recipientsAccountNumber>4405284116242994</recipientsAccountNumber>
  //             <amount>88888.0</amount>
  //         </ns2:transfer>
  //     </S:Body>
  // </S:Envelope>
  
  // SOAP Response
  // <?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
  //     <SOAP-ENV:Header/>
  //     <S:Body xmlns:ns2="http://BankWebService/">
  //         <ns2:transferResponse>
  //             <return>OK</return>
  //         </ns2:transferResponse>
  //     </S:Body>
  // </S:Envelope>

  return (
    <div>
      <Header />
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2">
            
          </div>
          <div class="col-md-auto">
            <h1 class="greetings">Transfer</h1>
          </div>
          <div class="col col-lg-2">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Transfer;
