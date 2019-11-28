import React from 'react';
// eslint-disable-next-line
import Header from './Header.js';
import './App.css';
import Cookies from 'universal-cookie';

/**
 * Class TransactionHistory.
 */
class TransactionHistory extends React.Component {
  /**
   * reeWBS method.
   */
  componentDidMount() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://localhost:8888/WebServiceBank?wsdl', true);

    // get cookie?
    const cookies = new Cookies();
    let accNum = 0;

    accNum = cookies.get('accountNumber');
    console.log(accNum);
    // SOAP REQUEST
    const soapReq =
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:kas="http://kasatukelima.wsbank/">
        <soapenv:Header/>
        <soapenv:Body>
            <kas:getAccountDetail>
              <accountNumber>` + accNum + `</accountNumber>
            </kas:getAccountDetail>
        </soapenv:Body>
      </soapenv:Envelope>`;

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          const parser = new DOMParser();
          const xml = parser.parseFromString(xmlhttp.response, 'text/xml');
          console.log(xml);
          const detail = xml.getElementsByTagName('return');
          let table = '';

          if (detail) {
            for (let i = 0; i < detail.length; i++) {
              // Inner loop to create children
              table += '<tbody><tr>';
              const rekening =
                  detail[i].getElementsByTagName('accNumTrx')[0].innerHTML;
              console.log(rekening);
              const waktu =
                detail[i].getElementsByTagName('transactionTime')[0].innerHTML;
              const tipe =
                  detail[i].getElementsByTagName('type')[0].innerHTML;
              const nominal =
                  detail[i].getElementsByTagName('amount')[0].innerHTML;
              table += '<td id="rekening" className=" table-striped">' +
                  rekening + '</td>';
              table += '<td id="waktu">' + waktu + '</td>';
              table += '<td id="tipe" className="table-striped">' +
                  tipe + '</td>';
              table += '<td id="nominal">' + nominal + '</td>';
              table += '</tr></tbody>';
            }
            // Create the parent and add the children
          }
          document.getElementById('tabelTrx').innerHTML += table;
        }
      }
    };
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(soapReq);
  }

  /**
   * renderTable method.
   */
  renderTable() {

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
            <div className="col col-lg-2"></div>
            <div className="col-md-auto">
              <h1 className="greetings">Transaction History</h1>
              <hr></hr>
              <table id="tabelTrx" className="table responsive
                  table-dark table-bordered table-hover">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Rekening Tujuan</th>
                    <th scope="col">Waktu</th>
                    <th scope="col">Tipe</th>
                    <th scope="col">Nominal</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="col col-lg-2"></div>
          </div>
        </div>
      </div>
    );
  }
}


export default TransactionHistory;
