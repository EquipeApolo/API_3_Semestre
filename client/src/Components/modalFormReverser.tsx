import React, { Component, ReactNode } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, Col, Row } from "react-bootstrap";

class ModalFormReverser extends Component<any,any>{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Form className="mt-3">
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="rev_w/ice">Reverser W/Ice</FormLabel>
                    <FormControl className="input" placeholder="Reverser W/Ice" name="rev_w/ice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="rev_wout/ice">Reverser Wout/Ice</FormLabel>
                    <FormControl className="input" placeholder=" Reverser Wout/Ice" name="rev_wout/ice" type="number"></FormControl>
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

export default ModalFormReverser