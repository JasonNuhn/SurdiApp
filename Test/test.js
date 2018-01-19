import React, { Component } from 'react';
import './test.css';
import axios from 'axios';

class Answer extends Component {
        constructor(props) {
        super(props);
        this.state = {
            userId: '',
            questionId: '',
            answer: '',
        };
        this.addAnswer = this.addAnswer.bind(this);
        this.updateUserId = this.updateUserId.bind(this);
        this.updateQuestionId = this.updateQuestionId.bind(this);
        this.updateAnswer = this.updateAnswer.bind(this);
    }

    addAnswer(event) {
        event.preventDefault();
        axios.post('http://localhost:3001/answer', { 
            body: {
                userId: this.state.userId, questionId: this.state.questionId, answer: this.state.answer
            }})
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log({'error': err})
            });
    }

    updateUserId(event) {
        this.setState({
            userId: event.target.value
        });
    }

    updateQuestionId(event) {
        this.setState({
            questionId: event.target.value
        });
    }
    
    updateAnswer(event) {
        this.setState({
            answer: event.target.value
        });
    }

    render() {
        return (
            <div className="AnswerForm">
                <h2>Your Answer</h2>
                <h4>Stay on-topic</h4>
                <form onSubmit={this.addAnswer}>
                    <input
                        onChange={this.updateUserId}
                        placeholder="User"
                        value={this.state.userId}
                    />
                    <h4>Title:<input
                        onChange={this.updateQuestionId}
                        placeholder="What is your question? Be specific"
                        value={this.state.questionId}
                    /></h4>
                    <h4>Language:
                    <input
                        onChange={this.updateAnswer}
                        placeholder="Answer"
                        value={this.state.Answer}
                    /></h4>
                    <br></br>
                    <button type="submit">Submit Answer</button>
                </form>
            </div>
        );
    }
}

export default Answer;