import React from 'react';

import './Language.css';

const Language = (props) => {
    const data = props.LangData;
    return (
        <div className="Language" id="col">
            {data.language}
        </div>
    )
}

export default Language;