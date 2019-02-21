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
    localStorage.setItem('user', userN);
  };

  render() {
    return (
      <Form className="form">
        <Input type="text" name="userName" placeholder="userName" value={this.state.userName} onChange={this.newInput}/>
        <Input type="password"  name="password" placeholder="Password" value={this.state.password} onChange={this.newInput}/>
        <Button onClick={this.submitCreds}>Log In</Button>
      </Form>
    );
  }
}

export default Login;