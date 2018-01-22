import React, { Component } from 'react';
import './Login.css';
import firebase, { auth, provider } from './firebase.js';
//mport  from './user/Home';


class LoginFix extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      signUpEmail: '',
      signUpPassword: '',
    }
    this.loginGoogle = this.loginGoogle.bind(this);
    this.loginEmail = this.loginEmail.bind(this);
    this.handleChangeSignUpPassword = this.handleChangeSignUpPassword.bind(this);
    this.handleChangeSignUpEmail = this.handleChangeSignUpEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }
  handleChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value
    })
  }
  handleChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    auth.createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword)
      .catch((error) => {
        console.log(error.code);
      })
  }
  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }
  loginGoogle() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }
  loginEmail(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .catch((e) => {
        alert('Error');
      })
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }
  render() {
    return (
      <div className='App'>
        {this.state.user
          ?
            <div className="loggedIn">
              <Home userData={this.state.user}/>
              <br/>
              <button onClick={this.logout}>Log Out</button>
            </div>
          :
            <div className="splash">
              <h1 className="title">LevelUp</h1>
              <button onClick={this.loginGoogle}>Log In with Google</button>
              <br/>
              <button>Log In with E-mail</button>
              <br/>
              <form onSubmit={this.handleSubmit}>
                <label>
                  E-mail address
                </label>
                <br/>
                <input value={this.state.signUpEmail} onChange={this.handleChangeSignUpEmail}/>
                <br/>
                <label>
                  Password
                </label>
                <br/>
                <input value={this.state.signUpPassword} onChange={this.handleChangeSignUpPassword}/>
                <br/>
                <input value='Sign Up' type='submit'/>
              </form>
            </div>
        }
      </div>
    );
  }
}

export default LoginFix;