import React from 'react'
import ReactDOM from 'react-dom/client';
import '../App.css';
export default function Die(props) {
    return (
       <div className="die-box">
        <h2 className='die-num'>{props.value}</h2>
        </div>
      
    )
}