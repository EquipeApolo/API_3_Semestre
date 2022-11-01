import React, { Component, ReactNode } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, Col, Row } from "react-bootstrap";

class ModalFormAltitude extends Component<any,any>{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Form className="mt-3">
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="a_reference">Altitude Reference (metros)</FormLabel>
                    <FormControl className="input" placeholder="Altitude Reference" name="a_reference" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="a_aboveice">Altitude  W/Ice (metros)</FormLabel>
                    <FormControl className="input" placeholder="Altitude Above W/Ice" name="a_aboveice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="a_bellowwoutice">Altitude Wout/Ice (metros)</FormLabel>
                    <FormControl className="input" placeholder="Altitude Bellow Wout/Ice" name="a_bellowwoutice" type="number"></FormControl>
                </FormGroup>

                <Row>
                    <FormGroup as={Col} className="mt-3 text-center">
                        <Button className="btn-lg" type="submit">Confirm</Button>
                    </FormGroup>

                    <FormGroup as={Col} className="mt-3 text-center">
                        <Button className="btn-lg btn-danger" type="submit">Cancel</Button>
                    </FormGroup>
                </Row>
            </Form>
        )
    }
}

export default ModalFormAltitude