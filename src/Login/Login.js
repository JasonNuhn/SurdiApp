import React, { Component } from 'react';
import './Login.css';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';
//import GetQuestion from '../Question/GetQuestion';

var config = {
    apiKey: "AIzaSyAhINOMHPGdc-Bnj5JzRUdFsbBrNJ9rp60",
    authDomain: "surdiapp.firebaseapp.com",
    databaseURL: "https://surdiapp.firebaseio.com",
    projectId: "surdiapp",
    storageBucket: "surdiapp.appspot.com",
    messagingSenderId: "772398718929"
  };
  firebase.initializeApp(config);

class Login extends Component {
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
              <div className="Login">
                <h1>Surdi</h1>
                <p>Please sign-in:</p>
                <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
              </div>
            );
          }

        }
    }
    
export default Login;