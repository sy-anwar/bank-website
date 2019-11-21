import React from 'react';
import Header from './Header.js';
import Modals from './Modals.js'
import './App.css';
import { InputGroup, FormControl, Modal, Button, ButtonToolbar } from 'react-bootstrap';

class Transfer extends React.Component {
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

  render(){
    var mod = new Modals();
    return (
      <div>
        <Header />
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col col-lg-2">
              
            </div>
            <div class="col-md-auto">
              <h1 class="greetings">Transfer</h1>
              <hr></hr>
              <form class="box">
                <input type= "text" name="noRekeningTujuan" id ="noRekeningTujuan"  placeholder="Rekening Tujuan" required/>
                <InputGroup className="mb-5">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Rp</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl id="Nominal" aria-label="Amount (to the nearest rupiah)" />
                  <InputGroup.Append>
                    <InputGroup.Text>.00</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                
                <Modals
                    show={mod.handleShow}
                    onHide={() => mod.handleShow(false)}
                />
               
            </form>
            </div>
            <div class="col col-lg-2">
  
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default Transfer;
