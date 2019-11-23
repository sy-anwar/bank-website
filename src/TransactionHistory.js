import React from 'react';
import Header from './Header.js';
import './App.css';

/**
 * Class TransactionHistory.
 */
class TransactionHistory extends React.Component {
  /**
   * constructor class.
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }  

  /**
   * reeWBS method.
   */
  reqWBS() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('SOAP', 'http://localhost:8080/BankWebService/', true);

    // SOAP REQUEST
    const soapReq =
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ban="http://BankWebService/">
        <soapenv:Header/>
          <soapenv:Body>
            <ban:getAccountDetail>
                <accountNumber>` + this.state. + `</accountNumber>
            </ban:getAccountDetail>
          </soapenv:Body>
      </soapenv:Envelope>`;

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          alert('Response: ' + xmlhttp.response);
          // result: xmlhttp.response.text;
          // <Link to="/homepage"></Link>;
        }
      }
    };
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
  }

  /**
   * renderTable method.
   */
  renderTable() {
    // var i, x, xmlRes, table;
    // xmlRes = xml.responseXML;
    // table ="<tr><td id=\"rekening\" class=\" table-striped\">a</td>
    // <td id="waktu">a</td>
    // <td id="tipe" class="table-striped">a</td>
    // <td id="nominal">a</td></tr>";
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
              <h1 className="greetings">Transaction History</h1>
              <hr></hr>
              <table className="table responsive
                  table-dark table-bordered table-hover">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Rekening</th>
                    <th scope="col">Waktu</th>
                    <th scope="col">Tipe</th>
                    <th scope="col">Nominal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="rekening" className=" table-striped">a</td>
                    <td id="waktu">a</td>
                    <td id="tipe" className="table-striped">a</td>
                    <td id="nominal">a</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col col-lg-2">

            </div>
          </div>
        </div>

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
