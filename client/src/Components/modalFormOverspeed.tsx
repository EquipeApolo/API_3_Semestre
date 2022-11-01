import React, { Component, ReactNode } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, Col, Row } from "react-bootstrap";

class ModalFormOverspeed extends Component<any,any>{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Form className="mt-3">
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="overs_reference">Overspeed Reference (km/h)</FormLabel>
                    <FormControl className="input" placeholder="Overspeed Reference" name="overs_reference" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="overs_w/ice">Overspeed W/Ice (km/h)</FormLabel>
                    <FormControl className="input" placeholder="Overspeed W/Ice" name="overs_w/ice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="overs_wout/ice">Overspeed Wout/Ice (km/h)</FormLabel>
                    <FormControl className="input" placeholder="Overspeed Wout/Ice" name="overs_wout/ice" type="number"></FormControl>
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

export default ModalFormOverspeed