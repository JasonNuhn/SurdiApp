import React, { Component } from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';
// import Slide from '../node_modules';

import './Home.css';

var config = {
    apiKey: "AIzaSyAhINOMHPGdc-Bnj5JzRUdFsbBrNJ9rp60",
    authDomain: "surdiapp.firebaseapp.com",
    databaseURL: "https://surdiapp.firebaseio.com",
    projectId: "surdiapp",
    storageBucket: "surdiapp.appspot.com",
    messagingSenderId: "772398718929"
  };
  firebase.initializeApp(config);

// import data from './data.json';

class Home extends Component {
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
            <div className="Home">
        <h1>To Unite and To Converse</h1>
            <p>Connect with the World</p>
            <p>One Sign at a time</p>
         </div>
        );
      }
    }


// const Home = (props) => {
//     return (
//         <div className="Home">
//         <h1>
//           To Unite and To Converse
//         </h1>
//             <p>Connect with the World</p>
//             <p>One Sign at a time</p>
//         </div>
//     )
// }

// class Home extends Component {
//     renderSlides() {
//         return data.map((state)=>{
//             return 
//                 <Slide
//                     video={state.video}
//                     signWord={state.signWord}
//                     subtitle={state.subtitle}
//                 />
//         })
//     }
//     render() {
//         return (
//             <div className="Home">
//                 <button className="Home-nav carousel-left-nav"></button>
//                     <div className="Home-viewport">
//                         {this.renderSlides()}
//                     </div>
//                 <button className="Home-nav carousel-right-nav"></button>
//             </div>
//         );
//     }
// }

export default Home;