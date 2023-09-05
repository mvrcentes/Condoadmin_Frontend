import "./MiniCard.css";
import React from 'react';

const MiniCard = ({ title, children }) => {
    return (
        <div className="mini-card-info-card" data-testid="mini-card">
            <div className="mini-card-title">{title}</div>
            <div>{children}</div>
        </div>
    )
}

export default MiniCard