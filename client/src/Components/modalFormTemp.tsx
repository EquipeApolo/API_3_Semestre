import React, { Component, ReactNode } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, Col, Row } from "react-bootstrap";

class ModalFormTemperature extends Component<any,any>{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Form className="mt-3">
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="t_reference">Temperature Reference (Kg)</FormLabel>
                    <FormControl className="input" placeholder="Temperature Reference" name="t_reference" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="t_aboveice">Temperature Above W/Ice (Kg)</FormLabel>
                    <FormControl className="input" placeholder="Temperature Above W/Ice" name="t_aboveice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="t_bellowice">Temperature Bellow W/Ice (Kg)</FormLabel>
                    <FormControl className="input" placeholder="Temperature Bellow W/Ice" name="t_bellowice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="t_abovewoutice">Temperature Above Wout/Ice (Kg)</FormLabel>
                    <FormControl className="input" placeholder="Temperature Above Wout/Ice" name="t_abovewoutice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="t_bellowwoutice">Temperature Bellow Wout/Ice (Kg)</FormLabel>
                    <FormControl className="input" placeholder="Temperature Bellow Wout/Ice" name="t_bellowwoutice" type="number"></FormControl>
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

export default ModalFormTemperature