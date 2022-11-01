import React, { Component, ReactNode } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, Col, Row } from "react-bootstrap";

class ModalFormWind extends Component<any,any>{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Form className="mt-3">
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="wd_reference">Wind Reference (Km/h)</FormLabel>
                    <FormControl className="input" placeholder="Wind Reference" name="wd_reference" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="wd_head_w/ice">Wind Head W/Ice (Km/h)</FormLabel>
                    <FormControl className="input" placeholder="Wind Head W/Ice" name="wd_head_w/ice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="wd_tail_w/ice">Wind Tail W/Ice (Km/h)</FormLabel>
                    <FormControl className="input" placeholder="Wind Tail W/Ice" name="wd_tail_w/ice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="wd_head_wout/ice">Wind Head Wout/Ice (Km/h)</FormLabel>
                    <FormControl className="input" placeholder="Wind Head Wout/Ice" name="wd_head_wout/ice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="wd_tail_wout/ice">Wind Tail Wout/Ice (Km/h)</FormLabel>
                    <FormControl className="input" placeholder="Wind Tail Wout/Ice" name="wd_tail_wout/ice" type="number"></FormControl>
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

export default ModalFormWind