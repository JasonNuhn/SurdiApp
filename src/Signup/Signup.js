import React, { Component } from 'react';
import './Signup.css';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            displayName: '',
            password: '',
        };
        this.addUser = this.addUser.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateDisplayName = this.updateDisplayName.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    addUser(event) {
        event.preventDefault();
        axios.post('http://localhost:3001/signup', { 
            body: {
                email: this.state.email, displayName: this.state.displayName, password: this.state.password 
            }})
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log({'error': err})
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

    updatePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div className="SignUpForm">
                <form onSubmit={this.addUser}>
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
                        onChange={this.updatePassword}
                        placeholder="Password"
                        value={this.state.password}
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Signup;