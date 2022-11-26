import React, { CSSProperties } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function Home() {  
  return (
      <Container className='px-2 mb-5' style={{marginTop:200}}>
        <Row>
            <h1 className='text-center pb-5 mb-5'>
                Welcome!
            </h1>
        </Row>
      </Container>
  );
}
export default Home;