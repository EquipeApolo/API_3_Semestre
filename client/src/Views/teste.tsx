import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col, Container } from 'react-bootstrap';

function Teste() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Set temperature parameters
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
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
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Teste;
