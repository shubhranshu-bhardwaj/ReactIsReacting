/*
ProfileCard Component
Accepts name, bio, and avatar as props.
Display them inside a styled card.
*/

import React from 'react'


const cardStyle = {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
};

const ProfileCard = ({ name, bio, avatar }) => {
    return (
        <div style={cardStyle}>
            <img src={avatar} alt={`${name}'s img`} />
            <h2>{name}</h2>
            <p>{bio}</p>
        </div>
    )
}

export default ProfileCard