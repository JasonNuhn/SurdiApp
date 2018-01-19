import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Profile from './Profile';
import './Profile.css';

class Profiles extends Component {
    constructor() {
        super();
        this.state = {
            profiles: []
        };
 
    }
 
 componentDidMount() {
     //const self = this;
         // event.preventDefault();
         axios.get('http://localhost:3001/profiles')
             // .then(function(response) {
             //     console.log(response);
             //     this.setState({ questions: response.data });
             // })
             // .catch(function(error) {
             //     console.log(error);
             // });
             
             .then((response) => {
                 //console.log(response);
                 this.setState({profiles: response.data})
             })
             .catch((error) => {
                 console.log(error);
             });
         }
 
    render() {
     return (
         <div className="Profile">
                 <h1>All the Profiles!</h1>
                 <Link to="/askquestion">
              <button type="button">
                    Ask Question
              </button>
            </Link>
                 {this.state.profiles.map((pro, index) => {
                 return (
                     <Profile ProfileData={pro} key={index}/>
                 )
             })}
             </div>
        );
    }
 }
 
 export default Profiles;