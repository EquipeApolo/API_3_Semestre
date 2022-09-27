import { Component } from "react";

type props = {
    Thales: String
}
class Teste extends Component<props>{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>TESTEEEE</h1>
            </div>
        );
    }
}

export default Teste;