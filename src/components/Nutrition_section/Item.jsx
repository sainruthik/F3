import React from 'react'
import './item.css'

export default function Item({ item }) {
    return (
        <div className='item'>
            <img src={item.url} alt={item.name} />
            <div className="name">{item.name}</div>
        </div>
    )
}
