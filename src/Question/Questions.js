import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import Question from './Question';
import './Question.css';

class Questions extends Component {
   constructor() {
       super();
       this.state = {
           questions: [],
       };
   }

componentDidMount() {

        // event.preventDefault();
        axios.get('http://localhost:3001/questions')
    
            .then((response) => {
                console.log(response);
                this.setState({questions: response.data})
            })
            .catch((error) => {
                console.log(error);
            });
        }

   render() {
    return (
        <div className="Question">
                <h1>All Questions</h1>
                {this.state.questions.map((quest, index) => {
                return (
                    <div key={index}>
                        <Question QuesData={quest} key={index}
                        />
                    </div>
                )
            })}
            </div>
       );
   }
}

export default Questions;