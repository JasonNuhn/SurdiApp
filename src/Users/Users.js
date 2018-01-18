import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import User from './User';
import './User.css';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
 
    }
 
 componentDidMount() {
     //const self = this;
         // event.preventDefault();
         axios.get('http://localhost:3001/users')
             // .then(function(response) {
             //     console.log(response);
             //     this.setState({ questions: response.data });
             // })
             // .catch(function(error) {
             //     console.log(error);
             // });
             
             .then((response) => {
                 //console.log(response);
                 this.setState({users: response.data})
             })
             .catch((error) => {
                 console.log(error);
             });
         }
 
    render() {
     return (
         <div className="User">
                 <h1>All the Users!</h1>
                 <Link to="/question">
              <button type="button">
                    Ask Question
              </button>
            </Link>
                 {this.state.users.map((use, index) => {
                 return (
                     <User UserData={use} key={index}/>
                 )
             })}
             </div>
        );
    }
 }
 
 export default Users;