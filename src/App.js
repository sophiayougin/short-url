import React from 'react';
import {Form} from 'react-bootstrap';
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
      error: '',
      isCopied: false,
      isLoading: false
    };
  }
  getUrl = (e) =>{
    console.log(e.target.value);
    this.setState({
      url:e.target.value
    });
  }
  sendRequest =() =>{
    this.setState({
      isLoading: true
    });
    axios.post('https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten',
     {url: this.state.url})
     .then((response) => {
      this.setState({
      shortenedUrl: response.data.result_url,
      error: '',
      isLoading: false
    })})
    .catch((error) =>{  
      this.setState({
        error: 'Invalid URL',
        shortenedUrl: '',
        isLoading: true
      });
    });
  }
 copy = () =>{
   console.log("Copied");
   const {shortenedUrl} = this.state;
   if(shortenedUrl !== '' && shortenedUrl !== 'Invalid URL'){
    copy(this.state.shortenedUrl);
    this.setState({
      isCopied: true
    });
   } 
 }
  render(){
    let resultStyle = {
    };
    this.state.error === 'Invalid URL'
      ?resultStyle.color = 'red'
      :resultStyle.color = 'black';
      return(
        <div className='container'>
          <Form.Row className='row-1'>
            <Form.Label>Paste a link to shorten it</Form.Label>
          </Form.Row>
            <Input 
              onClick={this.sendRequest} 
              onGetUrl={(e) => this.getUrl(e)}
              isLoading={this.state.isLoading}
            />
          <Form.Row className='row-3'>
            <Output 
              error={this.state.error}
              shortUrl={this.state.shortenedUrl} 
              style={resultStyle}
            />
            {this.state.error !== 'Invalid URL'
              ?this.state.shortenedUrl === ''
                ?<div/>
                :<CopyButton onClick={this.copy}/>
              :<div/>}
          </Form.Row>
        </div>
    );
  }
}  
export default App;