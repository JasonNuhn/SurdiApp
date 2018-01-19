import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Question from './Question';
import './Question.css';

class Questions extends Component {
   constructor() {
       super();
       this.state = {
           questions: [],
           id: ''
       };

   }

   handleUserId(userId) {
    const question = this.state.question;
    question.forEach((quest, i) => {
        if (quest.id === userId) {
            question.splice(i, 1);
        }
    });
    this.setState({ question });
}

componentDidMount() {
    //const self = this;
        // event.preventDefault();
        axios.get('http://localhost:3001/questions')
            // .then(function(response) {
            //     console.log(response);
            //     this.setState({ questions: response.data });
            // })
            // .catch(function(error) {
            //     console.log(error);
            // });
            
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
                    <div>
                    <Question QuesData={quest} key={index}/>
                    <Link to="/question">
                        <button type="button">
                            Review
                        </button>
                    </Link>
                    </div>
                )
            })}
            </div>
       );
   }
}

export default Questions;