import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// import Footer from './Footer/Footer';
import Home from './Home/Home';
import Languages from './Language/Languages';
import Users from './Users/Users';
import Questions from './Question/Questions';
import AskQuestion from './Question/AskQuestion';
// import Signup from './Signup/Signup';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div className="App-header">
        <Link to="/" className="active">Surdi</Link>
        <Link to="/questions" className="active">Questions</Link>
        <Link to="/languages" className="active">Language</Link>
        <Link to="/users" className="active">Users</Link>
        <Link to="/question" className="active">Ask</Link>
        {/* <Link to="/signup" className="active">Sign Up</Link> */}
      

        <Route exact path="/" component={Home} />
        <Route path="/questions" component={Questions} />
        <Route path="/languages" component={Languages} />
        <Route path="/users" component={Users} />
        <Route path="/question" component={AskQuestion} />
        {/* <Route path="/signup" component={Signup} /> */}
      </div>
    </Router>
        {/* <Footer /> */}
      
    </div>
    )
  }
}


export default App;
