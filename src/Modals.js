import React from 'react';
import Cookies from 'universal-cookie';
// eslint-disable-next-line
import {InputGroup, FormControl, Modal, Button, ButtonToolbar}
  from 'react-bootstrap';

/**
 * Class Modals.
 */
class Modals extends React.Component {
  /**
   * constructor class.
   * @param {*} props props
   * @param {*} context context
   */
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTransfer = this.handleTransfer.bind(this);
    this.state = {
      show: false,
    };
  }

  /**
   * handleClose method.
   */
  handleClose() {
    this.setState({show: false});
    console.log('cancel');
  }

  /**
   * handleShow method.
   */
  handleShow() {
    this.setState({show: true});
  }

  /**
   * handleTransfer method.
   */
  handleTransfer() {
    this.setState({show: false});
    const cookies = new Cookies();
    const recipients = document.getElementById('noRekeningTujuan').value;
    const nominal = document.getElementById('nominal').value;
    const senderNumber = cookies.get('accountNumber');
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://localhost:8888/WebServiceBank?wsdl', true);

    // SOAP REQUEST
    const soapReq =
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:kas="http://kasatukelima.wsbank/">
        <soapenv:Header/>
        <soapenv:Body>
            <kas:transfer>
              <senderAccountNumber>` + senderNumber + `</senderAccountNumber>
              <recipientsAccountNumber>` + recipients +
                  `</recipientsAccountNumber>
              <amount>` + nominal + `</amount>
            </kas:transfer>
        </soapenv:Body>
      </soapenv:Envelope>`;

    // xmlhttp.onreadystatechange = function(accountNumber){
    //   if(xmlhttp.readyState === 4){
    //     if (xmlhttp.status === 200){
    //       var parser = new DOMParser();
    //       var xml = parser.parseFromString(xmlhttp.response, 'text/xml');
    //       if (xml.getElementsByTagName('return')[0].innerHTML === "200") {
    //         // ke homepage
    //         console.log(xml.getElementsByTagName('return'));
    //         window.location.replace("/transaction");
    //       }
    //     }
    //   }
    // }

    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(soapReq);
    window.location.replace('/transaction');
  }
  /**
   * render method.
   * @return {*} component.
   */
  render() {
    return (
      <div>
        <Button variant="primary" size="lg" id="button_login"
          onClick={this.handleShow}>
          Submit
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Are you sure?</h4>
            <p>
                Please make sure you have insert the correct number and amount.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>Cancel</Button>
            {/* Yang di bawah ini mestinya send request SOAP */}
            <Button variant="primary" onClick={this.handleTransfer}>
              Transfer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// render(<Modals />);
export default Modals;
