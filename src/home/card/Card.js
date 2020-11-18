import React from 'react'
import './Card.css'

export default function Card({warehouse}) {
    return (
        <div className="cardContainer">
            <h4>{warehouse.name}</h4>
            <p><strong>City:</strong>{warehouse.city}</p>
            <p><strong>Cluster:</strong>{warehouse.cluster}</p>
            <p><strong>Space Available:</strong>{warehouse.space_available}</p>
            <p><strong>Live Status:</strong>{warehouse.is_live?"Yes":"No"}</p>
        </div>
    )
}
