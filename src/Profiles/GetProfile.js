import React, { Component } from 'react';
import axios from 'axios';
import Profile from './Profile';
//import QuestionAnswerForm from './QuestionAnswerForm';
// import Login from '../Login/Login';
// import { FirebaseAuth } from 'react-firebaseui';
// import firebase from "firebase";


// import Gif from '../Gif/gif';
import './Profile.css';

// var config = {
//     apiKey: "AIzaSyAhINOMHPGdc-Bnj5JzRUdFsbBrNJ9rp60",
//     authDomain: "surdiapp.firebaseapp.com",
//     databaseURL: "https://surdiapp.firebaseio.com",
//     projectId: "surdiapp",
//     storageBucket: "surdiapp.appspot.com",
//     messagingSenderId: "772398718929"
//   };
  //firebase.initializeApp(config);

class GetProfile extends Component {
   constructor() {
       super();
       this.state = {
           profile: [],
        //    signedIn: false
       };
    }

//        uiConfig = {
//         // Popup signin flow rather than redirect flow.
//         signInFlow: 'popup',
//         // We will display Google and Facebook as auth providers.
//         signInOptions: [
//           firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//           //firebase.auth.FacebookAuthProvider.PROVIDER_ID
//         ],
//         // Sets the `signedIn` state property to `true` once signed in.
//         callbacks: {
//           signInSuccess: () => {
//             this.setState({signedIn: true});
//             return false; // Avoid redirects after sign-in.
//           }
//         }
//    };

componentDidMount() {
    const { match: { params } } = this.props;

        // event.preventDefault();
        axios.get(`http://localhost:3001/profile/${params.id}`)
        
            .then((response) => {
                console.log(response);
                this.setState({profile: response.data})
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        }

   render() {
    //    if (!this.state.signedIn) {
    //       return (
    //         <div className="Signup">
    //           <h1>Surdi</h1>
    //           <p>Please sign-in:</p>
    //           <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
    //         </div>
    //       );
    //     }
    return (
        <div className="GetProfile">
        {/* <Login /> */}
            <h1>This Profile</h1>
                {this.state.profile.map((pro, index) => {
                return (
                    <Profile ProfileData={pro} key={index}/>
                )
            })}
            {/* <QuestionAnswerForm /> */}
            {/* <div>
                <QuestionAnswerForm />
            </div>    */}
        </div>
       );
   }
}

export default GetProfile;




