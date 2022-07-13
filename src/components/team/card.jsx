import React from 'react'

function Card({ member }) {
    return (
        <div className="card">
            <div className="content">
                <div className="profile">
                    <img src={`images/img-team/${member.image}`} alt={member.name} />
                </div>
                <div className="detail">
                    <h3>{member.name}</h3>
                    {member.batch && <h4>{member.batch}</h4>}
                </div>
            </div>
        </div>
    )
}

export default Card