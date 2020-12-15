import React from 'react';
import './Card.css';

export const Card=(props)=>(

    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`}/>
        <h2>{props.monster.name}</h2>
        <p>Mail Id:{props.monster.email}</p>
    </div>
);