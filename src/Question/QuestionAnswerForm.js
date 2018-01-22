import React, { Component } from 'react';
import axios from 'axios';

class QuestionAnswerForm extends Component {
    constructor() {
        super();
        this.state = {
            answer: '',
            id: '',
            userId: '',
        };
        this.getAnswer = this.getAnswer.bind(this);
        this.updateAnswer = this.updateAnswer.bind(this);
    };
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

    getAnswer(event) {
        //const { match: { params } } = this.props;
        //const userId = params.userId;
        //const questionId = params.id;
    
        event.preventDefault();
        var questionId = this.props.id;
        var userId = this.props.userId;
        var element = document.documentElement;
        // console.log(element);
        console.dir(element);
        axios.post('http://localhost:3001/answer', { 
            body: {
                userId: userId, questionId: questionId, answer: this.state.answer 
            }})
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log({'error': err})
            });
            console.log('hello');
    
    }

    render() {
        return (
            <div className="Question">
                
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

export default QuestionAnswerForm
