import React, { Component } from 'react';
import './Login.css';
import firebase, { auth, provider } from '../firebase';
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
    this.login = this.login.bind(this);
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
      <div>
        <header>
          <div>
          {this.state.user ? 
            <button onClick={this.logout}>Logout</button>
          :
            <button onClick={this.login}>Log In</button>
            }
          </div>
        </header>


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
    )
}
}

export default LoginFix;