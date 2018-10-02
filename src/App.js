import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import fetch from 'isomorphic-fetch';


class App extends Component {
  login() {
    console.log('test');
    return fetch('http://api.symfony-3.dev/app_dev.php/posts', {
      method: 'POST',
      mode: 'CORS',
      body: JSON.stringify({data:'test'}),
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(res => {
      return res;
  }).catch(err => console.log(err));
    console.log('test1');
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1> </h1>
          <form className="form">
            <input className="person" type="text" placeholder="Username" />
            <input className="lock" type="password" placeholder="Password" />
            <button onClick={this.login} type="submit" id="login-button">Login</button>


          </form>
          <p className="forgotPass">forgot password?</p>

          <button className="signUp" type="submit" id="login-button">Sign Up</button>
        </div>
      </div>
    );
  }
}

export default App;
