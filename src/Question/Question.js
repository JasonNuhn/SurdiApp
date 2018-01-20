import React from 'react';
import { Link } from 'react-router-dom';
import './Question.css';

const Question = (props) => {
    const data = props.QuesData;
    return (
        <Link to={`/question/${data.id}`}>
        <div className="Question-all">
            <h3>{data.question}</h3>
            <p>{data.context}</p>
            <p className="Question-language">{data.language}</p>
        </div>
        </Link>
    )
}

export default Question;