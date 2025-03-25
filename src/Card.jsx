import React from 'react';

const Card = ({ name, onClick }) => (
    <div className="card"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
    >
        <h3>{name}</h3>
    </div>
);

export default React.memo(Card);