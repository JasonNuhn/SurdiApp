import React from 'react';

import './User.css';

const User = (props) => {
    const data = props.UserData;
    return (
        <div className="User">
            {data.displayName}
        </div>
    )
}

export default User;