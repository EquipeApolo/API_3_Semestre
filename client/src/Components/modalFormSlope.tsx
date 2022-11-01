import React, { Component, ReactNode } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, Col, Row } from "react-bootstrap";

class ModalFormSlope extends Component<any,any>{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Form className="mt-3">
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="s_reference">Slope Reference</FormLabel>
                    <FormControl className="input" placeholder="Slope Reference" name="s_reference" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="s_uphill_w/ice">Slope Uphill W/Ice</FormLabel>
                    <FormControl className="input" placeholder="Slope Uphill W/Ice" name="s_uphill_w/ice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="s_downhill_w/ice">Slope Downhill W/Ice</FormLabel>
                    <FormControl className="input" placeholder="Slope Downhill W/Ice" name="s_downhill_w/ice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="s_uphill_wout/ice">Slope Uphill Wout/Ice</FormLabel>
                    <FormControl className="input" placeholder="Slope Uphill Wout/Ice" name="s_uphill_wout/ice" type="number"></FormControl>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel htmlFor="s_downhill_wout/ice">Slope Downhill Wout/Ice</FormLabel>
                    <FormControl className="input" placeholder="Slope Downhill Wout/Ice" name="s_downhill_wout/ice" type="number"></FormControl>
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

export default ModalFormSlope