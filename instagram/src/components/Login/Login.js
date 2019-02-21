import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  newInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user-name', user-name);
  };

  render() {
    return (
      // login form for username and password
      <Form className="form">
         {/* calls credential input component for username and sets value to user input */}
        <Input type="text" className="userName" placeholder="Userame" value={this.state.userName} onChange={this.newInput}/>
         {/* calls credential input component for password and sets value to user input */}
        <Input type="text"  className="password" placeholder="Password" value={this.state.password} onChange={this.newInput}/>
        <Button onClick={this.submitCreds}>Log In</Button>
      </Form>
    );
  }
}

export default Login;