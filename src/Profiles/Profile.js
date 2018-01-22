import React from 'react';
import { Link } from 'react-router-dom';

import './Profile.css';

const Profile = (props) => {
    const data = props.ProfileData;
    return (
        <Link to={`/profile/${data.id}`}>
            <div className="Profile-all">
                <h3>{data.firstName}, {data.lastName}</h3>
                <p>{data.city}, {data.state}</p>
            </div>
        </Link>
    )
}

export default Profile;