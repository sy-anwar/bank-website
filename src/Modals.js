
import React from 'react';
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
    this.state = {
      show: false,
    };
  }

  /**
   * handleClose method.
   */
  handleClose() {
    this.setState({show: false});
  }

  /**
   * handleShow method.
   */
  handleShow() {
    this.setState({show: true});
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
            <Button variant="danger" onClick={this.handleClose}>Close</Button>
            {/* Yang di bawah ini mestinya send request SOAP */}
            <Button variant="primary" onClick={this.handleClose}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// render(<Modals />);
export default Modals;
