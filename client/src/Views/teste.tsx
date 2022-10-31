/*import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col, Container } from 'react-bootstrap';

function Teste() {
  const [showT, setShowT] = useState(false);
  const [showW, setShowW] = useState(false);

  const handleCloseT = () => setShowT(false);
  const handleShowT = () => setShowT(true);

  const handleCloseW = () => setShowW(false);
  const handleShowW = () => setShowW(true);

  return (
    <>
      <Button variant="primary" onClick={handleShowT}>
        Set temperature parameters
      </Button>

      <Modal
        show={showT}
        onHide={handleCloseT}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Temperature</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Row>
                <Col>
                  <h5 className="card-title">Temperature bellow with ice</h5>
                  <input type='number' className='form-control form-control-sm inputGroup-sizing-sm'
                    placeholder='' />
                </Col>
                <Col sm>
                  <h5 className="card-title">Temperature above with ice</h5>
                  <input type='number' className="form-control form-control-sm inputGroup-sizing-sm"
                    placeholder='' />
                </Col>
                <Col sm>
                  <h5 className="card-title">Temperature bellow without ice</h5>
                  <input type='number' className="form-control form-control-sm inputGroup-sizing-sm"
                    placeholder='' />
                </Col>
                <Col sm>
                  <h5 className="card-title">Temperature above without ice</h5>
                  <input type='number' className="form-control form-control-sm inputGroup-sizing-sm"
                    placeholder='' />
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseT}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="secondary" onClick={handleShowW}>
          Set wind parameters
        </Button>

      <Modal
        show={showW}
        onHide={handleCloseW}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Wind</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Row>
                <Col>
                  <h5 className="card-title">Wind bellow with ice</h5>
                  <input type='number' className='form-control form-control-sm inputGroup-sizing-sm'
                    placeholder='' />
                </Col>
                <Col sm>
                  <h5 className="card-title">Wind above with ice</h5>
                  <input type='number' className="form-control form-control-sm inputGroup-sizing-sm"
                    placeholder='' />
                </Col>
                <Col sm>
                  <h5 className="card-title">Wind bellow without ice</h5>
                  <input type='number' className="form-control form-control-sm inputGroup-sizing-sm"
                    placeholder='' />
                </Col>
                <Col sm>
                  <h5 className="card-title">Wind above without ice</h5>
                  <input type='number' className="form-control form-control-sm inputGroup-sizing-sm"
                    placeholder='' />
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseW}>
            Save
          </Button>
        </Modal.Footer>
        
      </Modal>
      
    </>
  );
}
export default Teste;
*/

import React, { Component } from 'react';
import ModalWrapper from '../Components/modalWrapper';

export default class Teste extends Component {

  render() {
    return (
      <div>
      	<ModalWrapper buttonText={"Click me I'm a button"} title={"Weight"} showModal={true}/>
        <ModalWrapper buttonText={"Click me I'm a button"} title={"Temperature"} showModal={true}/>
      </div>
    );
  }
}
  
