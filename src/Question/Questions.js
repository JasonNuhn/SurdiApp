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
                    {/* <Link to="/question">
                        <button type="button">
                            Review
                        </button>
                    </Link> */}
                    </div>
                )
            })}
            {/* {this.state.questions.map(curious => (
                <Magic key={curious.id} curious={curious} />
            ))} */}
            </div>
       );
   }
}

// function Magic({ curious }) {
//     const { question, context, language } = curious;
//     return (
//         <Link to={`/question/${curious.id}`}>
//       <div className="Question">
//         <h2>{question}</h2>
//         <div className="Question">
//           Context: <em>{context}</em>
//         </div>
//         <div className="Question">
//           Language: <strong>{language}</strong>
//         </div>
//         {/* <h3>Actors</h3>

//         {stars.map(star => (
//           <div key={star} className="Question">
//             {star}
//           </div> */}
//         ))}
//       </div>
//     </Link>
//     );
// }

export default Questions;