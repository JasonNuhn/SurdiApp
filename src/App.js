import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// import Footer from './Footer/Footer';
import Home from './Home/Home';
import Languages from './Language/Languages';
import Profiles from './Profiles/Profiles';
import Questions from './Question/Questions';
import AskQuestion from './Question/AskQuestion';
import GetQuestion from './Question/GetQuestion';
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
        <Link to="/profiles" className="active">User</Link>
        <Link to="/askquestion" className="active">Ask</Link>
        <Link to="/question" className="active">Get</Link>
        {/* <Link to="/signup" className="active">Sign Up</Link> */}
      

        <Route exact path="/" component={Home} />
        <Route path="/questions" component={Questions} />
        <Route path="/languages" component={Languages} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/askquestion" component={AskQuestion} />
        <Route path="/question" component={GetQuestion} />
        {/* <Route path="/signup" component={Signup} /> */}
      </div>
    </Router>
        {/* <Footer /> */}
      
    </div>
    )
  }
}


export default App;
