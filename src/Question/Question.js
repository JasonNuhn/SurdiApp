import React from 'react';

import './Question.css';

const Question = (props) => {
    const data = props.QuesData;
    return (
        <div className="Question-all">
            <h3>{data.question}</h3>
            <p>{data.context}</p>
            <p className="Question-language">{data.language}</p>
        </div>
    )
}

export default Question;