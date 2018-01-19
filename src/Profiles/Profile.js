import React from 'react';

import './Profile.css';

const Profile = (props) => {
    const data = props.ProfileData;
    return (
        <div className="Profile" id="col">
            {data.firstName}
            {data.lastName}
            {data.city}
            {data.state}
        </div>
    )
}

export default Profile;