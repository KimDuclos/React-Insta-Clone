import React from 'react';
// import Login from '../Login/Login';
// import App from '../../App'

const Authenticate = App => 
// set state of login
Login =>
    class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          // sets initial state of login credentials to false prior to creds being entered or wrong creds entered
          logInState: false
        };
      }

      componentDidMount() {
        // check and set status of login state 
        if (localStorage.getItem('user')) {
          // state set to true if logged in creds work and login completes
          this.setState({ loggedIn: true });
        }
        else {
          // login state remains at false if user has not submitted credentials
          this.setState({ loggedIn: false });
        }
      }

      render() {
        if (this.state.loggedIn)
          // calls to App.js and Login components
          return <App/>;
        return <Login/>;
      }
    };

export default Authenticate;