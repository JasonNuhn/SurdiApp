import React, { Component } from 'react';
import './Signup.css';
import axios from 'axios';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';

// Configure Firebase.
var config = {
    apiKey: "AIzaSyAhINOMHPGdc-Bnj5JzRUdFsbBrNJ9rp60",
    authDomain: "surdiapp.firebaseapp.com",
    databaseURL: "https://surdiapp.firebaseio.com",
    projectId: "surdiapp",
    storageBucket: "surdiapp.appspot.com",
    messagingSenderId: "772398718929"
  };
  firebase.initializeApp(config);

  // Facebook
//   window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '{your-app-id}',
//       cookie     : true,
//       xfbml      : true,
//       version    : '{latest-api-version}'
//     });
      
//     FB.AppEvents.logPageView();   
      
//   };

class Signup extends Component {
    state = {
        signedIn: false // Local signed-in state.
      };
      
      // Configure FirebaseUI.
      uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          //firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        // Sets the `signedIn` state property to `true` once signed in.
        callbacks: {
          signInSuccess: () => {
            this.setState({signedIn: true});
            return false; // Avoid redirects after sign-in.
          }
        }
      };
      
      render() {
        if (!this.state.signedIn) {
          return (
            <div className="Signup">
              <h1>Surdi</h1>
              <p>Please sign-in:</p>
              <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
          );
        }
        return (
        <div className="Signup">
            <h1>Surdi</h1>
            <p>Welcome! You are now signed-in!</p>
          </div>
        );
      }

//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             displayName: '',
//             password: '',
//         };
//         this.addUser = this.addUser.bind(this);
//         this.updateEmail = this.updateEmail.bind(this);
//         this.updateDisplayName = this.updateDisplayName.bind(this);
//         this.updatePassword = this.updatePassword.bind(this);
//     }

//     addUser(event) {
//         event.preventDefault();
//         axios.post('http://localhost:3001/signup', { 
//             body: {
//                 email: this.state.email, displayName: this.state.displayName, password: this.state.password 
//             }})
//             .then((response) => {
//                 console.log(response);
//             })
//             .catch((err) => {
//                 console.log({'error': err})
//             });
//     }

//     updateEmail(event) {
//         this.setState({
//             email: event.target.value
//         });
//     }
    
//     updateDisplayName(event) {
//         this.setState({
//             displayName: event.target.value
//         });
//     }

//     updatePassword(event) {
//         this.setState({
//             password: event.target.value
//         });
//     }

//     render() {
//         return (
//             <div className="SignUpForm">
//                 <form onSubmit={this.addUser}>
//                     <input
//                         onChange={this.updateEmail}
//                         placeholder="Email"
//                         value={this.state.email}
//                     />
//                     <input
//                         onChange={this.updateDisplayName}
//                         placeholder="Display Name"
//                         value={this.state.displayName}
//                     />
//                     <input
//                         onChange={this.updatePassword}
//                         placeholder="Password"
//                         value={this.state.password}
//                     />
//                     <button type="submit">Sign Up</button>
//                 </form>
//             </div>
//         );
//     }



}

export default Signup;