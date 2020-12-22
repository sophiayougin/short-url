import React from 'react';
import {Button, Form} from 'react-bootstrap';

class CopyButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='copy-button'>
                <Button variant="outline-success"
                        onClick={this.props.onClick}>
                        Copy
                </Button>
            </div>
        );
    }
}
export default CopyButton;



