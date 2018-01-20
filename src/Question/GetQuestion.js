import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';
import './Question.css';

//-----------------------------------//
class GetQuestion extends Component {
   constructor() {
       super();
       this.state = {
           question: []
       };

   }
componentDidMount() {
    //const id = 2;
    const { match: { params } } = this.props;
    //const questionId = document.getElementById('questionId').value;
        // event.preventDefault();
        axios.get(`http://localhost:3001/question/${params.id}`)
        
            // .then(function(response) {
            //     console.log(response);
            //     this.setState({ questions: response.data });
            // })
            // .catch(function(error) {
            //     console.log(error);
            // });
            // --------------------
            // .then(response => this.setState(() => ({ curious: response.data})))
            // .catch(error => {
            //     console.error(error);
            // });
            // -----------------------
            .then((response) => {
                console.log(response);
                this.setState({question: response.data})
            })
            .catch((error) => {
                console.log(error);
            });
        }

   render() {
   //const { question, context, language } = this.state.curious
    return (
        <div className="Question">
                {/* <h1>All Questions</h1> */}
                {/* <h2>{question}</h2>
                <div>{context}</div>
                <div>{language}</div> */}
                {this.state.question.map((quest, index) => {
                return (
                    <Question QuesData={quest} key={index}/>
                )
            })}
            </div>
       );
   }
}

export default GetQuestion;
//------------------------------//

