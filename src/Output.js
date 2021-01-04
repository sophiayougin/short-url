import React from 'react';
import {Form} from 'react-bootstrap';

class Output extends React.Component{
    render(){
        return(
            <div className='output'>
                <Form.Label 
                    style={this.props.style}>
                    {this.props.shortUrl}
                </Form.Label>
            </div>
        );
    }
}
export default Output;



