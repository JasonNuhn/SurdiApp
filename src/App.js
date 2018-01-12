import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// import Footer from './Footer/Footer';
import Home from './Home/Home';
// import QuestionHome from './QuestionHome';
// import Language from './Language/Language';
// import UsersList from './Users/Users';
// import SearchBar from './Search/Search';
// import Login from './Login/Login';
import Signup from './Signup/Signup';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-header">
            <ul>
              <Link to="/" className="active">Home</Link>
              {/* <Link to="/Question" className="active">Question</Link> */}
              {/* <Link to="/Language" className="active">Language</Link>
              <Link to="/Userslist" className="active">Users</Link>
              <Link to="/SearchBar" className="active">Search</Link>
              <Link to="/Login" className="active">Log In</Link> */}
              <Link to="/Signup" className="active">Sign Up</Link>
            </ul>
            
            
            
            <Route exact path="/" component={Home} />
            {/* <Route path="/Question" component={QuestionHome} /> */}
            {/* <Route path="/Language" component={Language} />
            <Route path="/Userslist" component={UsersList} />
            <Route path="/SearchBar" component={SearchBar} />
            <Route path="/Login" component={Login} /> */}
            <Route path="/Signup" component={Signup} />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
