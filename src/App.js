import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import fetch from 'isomorphic-fetch';


class App extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: "",
      password: '',
      loginStatus: null
    };
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  login() {
    console.log(this.state.username);
    console.log(this.state.password);
    const that = this;

    fetch("https://panelt.mediaad.org/api/v2.0/advertiser/login", {
      method: 'post',
      body: JSON.stringify({action: "POST", 
      data: {user_name: this.state.username, password: this.state.password}})
    }).then(function(response) {
      if(response.code === 200){
        that.setState({loginStatus : <p>شما با موفقیت لاگین شدید:)</p>});
      } else {
        that.setState({loginStatus: <p>اطلاعات وارد شده اشتباه میباشد :(</p>});

      }
      return ;
    }).then(function(data) {
      that.setState({loginStatus: <p>خطا در برقراری ارتباط با سرور :(</p>});
      return ;
    });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <img src={'/hand.png'} alt="Welcome"/>
          <form className="form">
            <input className="person" type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
            <input className="lock" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
            <button onClick={this.login} type="button" id="login-button">Login</button>

          </form>
         {this.state.loginStatus}
        
          <p className="forgotPass">forgot password?</p>

          <button className="signUp" type="submit" id="login-button">Sign Up</button>
        </div>
      </div>
    );
  }
}

export default App;
