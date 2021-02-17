import React from 'react';
import './word-submit.css';
import axios from 'axios';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {word: '', definition: '', example: '', additionalContext: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {   
        const target = event.target;
        const value = target.value;
        const name = target.name; 
        this.setState({
            [name]: value});  
    }

    handleSubmit(event) {
      alert(this.state);
      event.preventDefault();
      axios.post("http://localhost:4000/addword", this.state)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  
    render() {
      return (
        <form id="wordSubmit" onSubmit={this.handleSubmit}>        
        
            
            <input type="text" placeholder="the word" name="word" value={this.state.word} onChange={this.handleChange} />       
       
        
          
          <textarea name="definition" placeholder="its definition" value={this.state.definition} onChange={this.handleChange} />        
         
          
          
          <textarea name="example" placeholder="an example of its use" value={this.state.example} onChange={this.handleChange} />        
         
          
          
          <textarea name="additionalContext" placeholder="any additional context" value={this.state.additionalContext} onChange={this.handleChange} />        
         
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm;