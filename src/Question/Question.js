import React from 'react';

import './Question.css';

const Question = (props) => {
    const data = props.QuesData;
    return (
        <div className="Question">
            {data.question}
            {data.language}
            {data.context}
        </div>
    )
}

export default Question;