import React from 'react';
import Header from './Header.js';
import './App.css';

class TransactionHistory extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <div class="container">
              <div class="row justify-content-md-center">
                  <div class="col col-lg-2">
                      
                  </div>
                  <div class="col-md-auto">
                      <h1 class="greetings">Transaction History</h1>
                  </div>
                  <div class="col col-lg-2">
                      
                  </div>
              </div>
          </div>
        <table class="table table-dark table-bordered table-hover">
          <thead class="thead-light">
              <tr>
                  <th scope="col">Rekening</th>
                  <th scope="col">Waktu</th>
                  <th scope="col">Tipe</th>
                  <th scope="col">Nominal</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td id="rekening" class=" table-striped">a</td>
                  <td id="waktu">a</td>
                  <td id="tipe" class="table-striped">a</td>
                  <td id="nominal">a</td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

  // SOAP Request
  // <?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
  //     <SOAP-ENV:Header/>
  //     <S:Body xmlns:ns2="http://BankWebService/">
  //         <ns2:getAccountDetail>
  //             <accountNumber>30244228930887</accountNumber>
  //         </ns2:getAccountDetail>
  //     </S:Body>
  // </S:Envelope>
  
  // SOAP Response
  // <?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
  //     <SOAP-ENV:Header/>
  //     <S:Body xmlns:ns2="http://BankWebService/">
  //         <ns2:getAccountDetailResponse>
  //             <return>
  //                 <userName>Robbie McKune</userName>
  //                 <accountNumber>30244228930887</accountNumber>
  //                 <balance>9986451.0</balance>
  //                 <type>DEBIT</type>
  //                 <amount>12213.0</amount>
  //                 <accNumTrx>6709601272029178223</accNumTrx>
  //                 <transactionTime>2019-11-18 00:46:32</transactionTime>
  //             </return>
  //             <return>
  //                 <userName>Robbie McKune</userName>
  //                 <accountNumber>30244228930887</accountNumber>
  //                 <balance>9986451.0</balance>
  //                 <type>DEBIT</type>
  //                 <amount>12213.0</amount>
  //                 <accNumTrx>6709601272029178223</accNumTrx>
  //                 <transactionTime>2019-11-18 00:46:32</transactionTime>
  //             </return>
  //         </ns2:getAccountDetailResponse>
  //     </S:Body>
  // </S:Envelope>    




export default TransactionHistory;
