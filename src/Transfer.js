import React from 'react';
import Header from './Header.js';
import Modals from './Modals.js';
import './App.css';
import {InputGroup, FormControl, Modal, Button, ButtonToolbar}
  from 'react-bootstrap';

/**
 * Class Transfer.
 */
class Transfer extends React.Component {
  

  /**
   * render method.
   * @return {*} component.
   */
  render() {
    const mod = new Modals();
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-2">

            </div>
            <div className="col-md-auto">
              <h1 className="greetings">Transfer</h1>
              <hr></hr>
              <form className="box">
                <input type= "text" name="noRekeningTujuan"
                  id ="noRekeningTujuan" placeholder="Rekening Tujuan"
                  required/>
                <InputGroup className="mb-5">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Rp</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl id="Nominal"
                    aria-label="Amount (to the nearest rupiah)" />
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
            <div className="col col-lg-2">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Transfer;
