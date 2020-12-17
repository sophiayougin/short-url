import React from 'react';
import {Button, Form, Col} from 'react-bootstrap';
import './App.css';
import axios from 'axios';
class App extends React.Component {  
  constructor(){
    super();
    this.state ={
      url: '',
      shortenedUrl: ''
    };
  }
  sendRequest =(url) => {
    axios.post('https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten',
     {url: url}
    )
    .then((response)=>{
      this.setState({
      shortenedUrl: response.data.result_url
    })})
    .catch(function (error){
      console.log(error);
    });
  }
  render(){
      return(
      <div>
        <Form.Row className='row-1'>
        <Form.Label>Paste a link to shorten it</Form.Label>
        </Form.Row>
        <Form.Row className='row-2'>
          <Col sm={5}>
            <Form.Control size='lg'type="text" placeholder="Original URL"  onChange={(e)=>{this.setState({url:e.target.value})}}/>  
          </Col>
          <Button variant="primary" type="submit" onClick={()=>this.sendRequest(this.state.url)}>
            Shorten
          </Button>
        </Form.Row>
        <Form.Row className='row-3'>
          {this.state.shortenedUrl}
        </Form.Row>
      </div>
      );
    }
   }  
   export default App;