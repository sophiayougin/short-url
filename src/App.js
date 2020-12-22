import React from 'react';
import {Button, Form, Col} from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import copy from 'copy-to-clipboard';
import Input from './Input';
import Output from './Output';
import CopyButton from './CopyButton';
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
 copy = () =>{
   const {shortenedUrl} = this.state;
   if(shortenedUrl !== '' && shortenedUrl !== 'Invalid URL'){
    copy(this.state.shortenedUrl);
    alert("Copied to clipboard");
    this.setState({
      isCopied: true
    });
   } 
 }
  render(){
    function Heading(){
      return  <Form.Label>Paste a link to shorten it</Form.Label>;
    }
    var resultStyle = {
    };
    this.state.shortenedUrl==='Invalid URL'
      ?resultStyle.color = 'red'
      : resultStyle.color = 'black';
      return(
        <div className='container'>
          <Form.Row className='row-1'>
            <Heading/>
          </Form.Row>
            <Input click={this.sendRequest} 
                   onGetUrl={(e)=>this.getUrl(e)}
            />
          <Form.Row className='row-3'>
            <Output shortUrl={this.state.shortenedUrl} 
                    style={resultStyle}
            />
            {this.state.shortenedUrl!=='Invalid URL'
              ?this.state.shortenedUrl===''
                ?<div/>
                :<CopyButton onClick={this.copy}/>
              :<div/>}
          </Form.Row>
        </div>
    );
  }
}  
export default App;