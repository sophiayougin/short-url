import React from 'react';
import {Button, Form} from 'react-bootstrap';

class Output extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='output'>
                <Form.Label style={this.props.style}>{this.props.shortUrl}</Form.Label>
            </div>
        );
    }
}
export default Output;



