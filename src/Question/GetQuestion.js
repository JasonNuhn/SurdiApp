import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';
// import Gif from '../Gif/gif';
import './Question.css';

class GetQuestion extends Component {
   constructor() {
       super();
       this.state = {
           question: [],
           answer: '',
           id: '',
           userId: ''
       };
       this.getAnswer = this.getAnswer.bind(this);
        // this.updateUserId = this.updateUserId.bind(this);
        // this.updateQuestionId = this.updateQuestionId.bind(this);
        this.updateAnswer = this.updateAnswer.bind(this);
   }
   

   getAnswer(event) {
    //const { match: { params } } = this.props;
    //const userId = params.userId;
    //const questionId = params.id;

    event.preventDefault();
    var id = this.state.id;
    var userId = this.state.userId;
    console.log(Object.keys(event.target));
    axios.post('http://localhost:3001/answer', { 
        body: {
            userId: userId, questionId: id, answer: this.state.answer 
        }})
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log({'error': err})
        });

}

    // updateUserId(event) {
    //     this.setState({
    //         userId: event.target.userId
    //     });
    // }

    // updateQuestionId(event) {
    //     this.setState({
    //         questionId: event.target.id
    //     });
    // }

    updateAnswer(event) {
        this.setState({
            answer: event.target.value
        });
    }

componentDidMount() {
    const { match: { params } } = this.props;

        // event.preventDefault();
        axios.get(`http://localhost:3001/question/${params.id}`)
        
            .then((response) => {
                console.log(response);
                this.setState({question: response.data})
            })
            .catch((error) => {
                console.log(error);
            });
        }

   render() {
    return (
        <div className="Question">
                {this.state.question.map((quest, index) => {
                return (
                    <Question QuesData={quest} key={index}/>
                )
            })}
            
            <form onSubmit={this.getAnswer}>
                    
                    {/* <input
                        onChange={this.updateUserId}
                        placeholder="User"
                        value={this.state.userId}
                    />
                     <input
                        onChange={this.updateQuestionId}
                        placeholder="Question"
                        value={this.state.questionId}
                    /> */}
                    <textarea
                        onChange={this.updateAnswer}
                        placeholder="Answer"
                        value={this.state.answer}
                    />
                    {/* <Gif /> */}
                    <button type="submit">Submit Answer</button>
                </form>    
        </div>
       );
   }
}

export default GetQuestion;




