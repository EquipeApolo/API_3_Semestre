// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';

// export interface Props {
//   body: any;
//   buttonText: string;
//   showModal: boolean;
//   title: string;
// }

// type state = {
//   showModal: boolean
// }

// class ModalWrapper extends React.Component<any,state>{

//   constructor(props){
//     super(props);
//     this.setState({ showModal: false})
//   }

//   getInitialState() {
//     return { showModal: false };
//   }

//   close() {
//     this.setState({ showModal: false });
//   }

//   open() {
//     this.setState({ showModal: true });
//   }

//   render() {

//     return (
//       <div>
//         <Button
//           variant="primary"
//           onClick={this.open}
//         >
//           {this.props.buttonText}
//         </Button>

//         <Modal 
//         show={this.state.showModal} 
//         onHide={this.close}
//         backdrop="static"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>{this.props.title}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {this.props.body}
//           </Modal.Body>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default ModalWrapper;

import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ModalFormWeight from './modalFormWeight';
import ModalFormTemperature from './modalFormWeight';

var createReactClass = require('create-react-class');
let test;

const ModalWrapper = createReactClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
    if(this.props.title == "Weight"){
      test = <ModalFormWeight/>
    }else{
      test = <ModalFormTemperature/>
    }
  },

  teste() {
    if(this.props.title == "Weight") (<ModalFormWeight></ModalFormWeight>)
    return (<ModalFormTemperature></ModalFormTemperature>)
  },

  render() {

    return (
      <div>
      
        <Button className='btn-primary btn-primary-lg'
          onClick={this.open}
        >
          {this.props.buttonText}
        </Button>

        <Modal show={this.state.showModal} onHide={this.close} centered backdrop="static" keyboard={false} >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.title == "Weight" ? <ModalFormWeight></ModalFormWeight> : <ModalFormTemperature></ModalFormTemperature>}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
});

export default ModalWrapper;