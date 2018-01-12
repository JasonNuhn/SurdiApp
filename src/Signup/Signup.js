import React, { Component } from 'react';
//import { addUser } from '../actions';
import './Signup.css';
import axios from 'axios';

//const knex = require('/db.js');
//const sqlite = require('sqlite3')

// const Signup = (props) => {
//     return (
//         <div className="Signup">
           
//         </div>
//     )
// }

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            displayName: '',
            city: '',
            state: '',
        };
        this.addUser = this.addUser.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateDisplayName = this.updateDisplayName.bind(this);
        this.updateCity = this.updateCity.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    addUser(event) {
        event.preventDefault();
        //const userToSave = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, displayName: this.state.displayName, city: this.state.city, state: this.state.state};
        axios.post('http://localhost:3001/Signup', { 
            // headers: {
            //     Access-Control-Allow-Origin: *
            // },
            body: {
                firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, displayName: this.state.displayName, city: this.state.city, state: this.state.state 
            }})
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log({'error': err})
            });
    }

    updateFirstName(event) {
        this.setState({
            firstName: event.target.value
        });
    }

    updateLastName(event) {
        this.setState({
            lastName: event.target.value
        });
    }

    updateEmail(event) {
        this.setState({
            email: event.target.value
        });
    }
    
    updateDisplayName(event) {
        this.setState({
            displayName: event.target.value
        });
    }

    updateCity(event) {
        this.setState({
            city: event.target.value
        });
    }

    updateState(event) {
        this.setState({
            state: event.target.value
        });
    }

    render() {
        return (
            <div className="SignUpForm">
                <form onSubmit={this.addUser}>
                    <input
                        onChange={this.updateFirstName}
                        placeholder="First Name"
                        value={this.state.firstName}
                    />
                    <input
                        onChange={this.updateLastName}
                        placeholder="Last Name"
                        value={this.state.lastName}
                    />
                    <input
                        onChange={this.updateEmail}
                        placeholder="Email"
                        value={this.state.email}
                    />
                    <input
                        onChange={this.updateDisplayName}
                        placeholder="Display Name"
                        value={this.state.displayName}
                    />
                    <input
                        onChange={this.updateCity}
                        placeholder="City"
                        value={this.state.city}
                    />
                    <input
                        onChange={this.updateState}
                        placeholder="State"
                        value={this.state.state}
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Signup;