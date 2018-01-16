import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Footer from './Footer/Footer';
import Home from './Home/Home';
import Language from './Language/Language';
import UsersList from './Users/Users';
import Question from './Question/Question';
import Login from './Login/Login';
import Signup from './Signup/Signup';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App-header">
        <Link to="/" className="active">Surdi</Link>
        <Link to="/questions" className="active">Questions</Link>
        <Link to="/languages" className="active">Language</Link>
        <Link to="/users" className="active">Users</Link>
        <Link to="/login" className="active">Log In</Link>
        <Link to="/signup" className="active">Sign Up</Link>
      

        <Route exact path="/" component={Home} />
        <Route path="/questions" component={Question} />
        <Route path="/languages" component={Language} />
        <Route path="/users" component={UsersList} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      <Footer />
    </div>
    </Router>
    )
  }
}


export default App;
