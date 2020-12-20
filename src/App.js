import React from 'react';
import {Button, Form, Col} from 'react-bootstrap';
import './App.css';
import axios from 'axios';
class App extends React.Component {  
  constructor(props){
    super(props);
    this.state ={
      url: '',
      shortenedUrl: '',
      isCopied: false
    };
  }
  getUrl = (e) =>{
    console.log(e.target.value);
    this.setState({
      url:e.target.value
    });
  }
  sendRequest =() =>{
    axios.post('https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten',
     {url: this.state.url})
     .then((response) => {
      this.setState({
      shortenedUrl: response.data.result_url
    })})
    .catch((error) =>{
      this.setState({
        shortenedUrl: "Invalid URL"
      });
    });
  }
 copy = ()=>{
   //select();
   document.execCommand('copy');
   this.setState({
     isCopied: true
   })
 }
  render(){
   console.log(this.state.isCopied);
    function Heading(){
      return  <Form.Label>Paste a link to shorten it</Form.Label>;
    }
    function ShortenButton(props){
      return <Button variant="primary"
                     onClick={props.click}>
                     Shorten
              </Button>;
    }
    function Result(props){
      return <Form.Label style={props.style}>{props.shortUrl}</Form.Label>;
    }
    function CopyButton(props){
      return <Button variant="outline-success" onClick={props.onClick}>Copy</Button>;
    }
    var resultStyle = {
    };
    this.state.shortenedUrl==='Invalid URL'? resultStyle.color = 'red': resultStyle.color = 'black';
      return(
      <div className='container'>
        <Form.Row className='row-1'>
          <Heading/>
        </Form.Row>
        <Form.Row className='row-2'>
          <Col sm={5}>
            <Form.Control 
                          size='lg'
                          type="text"
                          placeholder="Original URL"
                          onChange={(e)=>this.getUrl(e)}
            />
          </Col>
          <ShortenButton click={this.sendRequest}/>
        </Form.Row>
        <Form.Row className='row-3'>
          <Result shortUrl={this.state.shortenedUrl} style={resultStyle}/><br/>
          {this.state.shortenedUrl!=='Invalid URL'?this.state.shortenedUrl===''?<div/>:<CopyButton onClick={this.copy}/>:<div/>}
        </Form.Row>
      </div>
    );
  }
}  
export default App;