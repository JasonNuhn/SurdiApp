import React, { Component } from 'react';
import './Question.css';
import axios from 'axios';

class AskQuestion extends Component {
        constructor(props) {
        super(props);
        this.state = {
            userId: '',
            question: '',
            language: '',
            context: '',
        };
        this.addQuestion = this.addQuestion.bind(this);
        this.updateUserId = this.updateUserId.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
        this.updateLanguage = this.updateLanguage.bind(this);
        this.updateContext = this.updateContext.bind(this);
    }

    addQuestion(event) {
        event.preventDefault();
        axios.post('http://localhost:3001/question', { 
            body: {
                userId: this.state.userId, question: this.state.question, language: this.state.language, context: this.state.context 
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

    updateQuestion(event) {
        this.setState({
            question: event.target.value
        });
    }
    
    updateLanguage(event) {
        this.setState({
            language: event.target.value
        });
    }

    updateContext(event) {
        this.setState({
            context: event.target.value
        });
    }

    render() {
        return (
            <div className="QuestionForm">
                <form onSubmit={this.addQuestion}>
                    <input
                        onChange={this.updateUserId}
                        placeholder="User"
                        value={this.state.userId}
                    />
                    <input
                        onChange={this.updateQuestion}
                        placeholder="Question"
                        value={this.state.question}
                    />
                    <input
                        onChange={this.updateLanguage}
                        placeholder="Language"
                        value={this.state.language}
                    />
                    <input
                        onChange={this.updateContext}
                        placeholder="Context"
                        value={this.state.context}
                    />
                    <button type="submit">Submit Question</button>
                </form>
            </div>
        );
    }
}

export default AskQuestion;