import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
// import firebase, { auth, provider } from 'firebase';

// import Footer from './Footer/Footer';
import Home from './Home/Home';
import Languages from './Language/Languages';
import Profiles from './Profiles/Profiles';
import Questions from './Question/Questions';
import AskQuestion from './Question/AskQuestion';
import GetQuestion from './Question/GetQuestion';
import GetProfile from './Profiles/GetProfile';
//import LoginFix from './Login/LoginFix';
// import Signup from './Signup/Signup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      // signUpEmail: '',
      // signUpPassword: ''
    }
    // this.loginGoogle = this.loginGoogle.bind(this);
    // this.loginEmail = this.loginEmail.bind(this);
    // this.handleChangeSignUpPassword = this.handleChangeSignUpPassword.bind(this);
    // this.handleChangeSignUpEmail = this.handleChangeSignUpEmail.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.logout = this.logout.bind(this);
    //this.login = this.login.bind(this);
  }
  // componentDidMount() {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ user });
  //     }
  //   });
  // }
  // handleChangeSignUpEmail(event) {
  //   this.setState({
  //     signUpEmail: event.target.value
  //   })
  // }
  // handleChangeSignUpPassword(event) {
  //   this.setState({
  //     signUpPassword: event.target.value
  //   })
  // }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log('handleSubmit');
  //   auth.createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword)
  //     .catch((error) => {
  //       console.log(error.code);
  //     })
  // }
  // logout() {
  //   auth.signOut()
  //     .then(() => {
  //       this.setState({
  //         user: null
  //       });
  //     });
  // }
  // loginGoogle() {
  //   auth.signInWithPopup(provider)
  //     .then((result) => {
  //       const user = result.user;
  //       this.setState({
  //         user
  //       });
  //     });
  // }
  // loginEmail(email, password) {
  //   auth.signInWithEmailAndPassword(email, password)
  //     .catch((e) => {
  //       alert('Error');
  //     })
  //     .then((result) => {
  //       const user = result.user;
  //       this.setState({
  //         user
  //       });
  //     });
  // }
  render() {
    return (
      <div>
        {/* <header>
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
              </form> */}
      <Router>
      <div className="App-header">
        <Link to="/" className="active">Surdi</Link>
        <Link to="/questions" className="active">Questions</Link>
        <Link to="/languages" className="active">Language</Link>
        <Link to="/profiles" className="active">User</Link>
        {/* <Link to="/profile" className="active">Profile</Link> */}
        {/* <Link to="/askquestion" className="active">Ask</Link> */}
        {/* <Link to="/question" className="active">Get</Link> */}
        {/* <Link to="/signup" className="active">Sign Up</Link> */}
      

        <Route exact path="/" component={Home} />
        <Route path="/questions" component={Questions} />
        <Route path="/languages" component={Languages} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/askquestion" component={AskQuestion} />
        <Route path="/question/:id" component={GetQuestion} />
        <Route path="/profile/:id" component={GetProfile} />
        {/* <Route path="/signup" component={Signup} /> */}
      </div>
    </Router>

        {/* <Footer /> */}
      
    </div>
    )
  }
}


export default App;
