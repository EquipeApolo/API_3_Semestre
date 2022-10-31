import React, { Component, ReactNode } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, Col, Row } from "react-bootstrap";

class ModalFormWeight extends Component<any, any>{

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Form className="mt-3">
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="w_reference">Weight Reference (Kg)</FormLabel>
                    <FormControl className="input" placeholder="Weight Reference" name="w_reference" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="w_aboveice">Weight Above W/Ice (Kg)</FormLabel>
                    <FormControl className="input" placeholder="Weight Above W/Ice" name="w_aboveice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="w_bellowice">Weight Bellow W/Ice (Kg)</FormLabel>
                    <FormControl className="input" placeholder="Weight Bellow W/Ice" name="w_bellowice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="w_abovewoutice">Weight Above Wout/Ice (Kg)</FormLabel>
                    <FormControl className="input" placeholder="Weight Above Wout/Ice" name="w_abovewoutice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="w_bellowwoutice">Weight Bellow Wout/Ice (Kg)</FormLabel>
                    <FormControl className="input" placeholder="Weight Bellow Wout/Ice" name="w_bellowwoutice" type="number"></FormControl>
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

export default ModalFormWeight