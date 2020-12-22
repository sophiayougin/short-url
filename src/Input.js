import React from 'react';
import {Button, Form, Col} from 'react-bootstrap';

class Input extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='input'>
                <Form.Row className='row-2'>
                <Col sm={5}>
                    <Form.Control id='textbox'
                            size='lg'
                            type="text"
                            placeholder="Original URL"
                            onChange={(e)=>this.props.onGetUrl(e)}
                    />
                </Col>
                <Button variant="primary"
                        onClick={this.props.click}>
                        Shorten
                </Button>
                </Form.Row>
            </div>
        );
    }
}
export default Input;



